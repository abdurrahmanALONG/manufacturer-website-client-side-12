import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import useToken from '../../CommonPages/useToken';
import auth from '../../firebase.init';
import logo from '../../images/google-logo.png';
import Loding from '../../Pages/Loding/Loding';


const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [token] = useToken(user);
    const navigate = useNavigate();
    let errorHandel;

    if (loading) {
        return <Loding></Loding>
    }
    if (error) {
        errorHandel = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }
    if (token) {
        navigate('/Home');
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={logo} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;