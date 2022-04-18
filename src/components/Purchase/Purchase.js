import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import price from '../utility/pricing';
import NewPlan from './NewPlan';

const Purchase = () => {
   
    const {id} = useParams()

    const data = price.find(item=> item.id == id)
    console.log(data.name);
 
  
 
 
 

 
  
  
    return (
        <div className=" w-full md:w-4/5 mx-auto">
       
       
       {
       data ? 
       <div className=" w-full md:w-2/4 mx-auto  px-5 md:px-0   my-10">
       <h1 className="text-center text-4xl my-5 font-semibold">Your Choosen Plan</h1>
       
     
         <NewPlan data={data}></NewPlan>
          
         
         
       </div>
       :
       <h1 className="text-center text-4xl my-5 font-semibold">Plz Choose a plan at fast Choosen Plan</h1>
       
      }
        
      </div>
    );
};

export default Purchase;