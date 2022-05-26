import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='w-100 notFoundstyle' style={{ 
            backgroundImage: `url("https://i.ibb.co/S3g0PST/extra-1.jpg")` 
          }}>
            <h1 className='text-warning text-center py-5' >There is no pages, Please try again!!!!!!</h1>
            <h1 className='text-warning bold text-center py-5'>404</h1>
        </div>
    );
};

export default NotFound;