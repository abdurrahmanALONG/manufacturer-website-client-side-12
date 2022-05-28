import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const MakeOrder = () => {
    const { itemID } = useParams();
    const [user] = useAuthState(auth);
    const [show, setShow] = useState(false);
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://polar-shore-11894.herokuapp.com/tools/${itemID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [itemID]);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://polar-shore-11894.herokuapp.com/orders`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('Orderd Successfully');
                window.location.reload();
            })
    };



    return (
        <div className='my-5'>
            <div className='text-center'>
                {
                    show ? <h4><span>UserName:{user.displayName}</span><span><h6>User email:{user.email}</h6></span></h4> : null
                }
                {
                    <button className='btn-info' onClick={() => setShow(!show)}>User Info</button>
                }
            </div>
            <div>
                <h1 className='text-center my-4'>This is the full Details about the product</h1>
                <Card className='my-4 mx-auto w-50 text-center'>
                    <Card.Body className='w-50 mx-auto text-center'>
                        <Card.Title>Product Name: {item.name} </Card.Title>
                        <Card.Text>Unit Per Price: {item.unitPerPrice}</Card.Text>
                        <Card.Text>Available Quantity: {item.availableQuantity}</Card.Text>
                        <Card.Text>Min Order Quantity: {item.minOrderQuantity}</Card.Text>
                        <Card.Text>Supplier Name: {item.suppliername}</Card.Text>
                        <Card.Text>Details: {item.details}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className='w-50 mx-auto my-5'>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Item Name' type="text" value={item?.name}  {...register("name")} readOnly />
                    <textarea className='mb-2' placeholder='Address' type="text" {...register("address")} />
                    <input className='mb-2' placeholder='Quantity' type="number" min={item.minOrderQuantity} max={item.availableQuantity} {...register("quantity")} />
                    <input className='mb-2' placeholder='Phone number' type="number" {...register("phone")} />
                    <input className='mb-2' placeholder='Supplier Email' value={user?.email} type="text" {...register("email")} readOnly />
                    <input className='btn btn-primary' type="submit" value="Purchase" />
                </form>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default MakeOrder;