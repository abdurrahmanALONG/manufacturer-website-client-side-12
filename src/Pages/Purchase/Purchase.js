import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const { itemID } = useParams();
    const [user, loading] = useAuthState(auth);
    console.log(itemID);
    const [itembuy, setItembuy] = useState({});
    
    useEffect(() => {
        // const url = `http://localhost:5000/tools/${itemID}`;
        const url = `http://localhost:5000/tools`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItembuy(data));

    }, [itemID]);
    console.log(itembuy.name,[0]);


    // // This is for Add New Quantity
    // const handleUpdateQuantity = event => {
    //     event.preventDefault();
    //     const oldQuantity = parseInt(item.quantity);
    //     const newQuantity = parseInt(event.target.name.value);
    //     const totalNewQuantity = oldQuantity + newQuantity;
    //     const updatedQuantity = { totalNewQuantity };

    //     const url = `items.json/${item.id}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updatedQuantity)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('success', data);
    //             alert('Are you sure!!!');
    //             event.target.reset();
    //             window.location.reload();
    //         })
    // }



    // // this is for Delivered
    // const handleDicrisQuantityByOne = event => {
    //     event.preventDefault();
    //     const quantityCurrent = parseInt(item.quantity);
    //     console.log(quantityCurrent);
    //     const totalNewQuantity = quantityCurrent - 1;
    //     console.log(totalNewQuantity);
    //     const updatedQuantity = { totalNewQuantity };
    //     const url = `items.json/${item.id}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updatedQuantity)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('success', data);
    //             alert('Are you sure!!!');
    //             event.target.reset();
    //             window.location.reload();
    //         })
    // };

    return (
        <div className='mt-3'>
            <h1 className='text-center my-4'>This is the full Details about the product no: {itemID}</h1>
            {/* <div className='px-auto'>
                <Card className='my-4'>
                    <Form className=' mx-auto text-center' onSubmit={handleDicrisQuantityByOne}>
                        <Card.Img className='w-50  text-center' variant="top" src={item.img} />
                        <Card.Body className='w-50 mx-auto text-center'>
                            <Card.Title>Product Name: {item.name} </Card.Title>
                            <Card.Text>Price: {item.price}</Card.Text>
                            <Card.Text>Quentity: {item.quantity}</Card.Text>
                            <Card.Text>Supplier Name: {item.suppliername}</Card.Text>
                            <Card.Text>Supplier Email: {item.email}</Card.Text>
                            <Card.Text>Details: {item.details}</Card.Text>
                        </Card.Body>
                        <Form.Group className="mb-3 text-center" controlId="formBasicnewQuantity">
                            <Button className='my-2' variant="primary" type="submit">
                                Delivered
                            </Button>
                        </Form.Group>
                    </Form>
                    <Card.Body className=' text-center'>
                        <Form className='w-50 mx-auto' onSubmit={handleUpdateQuantity}>
                            <Form.Group className="mb-3" controlId="formBasicnewQuantity">
                                <Form.Control type="number" name="name" placeholder="Put New Quantity" />
                                <Button className='my-2' variant="primary" type="submit">
                                    Add New Quantity
                                </Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
                <div className='my-3 text-center'>
                    <Link to="/Items" className='btn btn-primary pe-auto text-center'>
                        Manage Inventories
                    </Link>
                </div>
            </div> */}
        </div>
    );
};

export default Purchase;