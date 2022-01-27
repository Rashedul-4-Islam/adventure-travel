import React from 'react';
import AllBlogs from '../../Components/Homepage/AllBlogs/AllBlogs';
import Explore from '../../Components/Homepage/Explore/Explore';
import Slider from '../../Components/Homepage/Slider/Slider';
// import Header from '../../Components/Header/Header';

const Home = () => {
    return (
        <div>
            <Slider/>
            <AllBlogs/>
            <Explore/>
        </div>
    );
};

export default Home;