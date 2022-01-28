import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './DashBoard.css'
import {
    Outlet
} from "react-router-dom";

const DashBoard = () => {
    const{logOut,admin,user} = useAuth();
    return (
        <div>
             <div className="row">
                <div className="col-md-2 pt-3 dashboard">
                {
                   (user.email && !admin) && <div className="ms-2">
                    <h3 className="text-decoration-none fw-bold" >USER</h3>
                    </div>
                }
                {
                   admin && <div className="">
                    <h3 className="text-decoration-none fw-bold" >Admin Panel</h3>
                    </div>
                }
                <hr/>
                {
                   (user.email && !admin) && <div>
                         {/* <div className="mb-2 dash-button ps-4">
                        <Link className="text-decoration-none fw-bold" to="/dashboard/myorders"><span><i className="fab fa-first-order"></i></span> MyOrders</Link>
                        </div> */}
                        <div className="mb-2 dash-button ps-4">
                        <Link className="text-decoration-none fw-bold" to="/dashboard/post" ><span><i className="fas fa-dollar-sign"></i></span> Post</Link>
                        </div>
                        <div className="mb-2 dash-button ps-4">
                        <Link className="text-decoration-none fw-bold" to="/dashboard/review"><span><i className="fas fa-file-pdf"></i></span> Review</Link>
                        </div>
                    </div>
                }
                {
                    admin && <div>
                        {/* <div className="mb-2 dash-button ps-4">
                       <Link className="text-decoration-none fw-bold" to="/dashboard/userorders"><span><i className="fab fa-first-order"></i></span> All Orders</Link>
                       </div> */}
                       <div className="mb-2 dash-button ps-4">
                       <Link className="text-decoration-none fw-bold" to="/dashboard/makeadmin"><span><i className="fab fa-first-order"></i></span> Make Admin</Link>
                       </div>
                       <div className="mb-2 dash-button ps-4">
                       <Link className="text-decoration-none fw-bold" to="/dashboard/blogPost"><span><i className="fab fa-first-order"></i></span> Blog Post</Link>
                       </div>
                       <div className="mb-2 dash-button ps-4">
                       <Link className="text-decoration-none fw-bold" to="/dashboard/manageBlog"><span><i className="fab fa-first-order"></i></span> Manage Blog</Link>
                       </div>
                      </div>
                }
                <div className="my-3">
                     <button className="btn btn-warning fw-bold ms-3" onClick={logOut}><span><i className="fas fa-sign-out-alt"></i></span> Log Out</button>
                </div>
                </div>
                <div className="col-md-10">
             
                  <Outlet></Outlet>
                 
                </div>
            </div>
        </div>
    );
};

export default DashBoard;