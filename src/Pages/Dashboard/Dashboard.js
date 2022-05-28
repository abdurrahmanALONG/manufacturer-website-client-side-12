import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../CommonPages/useAdmin';
import auth from '../../firebase.init';
import './Dashboard.css'

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="das-container">
            <div className="">
                <h2 className='text-info text-center'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="das-link">
                <label for="dashboard-sidebar"></label>
                <ul className="">
                    {!admin &&<li><Link to="/dashboard/MyOrders">My Orders</Link></li>}
                    {!admin &&<li><Link to="/dashboard/AddAReview">Add Reviews</Link></li>}
                    <li><Link to="/dashboard/MyProfile">My Profile</Link></li>
                    {admin &&<li><Link to="/dashboard/ManageAllOrders">Manage All Orders</Link></li>}
                    {admin &&<li><Link to="/dashboard/AddAProduct">Add A Product</Link></li>}
                    {admin &&<li><Link to="/dashboard/ManageProducts">Manage Products</Link></li>}
                    {admin && <li><Link to="/dashboard/Users">Make Admin</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;