import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ManageProducts = () => {
    const { ItemID } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `https://still-inlet-24305.herokuapp.com/item/${ItemID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, []);

    // This is for Add New Quantity
    const handleUpdateQuantity = event => {
        event.preventDefault();
        const oldQuantity = parseInt(item.quantity);
        const newQuantity = parseInt(event.target.name.value);
        const totalNewQuantity = oldQuantity + newQuantity;
        const updatedQuantity = { totalNewQuantity };

        const url = `https://still-inlet-24305.herokuapp.com/item/${item._id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Are you sure!!!');
                event.target.reset();
                window.location.reload();
            })
    }




    // this is for Delivered
    const handleDicrisQuantityByOne = event => {
        event.preventDefault();
        const quantityCurrent = parseInt(item.quantity);
        console.log(quantityCurrent);
        const totalNewQuantity = quantityCurrent - 1;
        console.log(totalNewQuantity);
        const updatedQuantity = { totalNewQuantity };
        const url = `https://still-inlet-24305.herokuapp.com/item/${item._id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Are you sure!!!');
                event.target.reset();
                window.location.reload();
            })
    }

    return (
        <div className='mt-3'>
            <h1 className='text-center my-4'>This is the full Details about the product no: {ItemID}</h1>
            <div className='px-auto'>
                <Card className='my-4'>
                    <Form className=' mx-auto text-center' onSubmit={handleDicrisQuantityByOne}>
                        <Card.Img className='w-100  text-center' variant="top" src={item.img} />
                        <Card.Body className='w-100 mx-auto text-center'>
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
                        <Form className='w-100 mx-auto' onSubmit={handleUpdateQuantity}>
                            <Form.Group className="mb-3" controlId="formBasicnewQuantity">
                                <Form.Control type="number" name="name" placeholder="Put New Quantity" />
                                <Button className='my-2' variant="primary" type="submit">
                                    Add New Quantity
                                </Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ManageProducts;