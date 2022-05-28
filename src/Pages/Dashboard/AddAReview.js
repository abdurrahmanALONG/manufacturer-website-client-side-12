import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const AddAReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://polar-shore-11894.herokuapp.com/reviews`;
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
        <div className='w-50 mx-auto my-5'>
            <h1 className='text-center'>Please add your review</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <textarea className='mb-2' placeholder='Description' type="text" {...register("description")} />
                <input className='mb-2' placeholder='Please Ratings us(1 to 5 )' type="number" {...register("ratings")} />
                <input className='btn btn-primary' type="submit" value="Add Review" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddAReview;