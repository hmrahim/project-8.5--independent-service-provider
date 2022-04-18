import React, { useEffect, useState } from "react";
import SingleService from "./SingleService";
import service from "../utility/service";

const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=> {
        setServices(service)
    },[])
   
  return (
    <div className="w-full md:w-4/5 mx-auto ">
      <h1 className="mt-8 my-5 text-4xl font-semibold text-center">
        My Services
      </h1>
      <div className="grid m-2 grid-cols-2 md:grid-cols-3 gap-5">
          {
              services.map(item =>  <SingleService service={item}></SingleService>)
          }
      
      
      </div>
    </div>
  );
};

export default Services;
