import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import MyOrdersCard from './MyOrdersCard';
import './MyOrders.css';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    console.log(user?.email);
    // const navigate = useNavigate();



    const [myitemsDelete, setMyItemsDelete] = useState([]);
    console.log(myitemsDelete);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setMyItemsDelete(data));
        }
    }, [user])


    const handelDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
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
            <div>
                {/* {
            myitems.map(myitem =><div key={myitem._id}>
                <p>{myitem.email} : {myitem.name}</p>
            </div>)
        } */}
            </div>
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