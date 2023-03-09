import React, { useState } from "react";
import images2 from "../images/logo1.png";
import { Link } from "react-router-dom";

const Nav = () => {
        const [closed, setClosed] = useState(false);
        const navLinks = (
            <>
              <Link
                className="hover:underline  lg:pr-12 text-white underline-offset-4"
                to="/"
              >
                Home
              </Link>
              <div className="dropdown dropdown-bottom dropdown-end">
                <label
                  tabIndex={0}
                  className=" hover:underline lg:pl- lg:pr-12 text-white underline-offset-4"
                >
                  Demos
                </label>
                
              </div>
              <Link
                className="hover:underline  lg:pr-12 text-white underline-offset-4"
                to="/"
              >
               Properties
              </Link>
              <div className="dropdown dropdown-bottom dropdown-end">
                <label
                  tabIndex={0}
                  className=" hover:underline lg:pr-3 text-white underline-offset-4"
                >
                 Agents
                </label>
               
              </div>
              <Link
                className="hover:underline lg:pl-9  text-white underline-offset-4"
                to="/"
              >
               Blogs
              </Link>
              <Link
                className="hover:underline lg:pl-12 lg:pr-12 text-white underline-offset-4"
                to="/"
              >
                Careers
              </Link>
              <div className="dropdown dropdown-bottom dropdown-end">
                <label
                  tabIndex={0}
                  className=" hover:underline lg:pr-5 text-white underline-offset-4"
                >
                 Contact us
                </label>
             
              </div>
              <Link
                className="hover:underline lg:pl-7 lg:pr-5 text-white underline-offset-4"
                to="/"
              >
                Theme
              </Link>
              <Link
                className="hover:underline lg:pl-7 lg:pr-7 text-white underline-offset-4"
                to="/"
              >
                Templete
              </Link>
              <Link
                className="hover:underline lg:pl-5 lg:pr-5 text-white underline-offset-4"
                to="/"
              >
                Bloging
              </Link>
        
              <div className="dropdown dropdown-end pl-4">
                <label
                  tabIndex={0}
                  className=" lg:flex hidden p-2 rounded-3xl bg-white text-black mr-3 ml-2"
                >
                  Login
                </label>
               
              </div>
        
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="lg:flex hidden p-2 rounded-3xl bg-white text-black mr-3 ml-2"
                >
                  Signup
                </label>
               
              </div>
            </>
          );
    return (
        <div>
               <nav
      className="flex items-center  flex-wrap bg-black"
    >
     <a href="#" className="mr-4 lg:pl-10 inline-flex items-center">
        <img className="w-16" src={images2} alt="" />
      </a>

      <button
        className="text-white bg-black inline-flex rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        data-target="#navigation"
      >
       
    
      </button>
      <button
        className="text-white bg-black inline-flex rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        data-target="#navigation"
      >
      </button>
      <button
        onClick={() => setClosed(!closed)}
        className="text-white inline-flex pr-5 rounded lg:hidden ml-5 hover:text-white outline-none nav-toggler"
        data-target="#navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </button>
      <div
        className={`${
          closed ? "block" : "hidden"
        } lg:hidden top-navbar w-full lg:flex-grow lg:w-auto`}
        id="navigation"
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-end pr-5 flex flex-col lg:h-auto ">
          {navLinks}
        </div>
      </div>
      <div
        className={`hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        id="navigation"
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          {navLinks}
        </div>
      </div>
    </nav>
    
        </div>
    );
};

export default Nav;