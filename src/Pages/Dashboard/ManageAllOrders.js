import React, { useEffect, useState } from 'react';
import ManageAllOrdersItem from './ManageAllOrdersItem';

const ManageAllOrders = () => {
    const [itemsAll, setItemsAll] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setItemsAll(data));
    }, [])

    return (
        <div className='my-5'>
            <h1 className='text-center'> All Orders</h1>
            <div className='itemsshow'>
                {
                    itemsAll.slice(0, 3).map(items => <ManageAllOrdersItem
                        key={items._id}
                        items={items}
                        ></ManageAllOrdersItem>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;