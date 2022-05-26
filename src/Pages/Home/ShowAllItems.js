import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

const ShowAllItems = () => {
    const [itemsAll, setItemsAll] = useState([]);
    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItemsAll(data));
    }, [])

    
    return (
        <div className='my-5'>
        <h1 className='text-center'> Our Items</h1>
        <div className='itemsshow'>
            {
                itemsAll.map(item => <Item
                    key={item.id}
                    item={item}
                ></Item>)
            }
        </div>
        <div className='my-3 text-center'>
            <Link to="/AddInventory" className='btn btn-primary pe-auto text-center'>
                Add New Inventories
            </Link>
        </div>
    </div>
    );
};

export default ShowAllItems;