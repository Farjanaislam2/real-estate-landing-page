import React from 'react';
import images from "../images/logo1.png";

const Footer = () => {
    return (
        <div>
              <div>
      <footer
        className="footer pl-5 pr-10 pb-3 text-white"
        style={{ backgroundColor: "#530A0A" }}
      >
        <div className="ml-16 lg:hidden">
          <img src={images} alt="logo" />
        </div>
        <div className="grid grid-cols-2 lg:gap-28 gap-10 lg:flex">
          <div>
            <img className="hidden lg:flex" src={images} alt="" />
            <h1 className="lg:text-xl font-bold">USA Office</h1>
            <p>
              <small>Adderess : Head office ,Jamaica </small>
            </p>
            <p>
              <small>
                Shopping Centre Southport QLD, <br /> Australia +61 7 5556 6600
              </small>{" "}
            </p>
            <p>
              <small>discountache@gmail.com</small>
            </p>
            <p>
              {" "}
              <small>+1 347-206-9324</small>
            </p>
          </div>

          <div className="lg:mt-16 lg:pt-2">
            <h1 className="lg:text-xl font-bold">Bangladesh Dhaka Office</h1>
            <p>
              <small>Adderess : Shop- 6, 3rd Floor</small>,
            </p>
            <p>
              <small>Gulshan Pink Shopping Complex,</small>
            </p>
            <p>
              {" "}
              <small>
                Gulshan Avenue, Gulshan- 2, Dhaka 1212 -uttara sector 10 ,
              </small>
            </p>
            <p>
              {" "}
              <small>discountache@gmail.com</small>
            </p>
            <p>
              {" "}
              <small>01311805398</small>
            </p>
          </div>
          <div>
            <div className="lg:mt-16  lg:pt-2">
              <h1 className="lg:text-xl font-bold">
                About of navieae learning
              </h1>
              <p><small>privacy policy</small></p>
              <p><small>Privacy Policy</small></p>
              <p><small>Cookie Policy</small></p>
              <p><small>Who we are</small></p>
              <p><small>Terms & Conditions</small></p>
            </div>
          </div>
          <div className="lg:mt-16 lg:pt-2">
            <h1 className="lg:text-xl font-bold">Get to Know Us</h1>
            <p><small>Careers</small></p>
            <p><small>Blog</small></p>
            <p><small>All Categories</small></p>
            <p><small>start offer</small></p>
            <p><small>areers support</small></p>
          </div>
        </div>
      </footer>
    </div>
        </div>
    );
};

export default Footer;