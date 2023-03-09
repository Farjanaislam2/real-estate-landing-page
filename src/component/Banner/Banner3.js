import React from "react";
import images from "../images/home.png";
import images1 from "../images/insta.png";
import images2 from "../images/linkedin.png";
import images3 from "../images/twitter (2).png";
import images4 from "../images/google.png";

const Banner3 = () => {
  return (
    <div>
      <div className="hero bg-base-200 mt-10">
        <div className="hero-content flex-col bg-blue-400 lg:flex-row-reverse">
          <div
            className="text-center mr-10 lg:text-left"
            style={{ width: "90%" }}
          >
            <img style={{ width: "470px" }} src={images} alt="" />
          </div>
          <div className="card flex-shrink-0 pl-16" style={{ width: "50%" }}>
            <h1 className="text-white text-3xl mb-5">CONTACT US</h1>
            <p>
              Real estate is a property contructing of land and the buildings on
              it, along with its natural resources such as crops, minerals of
              water, immomable property of
            </p>
            <p>Phone: +8893485375</p>
            <p>Email:navieasodft@gmail.com</p>
            <div>
              <button className="bg-white p-2 rounded-md pl-6 pr-6 mt-5">
                Send mail
              </button>
            </div>
            <div className="flex gap-8 mt-5">
              <img className="w-8" src={images1} alt="" />
              <img className="w-8" src={images2} alt="" />
              <img className="w-8" src={images3} alt="" />
              <img className="w-8" src={images4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
