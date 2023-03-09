import React from "react";
import Banner from "../Banner/Banner";
import Card2 from "../Card1/Card2";
import images from "../images/house.png";


const Service = () => {
  return (
   <div className="">
      <div>
      <div className="">
        <div className="hero bg-base-200 ">
          <div className="hero-content flex-col bg-base-100 lg:flex-row">
            <div
              className="text-center  p-1 lg:text-left"
              style={{ width: "50%",}}
            >
              <img src={images} alt="" />
            </div>
            <div
              className="card flex-shrink-0 "
              style={{ width: "50%" }}
            >
              <div className="">
                <h1 className="text-8xl text-gray-300 flex justify-center">
                  about
                </h1>
                <div className="ml-36">
                  <small className="text-black text-xl font-bold">
                    DETROIT AGENCY
                  </small>
                  <h1 className="text-black text-4xl font-bold">
                    PROFESSIONAL <br></br> REAL ESTATE AGENTS
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div>
      <div className="-mt-16">
        <div className="hero bg-base-200">
          <div className="hero-content flex-col bg-base-100 lg:flex-row-reverse">
            <div
              className="text-center -ml-10  p-1 lg:text-left"
              style={{ width: "50%"}}
            >
              <img src={images} alt="" />
            </div>
            <div
              className="card flex-shrink-0 w-full  "
              style={{ width: "50%" }}
            >
              <div className="mt-10">
                <h1 className="text-8xl text-gray-300 flex justify-center">
                  about
                </h1>
                <div className="ml-36">
                  <small className="text-black text-xl font-bold">
                    DETROIT AGENCY
                  </small>
                  <h1 className="text-black text-4xl font-bold">
                    PROFESSIONAL <br></br> REAL ESTATE AGENTS
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    
<Banner></Banner>
   </div>
  );
};

export default Service;
