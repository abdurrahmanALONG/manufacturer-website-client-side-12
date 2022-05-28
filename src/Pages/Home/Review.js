import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Logo from '../../images/card/pro-1.jpg'
import './Home.css'
import ReviewCard from './ReviewCard';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://polar-shore-11894.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    
    return (
        <div className='my-5'>
            <h1 className='text-center'>REVIEWS</h1>
            <div className='personComent'>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                        ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;