import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import Item from './Item';


const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://polar-shore-11894.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    // console.log(items);



    return (
        <div className='my-5'>
            <h1 className='text-center'> Our Items</h1>
            <div className='itemsshow'>
                {
                    items.slice(0, 3).map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
            <p><Link to="/ShowAllItems" className='text-primary text-decoration-none' >Show All Items</Link> </p>

        </div>
    );
};

export default Items;