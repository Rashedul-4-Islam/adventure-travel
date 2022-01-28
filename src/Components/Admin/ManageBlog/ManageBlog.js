import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Card, Col, Row } from 'react-bootstrap';
// import './Shop.css'

const ManageBlog = () => {
     const [products,setProducts] = useState([]);
     console.log(products);
     useEffect(() =>{
        fetch('https://agile-bayou-97493.herokuapp.com/totalBlogss')
        .then(res => res.json())
        .then(data => setProducts(data.totalBlogss))
     },[])

     const handleDelete = id => {
        const url = `https://agile-bayou-97493.herokuapp.com/totalBlogss/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {"content-type" : "application/json"},
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    }
                  })
             const remaining = products.filter(product => product._id !== id);
             setProducts(remaining);
            }
           
      });
     }

    return (
        <div>
            <div className="">
                <h2 className="fw-bold text-dark pt-5">Manage All user Post</h2>
            </div>
            <div className="mb-4 my-order">
            <Row xs={1} md={3} className="g-5 mx-4 mt-3">
                {products?.map(product => (
                   
                    <Col  key = {product._id}>
                    <Card className="pb-3 shop-card cards">
                        <Card.Img className="drone-image" variant="top" src={product.img} />
                        <Card.Body>
                        <Card.Title className="fs-3 fw-bold service-name">{product.name}</Card.Title>
                        {/* <Card.Text className="text-slice">
                            {product.description}
                        </Card.Text>
                        <Card.Text className="fw-bold">
                           Price : ${product.price}
                        </Card.Text> */}
                        </Card.Body>

                        <button onClick={() => handleDelete(product._id)} className="btn btn-danger w-50 m-auto">Delete</button> 
                        
                    </Card>
                    </Col>
                ))}
                </Row>
            </div>
        </div>
    );
};

export default ManageBlog;