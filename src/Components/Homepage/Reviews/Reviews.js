import React, { useEffect, useState} from 'react';
import { Col } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import './Reviews.css'
import Rating from 'react-rating';
import Slider from 'react-slick';

const Reviews = () => {
    const [reviews,setReviews] = useState([]);
    const {user} = useAuth();

    useEffect(() =>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => {
            setReviews(data);
            console.log(data);
        })
    },[]);

    const handleDelete = id => {
           const url = `http://localhost:5000/reviews/${id}`;
           fetch(url, {
               method: 'DELETE',
               headers: {"content-type" : "application/json"},
           })
           .then(res => res.json())
           .then(data => {
            // console.log(data);
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
                        'Your Review has been deleted.',
                        'success'
                      )
                    }
                  })
                const remaining = reviews.filter(review => review._id !== id);
                setReviews(remaining);
               }
             
              
         });
        }
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]

          };
              

    return (
        <div className="my-5 review">
            <h1 className="fw-bold text-center text-light">Total Reviews: {reviews.length}</h1>
            <div>
            <Slider {...settings}>
            {reviews.map(review => (
                    <Col key={review._id}>
                   <div className="card mb-3 mx-3 cards">
                  <div className="row g-0">
                    <div className="col-md-4 py-2 ps-2">
                    <img src={review.img} className="reviewer rounded-pill pt-5" alt="..."/>
                    <div className="mt-3">
                        <Rating
                         initialRating={review.rating}
                          emptySymbol="far fa-star"
                          fullSymbol="fas fa-star"
                          readonly
                        ></Rating>
                    </div>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title fw-bold">{review.name}</h4>
                        <p className="card-text text-dark">Email: {review.email}</p>
                        <p className="card-text text-dark "> {review.comment}</p>
                        {
                            user.email === review.email &&  <button onClick={() => handleDelete(review._id)} className="btn btn-secondary w-25 m-auto"><span><i className="fas fa-trash-alt"></i></span></button> 
                        }
                    </div>
                    </div>
                </div>
                </div>
                    </Col>
                ))}
            </Slider>
            </div>
        </div>
    );
};

export default Reviews;