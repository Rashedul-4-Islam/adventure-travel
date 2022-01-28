import React from 'react';
import AllBlogs from '../../Components/Homepage/AllBlogs/AllBlogs';
import Explore from '../../Components/Homepage/Explore/Explore';
import Reviews from '../../Components/Homepage/Reviews/Reviews';
import Slider from '../../Components/Homepage/Slider/Slider';
// import Header from '../../Components/Header/Header';

const Home = () => {
    return (
        <div id="home">
            <Slider/>
            <AllBlogs/>
            <Explore/>
            <Reviews/>
        </div>
    );
};

export default Home;