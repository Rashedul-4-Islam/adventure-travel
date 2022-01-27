import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import "./Register.css"

const Register = () => {
    const [loginData,setLoginData] = useState({});
    const navigate = useNavigate();
    const {registerUser,isLoading}= useAuth();
    const handleOnBlur = e =>{
             const field = e.target.name;
             const value = e.target.value;
             const newLoginData = { ...loginData };
             newLoginData[field] = value;
             setLoginData(newLoginData);
     }
     const handleLoginSubmit = e =>{
        registerUser(loginData.email, loginData.password, loginData.name, navigate);
        e.preventDefault();
     }
    return (
        <div>
            <div className='register_banner '>
            <h2 className='w-25 m-auto pt-4 fw-bold'>Register Account</h2>
              <div className='shop_intros form-area mt-5 w-25 m-auto'>
               {
                   !isLoading &&   <form  onSubmit={handleLoginSubmit}>
                                <label className=' fs-5 fw-bold' htmlFor="">Full Name</label>
                                <input type="text" className='form-control bg-dark text-light' onBlur={handleOnBlur} name='name' placeholder='Enter Name'/>
                                <label className='mt-3 fs-5 fw-bold' htmlFor="">Email</label>
                                <input type="email" className='form-control bg-dark text-light' onBlur={handleOnBlur} name='email' placeholder='Enter Email'/>
                                <label className='mt-3 fs-5 fw-bold' htmlFor="">Password</label>
                                <input type="password" className='form-control bg-dark text-light' onBlur={handleOnBlur} name='password' placeholder='Enter password'/>
                                <input type="checkbox" id="vehicle1" name="vehicle1" className='me-2 mt-2' value="Bike"/>
                                <label for="vehicle1"> I agree to the Terms and Privacy Policy.</label>
                                <div className='w-25 m-auto'>
                                <input className='btn btn-outline-dark  mt-2' type="submit" value="Register" />
                                </div>
                                <p className='fw-bold mt-2'>Already Have An Account? <Link to="/login">Log In</Link></p>
                            </form>
               }
                {
                    isLoading && <Spinner animation="grow" />
                }

              </div>
            </div>
        </div>
    );
};

export default Register;