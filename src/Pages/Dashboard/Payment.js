import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loding from '../Loding/Loding';

const Payment = () => {
    const { id } = useParams(); 
    const url = `https://polar-shore-11894.herokuapp.com/orders/${id}`;

    const { data: orderProduct, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loding></Loding>
    }
   const onePrice = parseInt(orderProduct.unitPerPrice);
   const quantity = parseInt(orderProduct.quantity);
   const total = onePrice*quantity;
 

    return (
        <div>
            <div>
                <h1 className='text-center my-4'>Please Pay</h1>
                <Card className='my-4 mx-auto w-50 text-center'>
                    <Card.Body className='w-50 mx-auto text-center'>
                        <Card.Title>Product Name: {orderProduct.name} </Card.Title>
                        <Card.Text>Unit Per Price: {orderProduct.unitPerPrice}</Card.Text>
                        <Card.Text>Quantity: {orderProduct.quantity}</Card.Text>
                        <Card.Text>Phone: {orderProduct.phone}</Card.Text>
                        <Card.Text>Email: {orderProduct.email}</Card.Text>
                        <Card.Text>Address: {orderProduct.address}</Card.Text>
                    </Card.Body>
                    <h5>Total bill: ${total}</h5>
                </Card>
            </div>

        </div>
    );
};

export default Payment;