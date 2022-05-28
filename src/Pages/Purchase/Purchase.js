import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Purchase = () => {
      
    return (
        <div>
            <h1 className='text-center'>This is for Purchase</h1>
              <Card className='items w-50 mx-auto'>
                <Card.Body>
                    {/* <Card.Title>Name: {name}</Card.Title>
                    <h6>Email: {email}</h6>
                    <h6>Order Quantity: {quantity}</h6>
                    <h6>Phone: {phone}</h6>
                    <h6>Address: {address}</h6> */}
                </Card.Body>
                <Card>
                    <Button variant="info" type="submit">
                    Purchase Now
                    </Button>
                </Card>
            </Card>
        </div>
      
    );
};

export default Purchase;