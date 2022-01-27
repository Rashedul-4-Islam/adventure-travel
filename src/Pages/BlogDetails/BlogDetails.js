import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './BlogDetails.css'

const BlogDetails = () => {
    let {id} = useParams();
    const [details,setDetails] = useState([]);
    useEffect(() =>{
        fetch("http://localhost:5000/totalBlogss")
        .then(res => res.json())
        .then(data => setDetails(data?.totalBlogss))
    },[])
    const matchItem = details.find(item => item._id == id)
    console.log(matchItem);
    return (
        <div>
            <div className='blog-banner text-light'>
                <p className='fw-bold'>Amazing Tour</p>
               <h1 className='fs-1 fw-bold'>{matchItem?.name}</h1>
            </div> 
            <div className='blog-details'>
                <div className='first-item'>
                    <div>
                    <h2 className='fw-bold'>{matchItem?.name} <span className='fs-5 text-secondary'>$ {matchItem?.cost}/ per person</span></h2>
                    <p>{matchItem?.date}</p>
                    </div>
                    <img className='w-25' src={matchItem?.img} alt="" />
                </div>
                <hr/>
                <p>{matchItem?.description}</p>
                <p className='fw-bold'>Destination: {matchItem?.location}</p>
                <div>
                    <h2 className='fw-bold'>From Gallery</h2>
                <Row xs={1} md={3} className="g-5 mx-4 mt-3">
                    {
                        matchItem?.gallery.map(photo =>(
                            <Col>
                                <img className='map-image' src={photo} alt="" />
                            </Col>
                        ))
                    }
                </Row>
                </div>
            </div>  
        </div>
    );
};

export default BlogDetails;