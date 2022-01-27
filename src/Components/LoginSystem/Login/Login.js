import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData,setLoginData] = useState({});
    const {signInWithGoogle,logInUser} = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        logInUser(loginData.email, loginData.password, location, navigate)        
        e.preventDefault();
    }
    
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }

    return (
        <div>
             <div>
            <div className='register_banner '>
            <h2 className='w-25 m-auto pt-4 fw-bold'>Log In Your Account</h2>
              <div className='shop_intros form-area mt-5 w-25 m-auto'>
              <form onSubmit={handleLoginSubmit}>
                  <label className='mt-3 fs-5 fw-bold' htmlFor="">Email</label>
                  <input type="email" onBlur={handleOnBlur} className='form-control bg-dark text-light' name='email' placeholder='Enter Email'/>
                  <label className='mt-3 fs-5 fw-bold' htmlFor="">Password</label>
                  <input type="password" onBlur={handleOnBlur} className='form-control bg-dark text-light' name='password' placeholder='Enter password'/>
                  <input type="checkbox" id="vehicle1" name="vehicle1" className='me-2 mt-2' value="Bike"/>
                  <label for="vehicle1">Remember me</label>
                  <div className='w-25 m-auto'>
                  <input className='btn btn-outline-dark  mt-2' type="submit" value="Log In" />
                  </div>
              </form>
               <p className='fw-bold mt-2'>Don't Have An Account? <Link to="/register">register now</Link></p>
               <p className='w-50 m-auto fw-bold'>---------OR----------</p>
                <div className='w-25 m-auto'>
                   <button onClick={handleGoogleSignIn} className='btn btn-warning fs-4 px-4'><i className="fab fa-google"></i></button>
                </div>
              </div>
            </div>
        </div>
        </div>
    );
};

export default Login;