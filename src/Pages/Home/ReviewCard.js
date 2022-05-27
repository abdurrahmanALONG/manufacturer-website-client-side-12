import React from 'react';
import { Card } from 'react-bootstrap';

const ReviewCard = ({ review }) => {
    const { description, rating } = review;
    return (
        <div>
            <Card className='m-2 p-2'>
                <Card.Body>
                    <p>{description}</p>
                    <h6>Rating: {rating}</h6>

                </Card.Body>
            </Card>
        </div>
    );
};

export default ReviewCard;