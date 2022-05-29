import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './MyOrders.css'

const MyOrdersCard = ({ myitemDelete, handelDelete }) => {
    const { _id, email, name,  quantity, phone, address, unitPerPrice } = myitemDelete;




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
                <div><Link to={`/dashboard/Payment/${_id}`}><button className='btn  btn-info'>pay</button></Link>
                    <p><span className='text-success'>Paid</span></p>
                    {/* <p>Transaction id: <span className='text-success'>{myitemDelete.transactionId}</span></p> */}
                </div>
                
            </Card>
        </div>
    );
};

export default MyOrdersCard;