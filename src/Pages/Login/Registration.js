import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loding from '../../Pages/Loding/Loding'
import useToken from '../../CommonPages/useToken';

const Registration = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    // console.log('hi this is', user);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [token] = useToken(user);




    const navigate = useNavigate();
    const navigateLoginPage = event => {
        navigate('/Login')
    }

    if (loading) {
        <Loding></Loding>
    }
    if (token) {
        navigate('/Home')
    }

    const handelRegistration = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(name, email, password);
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='container w-50 mx-auto'>
            <h1 className='text-primary text-center mt-2'>Please Register</h1>
            <Form onSubmit={handelRegistration}>
                <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="userName" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already Do have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLoginPage}>Please Login</Link> </p>

        </div>
    );
};

export default Registration;