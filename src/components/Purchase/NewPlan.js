import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import sweetAlert from '../utility/alert';


// CommonJS


const NewPlan = ({data}) => {
  const navigate = useNavigate()
 


  const payment= () => {
    sweetAlert()
    navigate("/payment")

  }
    return (
        <div className=" price-card shadow-lg rounded-md w-full">
        <div className="flex flex-col justify-center items-center py-5  ">
            <h1 className="text-4xl font-semibold text-center my-5 text-white">{data.name}</h1>
          <img className="bg-blue-400 rounded-full p-5" src= {data.logo} alt="" />
        </div>
        <div className="">
            <ul>
                {
                  data.details.map(list=> <li className="text-xl text-center my-3">{list}</li>)
                }
                   
                   
            </ul>
            <h1 className="text-center text-4xl py-4 font-semibold text-orange-400">$ {data.price} /<span className="text-xl text-gray-500">Month</span></h1>
            <div className="flex justify-center items-center">
            <button onClick={payment}  className="py-3 px-4 my-4 rounded-md text-white bg-orange-400">Purches Now</button>
            </div>
            

        </div>
      </div>
    );
};

export default NewPlan;