import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css'

const Slider = () => {
    return (
        <div>
        <Carousel fade>
        <Carousel.Item>
            <img
            className="d-block w-100 ban-height"
            src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-3.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h1 className="caption">Explore and Travel</h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 ban-height"
            src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-2.jpg"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h1 className="caption">enjoy <span className="text-warning">Hill</span></h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 ban-height"
            src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-15.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h1 className="caption text-dark">Fun with ice</h1>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
    );
};

export default Slider;