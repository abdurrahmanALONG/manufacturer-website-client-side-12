import React, { useEffect, useState } from 'react';
import ManageAllOrdersItem from './ManageAllOrdersItem';

const ManageAllOrders = () => {
    const [itemsAll, setItemsAll] = useState([]);
    useEffect(() => {
        fetch('https://polar-shore-11894.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setItemsAll(data));
    }, [])

    return (
        <div className='my-5'>
            <h1 className='text-center'> All Orders</h1>
            <div className='itemsshow'>
                {
                    itemsAll.map(items => <ManageAllOrdersItem
                        key={items._id}
                        items={items}
                        ></ManageAllOrdersItem>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;