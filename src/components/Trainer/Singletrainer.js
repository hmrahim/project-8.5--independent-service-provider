import React from 'react';

const Singletrainer = ({trainer}) => {
    return (
        <div className='  rounded-md shadow-lg flex flex-col p-2'>
        <img  className='w-full h-[400px]' src={trainer.img} alt="" /> 
        <h1 className='text-4xl '>{trainer.name}</h1>
        <p className='text-gray-600'>{trainer.desig}</p>
        <p className='text-orange-400'>{trainer.exp}</p>

    </div>
    );
};

export default Singletrainer;