import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageAllOrdersItem = ({items}) => {
    const { _id, name, address, phone, email, quantity } = items;
    const navigate = useNavigate();
    const navigateToOrderPage = id => {
        navigate(`/item/${id}`)
    }

    return (
        <div>
            <Card className='items'>
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <h6>phone: {phone}</h6>
                    <h6>email: {email}</h6>
                    <h6>address: {address}</h6>
                    <h6>quantity: {quantity}</h6>
                </Card.Body>
                <Card>
                    <Button onClick={() => navigateToOrderPage(_id)} variant="info" type="submit">
                        Order Now
                    </Button>
                </Card>
            </Card>
        </div>
    );
};

export default ManageAllOrdersItem;