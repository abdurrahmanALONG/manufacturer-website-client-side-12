import React from 'react';
import Banner from './Banner';
import BringLatest from './BringLatest';
import Help from './Help';
import Items from './Items';
import Review from './Review';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className='container'>
                <Items></Items>
            </div>
            <div className='container'>
                <Summary></Summary>
            </div>
            <div className='container'>
                <Review></Review>
            </div>
            <div className='container'>
                <Help></Help>
            </div>
            <div>
                <BringLatest></BringLatest>
            </div>
        </div>
    );
};

export default Home;