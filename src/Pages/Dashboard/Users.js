import React from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Loding from '../Loding/Loding'
import User from './User';

const Users = () => {
    const { data: allUsers, isLoading, refetch } = useQuery('allUsers', () => fetch('https://polar-shore-11894.herokuapp.com/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loding></Loding>
    }
    console.log(allUsers);
    return (
        <div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th> Making Admin</th>
                        <th>Delete User</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      allUsers && allUsers?.map(user => <User
                            key={user._id}
                            user={user}
                            refetch={refetch}
                        ></User>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Users;