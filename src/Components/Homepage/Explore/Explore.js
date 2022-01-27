import React from 'react';
import './Explore.css'

const Explore = () => {
    return (
        <div className='text-center'>
            <h5 className="font-style mt-5">Modern and Beautiful</h5>
            <div className="mt-4 input-field">
                 <p><input className="form-control w-75 ms-4" type="text" placeholder="where to ?" /></p>
                 <p> <select className="form-control" name="travel">
                <option value="volvo">when?</option>
                <option >January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
                </select></p>
                <p> <select className="form-control ms-3" name="travel">
                <option>Travel Type</option>
                <option>Adventure</option>
                <option>Explore</option>
                <option>Holiday</option>
                </select></p>
                <p><input className="btn btn-danger" type="submit" value="FIND NOW" /></p>
            </div>
            <h2 className="fs-1 fw-bold mb-5">Explore the World For Yourself</h2>
            <div>
                <img className="map-image" src="./images/tour/map.png" alt="" />
            </div>
        </div>
    );
};

export default Explore;