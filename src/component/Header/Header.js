import React from 'react';
import Card from './../Card1/Card';
import Card1 from './../Card1/Card1';

const Header = () => {
    return (
        <div>
         <div className='bg-base-100 flex'>
         <div className='w-64 border-r-2 border-gray-400 bg-base-200 p-4'>
            <h1 className='text-6xl font-bold  text-gray-300 '>01</h1>
            <div className='-mt-7'>
            <small className='text-black font-semibold'>EXPLORE THE LISTINGS</small>
            <h2 className='text-black text-xl font-extrabold'>OFFICE <br/>
PROPERTIES</h2>
<h2 className='mt-10 text-sm text-black'>Read More</h2>
            </div>
         </div>
         <div className='w-64 border-r-2 border-gray-400 bg-base-200 p-4'>
            <h1 className='text-6xl font-bold bg-base-200 text-gray-300 '>02</h1>
            <div className='-mt-7'>
            <small className='text-black font-semibold'>EXPLORE THE LISTINGS</small>
            <h2 className='text-black text-xl font-extrabold'>OFFICE <br/>
PROPERTIES</h2>
<h2 className='mt-10 text-sm text-black'>Read More</h2>
            </div>
         </div>
         <div className='w-64 border-r-2 border-gray-400 bg-base-200 p-4'>
            <h1 className='text-6xl font-bold bg-base-200 text-gray-300 '>03</h1>
            <div className='-mt-7'>
            <small className='text-black font-semibold'>EXPLORE THE LISTINGS</small>
            <h2 className='text-black text-xl font-extrabold'>OFFICE <br/>
PROPERTIES</h2>
<h2 className='mt-10 text-sm text-black'>Read More</h2>
            </div>
         </div>
         <div className='w-64 border-r-2 border-gray-400 bg-base-200 p-4'>
            <h1 className='text-6xl font-bold bg-base-200 text-gray-300 '>04</h1>
            <div className='-mt-7'>
            <small className='text-black font-semibold'>EXPLORE THE LISTINGS</small>
            <h2 className='text-black text-xl font-extrabold'>OFFICE <br/>
PROPERTIES</h2>
<h2 className='mt-10 text-sm text-black'>Read More</h2>
            </div>
         </div>
         <div className='w-64 border-r-2 border-gray-400 bg-base-200 p-4'>
            <h1 className='text-6xl font-bold bg-base-200 text-gray-300 '>05</h1>
            <div className='-mt-7'>
            <small className='text-black font-semibold'>EXPLORE THE LISTINGS</small>
            <h2 className='text-black text-xl font-extrabold'>OFFICE <br/>
PROPERTIES</h2>
<h2 className='mt-10 text-sm text-black'>Read More</h2>
            </div>
         </div>
        
        </div>
         <Card1></Card1>
        </div>
    );
};

export default Header;