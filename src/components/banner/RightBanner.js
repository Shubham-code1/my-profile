import React from 'react'
import {myPhotoTwo} from '../../assets/index';

function RightBanner() {
  return (
    <div className="w-1/2 bg-red flex justify-center items-center relative">
            <img 
            className="w-[480px] h-[500px] z-10  absolute top-50" 
            src={myPhotoTwo} alt="na.."/>
            <div className=" w-[500px] h-[320px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
       </div>
  )
}

export default RightBanner;








