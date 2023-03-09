import React from "react";
import images from "../images/brac.png";
import images1 from "../images/partex.png";
import images2 from "../images/ispahani.png";
import images3 from "../images/express.png";
import LogoCard from "./LogoCard";

const Logo = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-10 mt-5">Our Home Partners</h1>
      <div className="flex gap-16 justify-evenly">
        <img className="w-40" src={images} alt="" />
        <img className="w-40" src={images1} alt="" />
        <img className="w-40" src={images2} alt="" />
        <img className="w-40" src={images3} alt="" />
      </div>
      <LogoCard></LogoCard>
    </div>
  );
};

export default Logo;
