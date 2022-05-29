import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

const ShowAllItems = () => {
    const [itemsAll, setItemsAll] = useState([]);
    useEffect(() => {
        fetch(`https://polar-shore-11894.herokuapp.com/tools`)
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
    </div>
    );
};

export default ShowAllItems;