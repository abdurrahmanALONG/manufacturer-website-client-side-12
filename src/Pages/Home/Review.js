import React from 'react';
import { Card } from 'react-bootstrap';
import Logo from '../../images/card/pro-1.jpg'
import './Home.css'

const Review = () => {
    return (
        <div className='my-5 reviewbackground'>
            <h1 className='text-center'>Castomar Reviews</h1>
            <div className='mx-2 p-2'>
                <Card className='my-5' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                        <div className='personComent'>
                            <div >
                                <span ><img className='reviewerimg' height={40} src={Logo} alt="" /></span>
                            </div>
                            <div>
                                <h6>Abdur Rahman</h6>
                                <p><small>California</small></p>
                            </div>
                            <div>
                                <br></br>
                            </div>
                            <div>
                                <br></br>
                            </div>
                            <div>
                                <br></br>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Review;