import React from 'react';
import notfoundImage from "./notfound.jpg"

const Notfound = () => {
    return (
        <div className='w-4/5 mx-auto flex flex-col justify-center items-center'>
            
            <img width={500}  src={notfoundImage} alt="" />
            <h1 className='text-4xl font-bold text-center '>Page not found</h1>

            
        </div>
    );
};

export default Notfound;