import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import './Dashboard.css'

const Dashboard = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="das-container">
            <div className="">
                <h2 className='text-info text-center'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="das-link">
                <label for="dashboard-sidebar"></label>
                <ul className="">
                    <li><Link to="/dashboard/MyOrders">My Orders</Link></li>
                    <li><Link to="/dashboard/AddAReview">Add Reviews</Link></li>
                    <li><Link to="/dashboard/MyProfile">My Profile</Link></li>
                    <li><Link to="/dashboard/Users">Users</Link></li>
                    {/* { admin && <li><Link to="/dashboard/users">All Users</Link></li>} */}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;