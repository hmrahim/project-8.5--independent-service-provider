import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <div className='w-full md:w-4/5 mx-auto'>
            <div className=' w-full md:w-1/2 mx-auto p-4 my-10 rounded-lg bg-white shadow-lg flex justify-center item-center flex-col'>
                <h1 className='text-xl font-semibold text-center text-black'> Your Payment complete</h1>
                <p className='text-center'>you are a member in this fitness center</p>
                <p className='text-center mt-5  capitalize text-blue-800 ' >Please back to home page</p>
                <Link to="/" className='w-1/5 mx-auto text-center text-xl py-2 my-2 rounded-lg px-5 bg-orange-400 text-white'>Back</Link>
            </div>
            
        </div>
    );
};

export default Payment;