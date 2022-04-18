import React, { useEffect, useState } from "react";
import price from "../utility/pricing";
import Plen from "./Plen";

const Pricing = () => {
    const [plans,setPlan] = useState([])
    
    useEffect(()=> {
        setPlan(price)
    },[])
  return (
    <div className=" w-full md:w-4/5 mx-auto">
      <h1 className="text-center text-4xl my-5 font-semibold">Membership</h1>
      <div className="grid px-5 md:px-0 grid-cols-1 md:grid-cols-3 my-10 gap-10">
          {
              plans.map(plan=> <Plen key={plan.id} plan={plan}></Plen> )
          }
        
        
      </div>
    </div>
  );
};

export default Pricing;
