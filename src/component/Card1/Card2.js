import React from "react";
import images from "../images/home1.png";
import images1 from "../images/home2.png";
import images2 from "../images/home3.png";

const Card2 = () => {
  return (
   <div>
          <h1 className="text-2xl font-bold mt-8 mb-6 ml-56">Popular Properties</h1>
     
          <div>
      <div className="flex flex-col ml-56">
      <div className="flex gap-6">
        <img className ="w-96" src={images} alt="" />
       <div>
       <button className="bg-red-600 absolute text-white p-2 mt-6 ml-5 rounded-md pl-8 pr-8">Buy</button>
      </div>
          </div>
        <img className="w-96" src={images2} alt="" />
        <button className="bg-red-600  text-white p-2 mt-6 ml-5 rounded-md pl-8 pr-8">sold</button>
       </div>
    
      {/* <div className="flex gap-6 mt-5 ml-8">
        <img className="w-56" src={images2} alt="" />
        <button className="bg-red-600  text-white p-2 mt-6 ml-5 rounded-md pl-8 pr-8">sold</button>
        <img className="w-56" src={images1} alt="" />
        <button className="bg-red-600 absolute text-white p-2 mt-6 ml-5 rounded-md pl-8 pr-8">sold</button>
        <img className="w-56 ab" src={images} alt="" />
        <button className="bg-red-600  text-white p-2 mt-6 ml-5 rounded-md pl-8 pr-8">sold</button>
      </div> */}
    </div>
   </div>
  );
};

export default Card2;
