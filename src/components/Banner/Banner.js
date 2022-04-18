import React from "react";
import bannerImage from "./header-img.png";


const Banner = () => {
  return (
    <div className="w-4/5 mx-auto grid mt-32 grid-cols-1 md:grid-cols-2 ">
       
      <div className="flex justify-start items-center ">
        <div>
          <h1 className="text-6xl mt-3 font-bold">Perfect Workout</h1>
          <h1 className="text-4xl mt-3 font-semibold">Coach For <span className="text-orange-400"> Body Shape</span></h1>
          <p className="my-3 text-xl">
            Quisque leo augue, lobortis ac tellus nec, posuere ultricies nulla.
            Praesent massa odio, pellentesque in consectetur quis, volutpat sit
            amet erat.
            
          </p>
          <button className="py-3 text-white px-4 rounded-lg text-xl bg-orange-400">Learn More</button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={bannerImage} alt="" />
      </div>
      
    </div>
  );
};

export default Banner;
