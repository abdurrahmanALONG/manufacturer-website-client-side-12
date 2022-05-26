import React from 'react';
import './Home.css'

const Summary = () => {
    return (
        <div className='my-5'>
            <h1 className='text-center'>Our Business Summary</h1>
            <div className='bussinesSummary my-4'>
                <div className='my-4  px-auto text-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-50 w-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <h5 className='my-3'>We served 100+ customers</h5>
                </div>
                <div className='my-4  px-auto text-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-50 w-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h5 className='my-3'>120M+ Annual revenue</h5>
                </div>
                <div className='my-4  px-auto text-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-50 w-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <h5 className='my-3'>33K+ Reviews</h5>
                </div>
                <div className='my-4 px-auto text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-50 w-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
</svg>
                    <h5 className='my-3'>50+ tools</h5>
                </div>
            </div>
        </div>
    );
};

export default Summary;