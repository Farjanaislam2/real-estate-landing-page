import React from "react";
import images from "../images/home2.png";
import Logo from './../Logo/Logo';

const Banner = () => {
  return (
   <div>
           <div className="hero bg-base-200 mt-10">
      <div className="hero-content flex-col bg-base-100 lg:flex-row-reverse">
        <div className="text-center mr-10 lg:text-left" style={{ width: "90%" }}>
          <img style={{width:"470px"}} src={images} alt="" />
        </div>
        <div className="card flex-shrink-0 pl-16" style={{ width: "50%" }}>
        <h1 className="text-blue-700 text-5xl mb-5">Find Your <br></br> Dream Place</h1>
        <p>Real estate is a property contructing of land and the buildings on it, along with its natural resources such as crops, minerals of water, immomable property of</p>
        <div className="flex gap-5 mt-5">
          <h1 className="text-blue-700">$120,000</h1>
          <h1 className="text-blue-700">38eds</h1>
          <h1 className="text-blue-700">1999sqft</h1>
        </div>
     <div>
     <button className="bg-red-400 p-2 rounded-md pl-6 pr-6 mt-5">Buy</button>
     </div>
        </div>
        
      </div>
      
    </div>
    <Logo></Logo>
   </div>
  );
};

export default Banner;
