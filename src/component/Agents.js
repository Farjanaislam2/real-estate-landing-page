import React from "react";
import Circle from "./Circle";
import images from "./images/home5.png"
import images1 from "./images/home6.png"
import images2 from "./images/home7.png"


const Agents = () => {
  return <div className="mt-72">
           <div className="text-center">
          <h3 className="font-bold">Detroit Real estate</h3>
          <h1 className="font-bold text-2xl mb-8">POPULAR AREAS</h1>
        </div>
          <div className="flex gap-5 ml-20">
              <img style={{width:"350px"}} src={images} alt=""/>      
              <img style={{width:"350px"}} src={images1} alt=""/>      
              <img style={{width:"350px"}} src={images2} alt=""/>      
          </div>
          <Circle></Circle>
  </div>;
};

export default Agents;
