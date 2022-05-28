import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './MyOrders.css'

const MyOrdersCard = ({ myitemDelete, handelDelete }) => {
    const { email, name,  quantity, phone, address } = myitemDelete;
   const navigate = useNavigate();
   const navigatePurchasPage = event => {
    navigate('/Purchase');
}



    return (
        <div>
            <Card className='myitem'>
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <h6>Phone: {phone}</h6>
                    <h6>Available Quantity: {quantity}</h6>
                    <h6>Email: {email}</h6>
                    <p>{address}</p>
                </Card.Body>
                <Card.Body className='mx-auto'>
                    <Card.Link className='btn btn-primary pe-auto mx-2 text-center'  onClick={() => handelDelete(myitemDelete._id)} >
                        Cancel
                    </Card.Link>
                </Card.Body>
                <Card.Body className='mx-auto'>
                    <Card.Link className='btn btn-primary pe-auto mx-2 text-center' onClick={navigatePurchasPage} >
                      Purches
                    </Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MyOrdersCard;