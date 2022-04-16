import React from "react";
import infoImage from "./about-img.png";

const Info = () => {
  return (
    <div className=" w-4/5 mx-auto grid grid-cols-1 my-7 md:grid-cols-2">
      
      
        <div className="flex m items-center justify-center flex-col my-7 md:my-0 px-5">
          <h1 className="text-4xl font-semibold my-5">Let Us Find The Perfect Workout For You !</h1>
          <p className="text-justify">
            Fusce orci ligula, tincidunt ut metus vel, venenatis aliquet tortor.
            Duis et consequat enim. Curabitur pulvinar, dolor at pulvinar
            molestie, augue massa volutpat felis, at rhoncus tortor velit vel
            diam. Cras ac suscipit metus. Etiam fermentum ex orci, a ullamcorper
            erat tempor in. Nulla est ante, ullamcorper vitae dui vel, molestie
            feugiat sapien. Integer auctor est nec semper hendrerit. Etiam
            sollicitudin enim in urna commodo, in dapibus velit elementum. Ut
            congue nisl sapien, vel ultricies nulla tincidunt vitae. Maecenas
            non ligula quis massa consequat commodo eleifend ut velit.
            Vestibulum molestie nunc non libero posuere, quis pellentesque massa
            tempus.
          </p>
        </div>
        <div className="flex justify-center items-center">
        <img src={infoImage} alt="" />
      </div>
      
    </div>
  );
};

export default Info;
