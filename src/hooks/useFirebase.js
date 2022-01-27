import { getAuth, signInWithPopup,createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider,signOut, onAuthStateChanged, updateProfile,sendEmailVerification } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Components/LoginSystem/Firebase/firebase.init";
// import initializeFirebase from "../Pages/LoginSystem/Firebase/firebase.init";

initializeFirebase();

const useFirebase = () =>{
     const [user,setUser] = useState({});
     const [isLoading, setIsLoading] = useState(true);
     const [authError,setAuthError] = useState({});
     const [admin, setAdmin] = useState(false);   

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email,password,name, navigate) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = { email, displayName: name };
            setUser(newUser);
            verifyEmail();
            // save user to the database
            saveUser(email, name, 'POST');
            // send name to firebase
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
            }).catch((error) => {
            });
            navigate('/');
        })
        .catch((error) => {
            setAuthError(error.message);
            console.log(error);
        })
        .finally(() => setIsLoading(false));
    }

    const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then(() => {
            // Email verification sent!
            // ...
        });
    }
    
    const logInUser = (email,password,location, navigate) =>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/dashboard';
            navigate(destination);
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, navigate) =>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT');
            setAuthError('');
            const destination = location?.state?.from || '/';
            navigate(destination);
        }).catch((error) => {
            setAuthError(error.message);
        }).finally(() => setIsLoading(false));
    }
    

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    useEffect(() => {
        fetch(`https://agile-bayou-97493.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () =>{
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName,method) => {
        const user = { email, displayName };
        fetch('https://agile-bayou-97493.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
}

    return{
        signInWithGoogle,
        logOut,
        user,
        admin,
        authError,
        registerUser,
        logInUser,
        isLoading
    }
    
}

export default useFirebase;