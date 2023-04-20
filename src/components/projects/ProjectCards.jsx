import React from 'react';
import { BsGithub,BsGlobe } from "react-icons/bs";

function ProjectCards({title,desc,src}) {
  return (
    <div className="w-full px-12 h-auto py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transitions-colors duration-1000">
        <div className="overflow-hidden w-full h-[80%] rounded-lg">
            <img className="w-full h-36 object-cover group-hover:scale-110 duration-300 cursor-pointer"
             src={src} alt="src"/>
        </div>

        <div className="w-full mt-5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">{title}</h3>
            <div className="flex gap-2">
            <span className="text-lg w-8 h-8  rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">{<BsGithub/>}</span>
                
                <span className="text-lg w-8 h-8 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">{<BsGlobe/>}</span>
                </div>
            </div>

            <div>
                    <p className="text-sm traking-wide mt-3 hover:text-gray-100 duration-300 text-justify">{desc}</p>
            </div>
                
        </div>


    </div>
  )
}

export default ProjectCards;
