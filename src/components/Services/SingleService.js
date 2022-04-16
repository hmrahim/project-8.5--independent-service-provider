import React from "react";

const SingleService = ({ service }) => {
  console.log(service);
  return (
    <div className="flex rounded-md justify-center items-center flex-col bg-lime-100 shadow-lg p-5 pt-0">
      <div className="w-20 h-24 rounded-b-full bg-rose-600 flex justify-center items-center hover:bg-orange-400 ">
        <img src={service.logo} alt="" />
      </div>
      <h1 className="text-2xl font-semibold">{service.name}</h1>
      <p className="">{service.desc}</p>
    </div>
  );
};

export default SingleService;
