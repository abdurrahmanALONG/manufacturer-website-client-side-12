import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div>
            <h4 className='text-center'>This is Your Profile page, if you want you can change it.</h4>
            <div>
                
            </div>
            <div>
            <Card className='my-4'>
                    <Form className=' mx-auto text-center'>
                        <Card.Body className='w-100 mx-auto text-center'>
                            <Card.Title>User Name: {user.displayName} </Card.Title>
                            <Card.Text>User Email: {user.email}</Card.Text>
                        </Card.Body>
                        <Form.Group className="mb-3 text-center" controlId="formProfileUpdate">
                            <Button className='my-2' variant="primary" type="submit">
                                Update
                            </Button>
                        </Form.Group>
                    </Form>
                </Card>
            </div>

        </div>
    );
};

export default MyProfile;