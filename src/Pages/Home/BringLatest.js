import React from 'react';
import { useForm } from "react-hook-form";

const BringLatest = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='bringlatest mt-5 p-5'>
            <div className='container'>
                <h3>BRING THE LATEST TO YOUR INBOX</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='me-2' placeholder='Email Address' type="email" {...register("email")} />
                    <input className='mx-2' placeholder='Phone Number' type="number" {...register("phoneNumber")} />
                    <input className='mx-2' placeholder='Business Type' type="text" {...register("BusinessType")} />
                    <input className='btn btn-info mx-2' type="submit" value="SUBSCRIBE" />
                </form>
                <div><small>The information collected is used to send you newsletters, targeted information regarding AR-Parts® products, and information about events in your area. This contact information is shared with a third-party vendor used to disseminate emails, but will not be shared or sold to any other third-party.</small></div>
            </div>
        </div>
    );
};

export default BringLatest;