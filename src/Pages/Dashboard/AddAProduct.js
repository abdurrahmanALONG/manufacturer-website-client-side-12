import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const AddAProduct = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://polar-shore-11894.herokuapp.com/tools`;
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
            <h1 className='text-center'>Please add new item</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Item Name' type="text" {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='UnitPerPrice' type="number" {...register("unitPerPrice", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Available Quantity' type="number" {...register("availableQuantity")} />
                <input className='mb-2' placeholder='Min Order Quantity' type="number" {...register("minOrderQuantity")} />
                <input className='mb-2' placeholder='Supplier Name' {...register("suppliername", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Email' value={user?.email} type="text" {...register("email")} readOnly />
                <textarea className='mb-2' placeholder='Details' type="number" {...register("details")} />
                <input className='mb-2' placeholder='Image URL' type="text" {...register("img")} />
                <input className='btn btn-primary' type="submit" value="Add Item" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddAProduct;