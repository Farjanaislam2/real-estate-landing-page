import React from "react";
import images from "./images/p2.png";
import images2 from "./images/p.png";
import Client from "./Client/Client";

const Blog = () => {
  return (
    <div>
      <div className="ml-36 mt-10">
        <div className="text-center">
          <h3 className="font-bold">News and blogs</h3>
          <h1 className="font-bold text-2xl mb-8">COMMERCIAL BLOG</h1>
        </div>
        <div className="flex gap-8">
          <div>
            <img style={{ width: "450px" }} src={images} alt="" />
          </div>
          <div>
            <img style={{ width: "450px" }} src={images2} alt="" />
          </div>
        </div>
      </div>
      <Client></Client>
    </div>
  );
};

export default Blog;
