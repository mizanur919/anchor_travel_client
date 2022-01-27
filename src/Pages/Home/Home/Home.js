import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner'
import Services from '../Services/Services'
import ChooseUs from '../ChooseUs/ChooseUs'
import Blogs from '../Blogs/Blogs';
import Subscription from '../../Subscription/Subscription';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Subscription></Subscription>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;