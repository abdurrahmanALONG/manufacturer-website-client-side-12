import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './MyOrders.css'

const MyOrdersCard = ({ myitemDelete, handelDelete }) => {
    const { email, name, img, unitPerPrice, availableQuantity, minOrderQuantity, suppliername, details } = myitemDelete;
   const navigate = useNavigate();
   const navigatePurchasPage = event => {
    navigate('/Purchase');
}



    return (
        <div>
            <Card className='myitem'>
                <Card.Img className='deleteImg' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h6>Unit Per Price: ${unitPerPrice}</h6>
                    <h6>Available Quantity: {availableQuantity}</h6>
                    <h6>Min-Order Quantity: {minOrderQuantity}</h6>
                    <h6>Supplier Name: {suppliername}</h6>
                    <p>{details}</p>
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