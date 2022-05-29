import React from 'react';
import { Card, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://polar-shore-11894.herokuapp.com/userDital`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('Add Successfully');
                window.location.reload();
            })
    };


    return (
        <div>
            <h4 className='text-center'>This is Your Profile page, if you want you can change it.</h4>
            <div>
                <Card className='my-4'>
                    <Form className=' mx-auto text-center'>
                        <Card.Body className='w-100 mx-auto text-center'>
                            <Card.Title>User Name: {user.displayName} </Card.Title>
                            <Card.Text>User Email: {user.email}</Card.Text>
                        </Card.Body>
                    </Form>
                </Card>
            </div>
            <div className='w-50 mx-auto my-5'>
            <h1 className='text-center'>Update your Profile</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='User Name' value={user.displayName} type="text" {...register("name")} readOnly/>
                <input className='mb-2' placeholder='Email' value={user?.email}  type="text" {...register("email")} readOnly />
                <textarea className='mb-2' placeholder='Education' type="text" {...register("education")} />
                <input className='mb-2' placeholder='Location ' type="text" {...register("location ")} />
                <input className='mb-2' placeholder='Phone ' type="number" {...register("phone")} />
                <input className='mb-2' placeholder='LinkedIn link' type="text" {...register("LinkedIn")} />
                <input className='btn btn-primary' type="submit" value="Add Item" />
            </form>
            <ToastContainer></ToastContainer>
        </div>

        </div>
    );
};

export default MyProfile;