import React from 'react';
import {BsFillArrowRightCircleFill} from "react-icons/bs";
import {HiArrowRight} from 'react-icons/hi';

function Card({title,desc,icon}) {
  return (
    <div className="w-full px-10 h-80 py-10 h-80 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
    <div className="h-72 overflow-y-hidden">  
      <div className="flex h-full flex-col gap-8 translate-y-14 group-hover:translate-y-0 duration-500 transition-transform">
        <div>
           <span className="text-5xl text-myColor">{icon}</span>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-titleFont font-bold text-gray-300">{title}</h2>
          <p className="text-sm text-justify">{desc}</p>
          <span className="text-2xl text-designColor">{<HiArrowRight/>}</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Card;
