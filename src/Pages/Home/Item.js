import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Home.css'



const Item = ({ item }) => {
    const { _id, name, img, unitPerPrice, availableQuantity, minOrderQuantity, suppliername, details } = item;
    const navigate = useNavigate();
    const navigateToOrderPage = id => {
        navigate(`/item/${id}`)
    }



    return (
        <div>
            <Card className='items'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h6>Unit Per Price: ${unitPerPrice}</h6>
                    <h6>Available Quantity: {availableQuantity}</h6>
                    <h6>Min-Order Quantity: {minOrderQuantity}</h6>
                    <h6>Supplier Name: {suppliername}</h6>
                    <p>{details}</p>
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

export default Item;