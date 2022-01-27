import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom"
import useAuth from "../../../hooks/useAuth";


const PrivateRoute = ({children,...rest}) =>{
    const{user,isLoading} = useAuth();
       let location = useLocation();
       if(isLoading){
           return <Spinner animation="grow" />
       }

       if(user.email){
           return children;
       }
       return <Navigate to="/login" state={{ from: location }} />
}

export default PrivateRoute;