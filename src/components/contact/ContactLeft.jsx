import React from 'react';
import {FaWhatsappSquare,FaLinkedin,FaInstagramSquare} from  "react-icons/fa";
import {contact} from '../../assets/index';

function ContactLeft() {
  return (
    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 flex flex-col gap-8 justify-center">
    <img className="w-full h-64 object-cover rounded-lg" src={contact} alt="contact"/>
    {/* contents */}
    <div className="flex flex-col gap-4">
      <h3 className="text-3xl font-bold text-white">Shubham Kumar</h3>
      <p className="text-lg font-normal text-gray-400 text-myColor">MERN Stack Developer</p>
      <p className='text-base text-gray-400 tracking-wide text-justify'>Hello my name is Shubham Kumar. You are browsing my profile page request you to fill form in case you have any query.</p>
      <p className="text-base text-gray-400 flex items-center gap-2">
        Mob.No:- <span className="text-lightText">+91 620-146-8124</span>
      </p>
      <p className="text-base text-gray-400 flex items-center gap-2">
        Email:- <span className="text-lightText">shubham.email01@gmail.com</span>
      </p>
    </div>
{/* contents ends */}
{/* logo div starts */}
          <div className="flex flex-col gap-4">
            <h2 className="text-base uppercase font-titleFont mb-4">Find Me in</h2>
              <div className="flex gap-4">
                <span className="bannerIcon"><FaLinkedin/></span>
                <span className="bannerIcon"><FaWhatsappSquare/></span>
                <span className="bannerIcon"><FaInstagramSquare/></span>
              </div>
          </div>
{/* logo div ends */}
    </div>
  )
}

export default ContactLeft;






