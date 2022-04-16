import React, { useEffect, useState } from 'react';
import trainer from '../utility/trainer';
import Singletrainer from './Singletrainer';

const Trainer = () => {
    const [trainersingle,setTrainer] = useState([])
    useEffect(()=>{
        setTrainer(trainer)
    },[])
   
    return (
        <div className='w-full md:w-4/5 mx-auto'>
            <h1 className='text-4xl font-semibold text-center my-5'>Our Trainer</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    trainersingle.map(item=> <Singletrainer key={item.id} trainer={item}></Singletrainer>)
                }
               
            </div>
            
        </div>
    );
};

export default Trainer;