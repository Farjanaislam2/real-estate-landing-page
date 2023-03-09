import React from "react";
import Blog from "./Blog";

const Circle = () => {
  return (
   <div>
           <div className="bg-white mt-16 flex justify-center gap-8">
      <div className="bg-blue-200 rounded-full ">
        <h1 className="text-4xl p-2 font-bold mt-5 ml-10 text-white">07</h1>
        <p className="p-3 font-bold -mt-8 mb-8">
          Available <br /> Offices Property
        </p>
      </div>
      <div className="bg-blue-200 rounded-full ">
        <h1 className="text-4xl p-2 font-bold mt-5 ml-10 text-white">07</h1>
        <p className="p-3 font-bold -mt-8 mb-8">
          Available <br /> Offices Property
        </p>
      </div>
    
      
      <div className="bg-blue-200 rounded-full ">
        <h1 className="text-4xl p-2 font-bold mt-5 ml-10 text-white">08</h1>
        <p className="p-3 font-bold -mt-8 mb-8">
         efficient <br /> Offices Property
        </p>
      </div>
      <div className="bg-blue-200 rounded-full ">
        <h1 className="text-4xl p-2 font-bold mt-5 ml-10 text-white">9k</h1>
        <p className="p-3 font-bold -mt-8 mb-8">
          Available <br /> Offices Property
        </p>
      </div>
      <div className="bg-blue-200 rounded-full ">
        <h1 className="text-4xl p-2 font-bold mt-5 ml-10 text-white">76</h1>
        <p className="p-3 font-bold -mt-8 mb-8">
          Available <br /> Offices Property
        </p>
      </div>
    </div>
    <Blog></Blog>
   </div>
  );
};

export default Circle;
