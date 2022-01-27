import React, { useState } from 'react';

const MakeAdmin = () => {
     const [email,setEmail] = useState('');
     const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
     const handleAdminSubmit = e =>{
         const user = {email};
         fetch('http://localhost:5000/users/admin',{
             method: 'PUT',
             headers: {
                 'content-type' : 'application/json'
             },
             body: JSON.stringify(user)
         })
         .then(res => res.json())
         .then(data => {
            if (data.modifiedCount) {
                // console.log(data);
                setSuccess(true);
            }
         })
         e.preventDefault()
     }

    return (
        <div className="my-3 row">
            <div className="col-md-6 mt-5 mb-3 text-center">
            <h2>Make An Admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <input type="email" label="Email" onBlur={handleOnBlur} className="form-control w-50 m-auto" placeholder="Enter email"/>
             <button type="submit" className="btn btn-primary mt-3">Make Admin</button>
            </form>
            {
            success && alert('Make admin Succcessfully')
            }
            </div>
            <div className="col-md-6">
                <img className="w-100" src="https://img.freepik.com/free-vector/man-look-graphic-chart-business-analytics-concept-big-data-processing-icon_39422-761.jpg?size=626&ext=jpg" alt="" />
            </div>
        </div>
    );
};

export default MakeAdmin;