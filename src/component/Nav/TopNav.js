import React from 'react';
import images1 from "../images/google.png";
import images2 from "../images/insta.png";
import images3 from "../images/linked.png";
import images4 from "../images/pinterest.png";
import images5 from "../images/youtube.png";

const TopNav = () => {
    return (
        <div className='bg-black flex border-b-2 pl-16 gap-5 p-5'>
            <img src={images1} alt=""/>
            <img src={images2} alt=""/>
            <img src={images3} alt=""/>
            <img src={images4} alt=""/>
            <img src={images5} alt=""/>
        </div>
    );
};

export default TopNav;