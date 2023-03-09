import React from "react";
import Agents from "../Agents";
import images from "../images/home5.png";
import images2 from "../images/home6.png";
const Banner2 = () => {
  return (
    <div>
      <div className="ml-36">
        <div className="text-center">
          <h3 className="font-bold">Detroit Real estate</h3>
          <h1 className="font-bold text-2xl mb-8">POPULAR AREAS</h1>
        </div>
        <div className="flex gap-8">
          <div>
            <img style={{ width: "450px" }} src={images} alt="" />
            <div className="-mt-64 ml-10 ">
              <button className="bg-red-400 p-2 text-white pl-5 pr-5 rounded-md ">
                sale
              </button>
            </div>
          </div>
          <div>
            <img style={{ width: "530px" }} src={images2} alt="" />
            <div className="-mt-64 ml-10 ">
              <button className="bg-red-400 p-2 text-white pl-5 pr-5 rounded-md ">
                sale
              </button>
            </div>
          </div>
        </div>
      </div>
      <Agents></Agents>
    </div>
  );
};

export default Banner2;
