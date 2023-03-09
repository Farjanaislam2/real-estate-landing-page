import React from 'react';
import Header from '../Header/Header';
import images from "../images/home.png";

const Home = () => {
    return (
        <div>
               <div className="hero min-h-screen">
                <img src={images} alt=""/>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">DETROIT COMMERCIAL
REAL ESTATE</h1>
      <div className='flex gap-6 justify-center align-middle'>
        <button className='bg-white text-black p-1 rounded-lg text-blue-600'>For Sale</button>
        <button className='bg-gray-700 p-1 rounded-lg'>For Lease</button>
      </div>
      <div>
      <div class="input-group   relative flex  items-stretch mb-4 w-full mt-6">
         
        <input type="search" className="form-control block w-1/2 h-6 lg:w-full lg:h-auto relative flex-auto min-w-0 block  px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding " placeholder="All space uses >    Enter an address  state, city, area, or zip code" aria-label="Search" aria-describedby="button-addon2"/>
      
          <button class="btn btn-xs lg:btn-md inline-block  bg-blue-400 text-white font-medium text-xs uppercase shadow-md border-none  flex items-center" type="button" id="button-addon2">
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<Header></Header>
        </div>
    );
};

export default Home;