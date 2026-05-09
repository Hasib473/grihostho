import React from 'react';
import Hero from '../Components/Homepage/Hero';
import Product from '../Components/Homepage/Product';
import TopProducts from '../Components/Homepage/TopProducts';
import CustomerFeedback from '../Components/Homepage/CustomerFeedback';

const Home = () => {
    return (
        <div>
            <div>
                <Hero/>
            </div>
             
            <div>
                <Product/>
            </div>

            <div>
                <TopProducts/>
            </div>
            <div>
                <CustomerFeedback/>
            </div>
            
        </div>
    );
};

export default Home;