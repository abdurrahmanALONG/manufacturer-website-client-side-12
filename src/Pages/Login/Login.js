import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleLogin from './GoogleLogin';
import Loding from '../../Pages/Loding/Loding';
import './Login.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import useToken from '../../CommonPages/useToken';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorHandel;
    let from = location.state?.from?.pathname || "/";
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user);





    const navigateRegiestarPage = event => {
        navigate('/Registration');
    }



    if (loading) {
        return <Loding></Loding>
    }
    if (error) {
        errorHandel = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }
    if (token) {
        navigate(from, { replace: true });
    }


    const handelLogin =  async(event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log( email, password);
        await  signInWithEmailAndPassword(email, password);
        const {data} = await axios.post('https://polar-shore-11894.herokuapp.com/tools', {email});
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
    }


    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email Successfully');
        }
        else {
            toast('please enter your email address');
        }
    }

    return (
        <div className='container w-50 mx-auto'>
            <h1 className='text-primary text-center mt-2'>Please Login</h1>
            <Form onSubmit={handelLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p> If you are new here... <Link to="/registration" className='text-primary pe-auto text-decoration-none' onClick={navigateRegiestarPage}>Please Register First</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <GoogleLogin></GoogleLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;