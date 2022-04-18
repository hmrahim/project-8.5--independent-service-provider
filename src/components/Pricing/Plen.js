import React from "react";
import { useNavigate } from "react-router-dom";

const Plen = ({ plan }) => {
  const navigate = useNavigate();

  const purchase = (id) => {
    const url = `/purchase/${id}`;
    navigate(url);
  };
  return (
    <div className=" price-card shadow-lg rounded-md">
      <div className="flex flex-col justify-center items-center py-5  ">
        <h1 className="text-4xl font-semibold text-center my-5 text-white">
          {plan.name}
        </h1>
        <img className="bg-blue-400 rounded-full p-5" src={plan.logo} alt="" />
      </div>
      <div className="mt-16">
        <ul>
          {plan.details.map((item) => (
            <li className="text-xl text-center my-3">{item}</li>
          ))}
        </ul>
        <h1 className="text-center text-4xl py-4 font-semibold text-orange-400">
          $ {plan.price}/<span className="text-xl text-gray-500">Month</span>
        </h1>
        <div className="flex justify-center items-center">
          <button
            onClick={() => purchase(plan.id)}
            className="py-3 px-4 my-4 rounded-md text-white bg-orange-400"
          >
            Choole Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plen;
