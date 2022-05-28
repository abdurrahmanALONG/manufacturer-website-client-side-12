import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth);

    const [myAllOrders, setMyAllOrders] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setMyAllOrders(data));
        }
    }, [user])
      
    return (
        <div>
            <Card className='myitem '>
                <Card.Body>
                    <Card.Title>Name: {myAllOrders.name}</Card.Title>
                    <h6>Email: ${myAllOrders.email}</h6>
                    <h6>Order Quantity: {myAllOrders.quantity}</h6>
                    <h6>Min-Order Quantity: {myAllOrders.phone}</h6>
                    <h6>Address: {myAllOrders.address}</h6>
                </Card.Body>
                 {/* <Card.Body className='mx-auto'>
                    <Card.Link className='btn btn-primary pe-auto mx-2 text-center'  onClick={() => handelDelete(myitemDelete._id)} >
                        Cancel
                    </Card.Link>
                </Card.Body>  */}
            </Card>
        </div>
      
    );
};

export default Purchase;