import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './MyOrders.css'

const MyOrdersCard = ({ myitemDelete, handelDelete }) => {
    const { _id, email, name, quantity, phone, address, unitPerPrice, paid } = myitemDelete;

    const onePrice = parseInt(unitPerPrice);
    const quantitys = parseInt(quantity);
    const total = onePrice * quantitys;


    return (
        <div>
            <Card className='myitem'>
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <h6>Phone: {phone}</h6>
                    <h6>Available Quantity: {quantity}</h6>
                    <h6>Email: {email}</h6>
                    <p>{address}</p>
                    <div className='text-center my-2'>
                        {(total && !paid) && <Link to={`/dashboard/Payment/${_id}`}><button className='btn  btn-info'>pay</button></Link>}
                        {(total && paid) && <div>
                            <p><span className='text-success'>Paid</span></p>
                            {/* <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p> */}
                        </div>}
                    </div>
                </Card.Body>
                <Card.Body className='mx-auto'>
                    <Card.Link className='btn btn-primary pe-auto mx-2 text-center' onClick={() => handelDelete(myitemDelete._id)} >
                        Cancel
                    </Card.Link>
                </Card.Body>


            </Card>
        </div>
    );
};

export default MyOrdersCard;