import React from "react";

const Card = ({ card }) => {
  const { title, price, about, space, picture } = card;
  console.log(picture);

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl rounded-none">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="flex lg:absolute mt-5">
          <button className="bg-green-500 mr-40 ml-8 text-white p-1 rounded-lg">Featured</button>
          <button className="bg-gray-300 text-white p-1 rounded-lg">For lease</button>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-blue-600">{price}</p>
          <h3>{about}</h3>
          <p>{space}</p>
        </div>
      </div>
    
    </div>
  );
};

export default Card;
