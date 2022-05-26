import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Help = () => {
    return (
        <div>
            <div className='container'>
                <h1 className='text-center my-5'>HOW CAN WE HELP?</h1>
                <div className='helpdisplay text-center'>
                    <div className='p-2 mx-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="helpIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <h5><Link to="/REGISTRATION" className='text-info pe-auto text-decoration-none'>CONTACT US</Link> </h5>
                        <p>Have a question? Need help?
                            Click here to contact us.</p>
                    </div>
                    <div className='p-2 mx-3 middilicon'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="helpIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <h5><Link to="/REGISTRATION" className='text-info pe-auto text-decoration-none'>WARRANTY</Link> </h5>
                        <p>Questions about the warranty of your product?
                            Learn more on our Warranty page.</p>
                    </div>
                    <div className='p-2 mx-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="helpIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h5><Link to="/REGISTRATION" className='text-info pe-auto text-decoration-none'>SERVICE</Link> </h5>
                        <p>Have a tool that needs to be serviced?
                            We’ll help you get back to work.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Help;