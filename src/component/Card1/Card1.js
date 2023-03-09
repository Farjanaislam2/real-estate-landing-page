import React from 'react';
import Card from './Card';
import img from '../images/home1.png'
import img1 from '../images/home2.png'
import img2 from '../images/home3.png'
import Service from '../Service/Service';




const Card1 = () => {
    const cards =[
       {
        _id:1,
        title:'Office For Rent',
        price:'From $ 10,000 per month',
        about:'825 Third Avenue is being thoroughly reimagined through a $150 million capital improvement....',
        space:"1,850,000 ft^2",
        picture:img
       },
     
       {
        _id:2,
        title:'Office For Rent',
        price:'From $ 10,000 per month',
        about:'825 Third Avenue is being thoroughly reimagined through a $150 million capital improvement....',
        space:"1,850,000 ft^2",
        picture:img2
       },
       {
        _id:3,
        title:'Office For Rent',
        price:'From $ 10,000 per month',
        about:'825 Third Avenue is being thoroughly reimagined through a $150 million capital improvement....',
        space:"1,850,000 ft^2",
        picture:img
       },
       {
        _id:4,
        title:'Office For Rent',
        price:'From $ 10,000 per month',
        about:'825 Third Avenue is being thoroughly reimagined through a $150 million capital improvement....',
        space:"1,850,000 ft^2",
        picture:img2
       },
       {
        _id:5,
        title:'Office For Rent',
        price:'From $ 10,000 per month',
        about:'825 Third Avenue is being thoroughly reimagined through a $150 million capital improvement....',
        space:"1,850,000 ft^2",
        picture:img
       },
       {
        _id:6,
        title:'Office For Rent',
        price:'From $ 10,000 per month',
        about:'825 Third Avenue is being thoroughly reimagined through a $150 million capital improvement....',
        space:"1,850,000 ft^2",
        picture:img2
       },

    ]
    
     
   
    return (
       <div>
         <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10'>
          {
               cards.map(card =><Card 
                key={card._id}
                card={card}
                ></Card>)
          }
           
        </div>
         <div className='flex justify-center mt-10'>
         <button className='text-xl bg-red-300 p-2 rounded-lg pl-28 pr-28'>Load more</button>
         </div>
         <div className="divider"></div> 
         <Service></Service>
         
       </div>
    );
};

export default Card1;