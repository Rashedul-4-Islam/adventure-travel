import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import blogData from '../BlogData/BlogData';
import './AllBlogs.css'

const AllBlogs = () => {
    const [blogs,setBlogs] = useState([]);
    const [page,setPage] = useState(0);
    const [pageCount,setPageCount] = useState(0);
    const size = 10;
    useEffect(()=>{
        fetch(`https://agile-bayou-97493.herokuapp.com/totalBlogss?page=${page}&&size=${size}`)
        .then(res => res.json())
        .then(data => {
            setBlogs(data?.totalBlogss)
            const count = data.count;
            const pageNumber = Math.ceil(count/size);
            setPageCount(pageNumber);
        })
        
    },[page])
    return (
        <div>
            <h1 className="fw-bold mt-5 text-center"> <span className="fs-5 font-style text-warning">Explore Your</span> <br /> Perfect Destination</h1>
            <div>
            <Row xs={1} md={4} className="g-5 mx-4 mt-3">
                {blogs.map(blog => (
                   
                    <Col  key = {blog._id}>
                         <div>
                         <Link to={`/blogDetails/${blog._id}`}>
                             <div className='blog-main-box'>
                               <img className='w-100 blog-image' src={blog.img} alt="" />
                                <div className='blog-inner-box'>
                                    <div>
                                    <h3 className='text-light'>{blog.name}</h3>
                                    <p className='text-warning'><i className="fas fa-star"></i> {blog.rating}</p>
                                    </div>
                                    <h4>$ {blog.cost}</h4>
                                </div>
                             </div>
                             </Link>
                         </div>
                    </Col>
                ))}
                  <div className='pagination'>
                    {
                         [...Array(pageCount).keys()].map(number =>
                             <button
                            className={number === page ? 'selected':''}
                            key={number}
                            onClick={() => setPage(number)}
                         >{number}</button>
                         )
                     }
                </div>
                </Row>
              
            </div>
        </div>
    );
};

export default AllBlogs;