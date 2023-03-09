import React from "react";
import Banner2 from "../Banner2/Banner2";
import images from "../images/home1.png";

const LogoCard = () => {
  return (
    <div>
      <div className="hero  mt-16 m-20 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center   lg:text-left" style={{ width: "90%" }}>
            <img style={{ width: "500px" }} src={images} alt="" />
          </div>
          <div className="card flex-shrink-0 mr-16" style={{ width: "50%" }}>
            <h1 className="text-blue-700 text-5xl mb-5">
              About <br></br> We Provide the best property for you
            </h1>
            <p>
              Real estate is a property contructing of land and the buildings on
              it, along with its natural resources such as crops, minerals of
              water, immomable property of
            </p>
            <p>
              .property Location .valuation of the Property .Investment purpose
              and Investment Horizon. .Expected cash Flows and Profit
              Opportunities. .Be careful with Leverege.
            </p>
            <div>
              <button className="bg-blue-400 text-black font-semibold p-2 rounded-md pl-6 pr-6 mt-5">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
      <Banner2></Banner2>
    </div>
  );
};

export default LogoCard;
