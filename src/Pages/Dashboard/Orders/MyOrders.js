import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import MyOrdersCard from './MyOrdersCard';
import './MyOrders.css';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    // console.log(user?.email);
    const navigate = useNavigate();



    const [myitemsDelete, setMyItemsDelete] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`https://polar-shore-11894.herokuapp.com/orders?email=${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    
                    setMyItemsDelete(data);
                });
        }
    }, [user])


    const handelDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://polar-shore-11894.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = myitemsDelete.filter(itemDelete => itemDelete._id !== id);
                    setMyItemsDelete(remaining);
                    toast('Delete Successfully');
                    window.location.reload();
                })
        }
    }
    // console.log(myitemsDelete);
    // console.log(myitems);






    return (
        <div className='container'>
            <h1 className='text-center'>Your items: {myitemsDelete.length}</h1>
            <h6 className='text-center'>User Email: {user?.email}</h6>
            <div className='myitemsAllshow'>
                {
                    myitemsDelete.map(myitemDelete => <MyOrdersCard
                        key={myitemDelete._id}
                        myitemDelete={myitemDelete}
                        handelDelete={handelDelete}
                    ></MyOrdersCard>
                    )}
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyOrders;