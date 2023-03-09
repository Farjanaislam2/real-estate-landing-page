import React from "react";
import images from "../images/Star 1.png";
import images1 from "../images/Star 5.png";
import images2 from "../images/m1.png";
import images3 from "../images/m2.png";
import images4 from "../images/m3.png";
import Banner3 from "../Banner/Banner3";

const Client = () => {
  return (
   <div>
     <div className="mt-10 text-center">
      <h1 className="text-2xl font-bold mb-8">Our Happy Clients</h1>
      <div className="grid grid-cols-3 ml-24 mr-24">
        <div className="card w-72  bg-base-100 shadow-xl">
          <div className="avatar">
            <div className="w-24 rounded-full flex ml-24 mt-10">
              <img src={images4} />
            </div>
          </div>

          <div className="card-body items-center text-center">
            <h2 className="card-title">John doe</h2>
            <div className="flex mb-5">
              <img src={images} alt="" />
              <img src={images} alt="" />
              <img src={images} alt="" />
              <img src={images1} alt="" />
            </div>
            <p>
              If a dog chews shoes whose shoes does he choose?If a dog chews
              shoes whose shoes does he choose?
            </p>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-xl">
          <div className="avatar">
            <div className="w-24 rounded-full flex ml-24 mt-10">
              <img src={images2} />
            </div>
          </div>

          <div className="card-body items-center text-center">
            <h2 className="card-title">John doe</h2>
            <div className="flex mb-5">
              <img src={images} alt="" />
              <img src={images} alt="" />
              <img src={images} alt="" />
              <img src={images1} alt="" />
            </div>
            <p>
              If a dog chews shoes whose shoes does he choose?If a dog chews
              shoes whose shoes does he choose?
            </p>
          </div>
        </div>
        <div className="card w-72  bg-base-100 shadow-xl">
          <div className="avatar">
            <div className="w-24 rounded-full flex ml-24 mt-10">
              <img src={images3} />
            </div>
          </div>

          <div className="card-body items-center text-center">
            <h2 className="card-title">John doe</h2>
            <div className="flex mb-5">
              <img src={images} alt="" />
              <img src={images} alt="" />
              <img src={images} alt="" />
              <img src={images1} alt="" />
            </div>
            <p>
              If a dog chews shoes whose shoes does he choose?If a dog chews
              shoes whose shoes does he choose?
            </p>
          </div>
        </div>
      </div>
    </div>
    <Banner3></Banner3>
   </div>
  );
};

export default Client;
