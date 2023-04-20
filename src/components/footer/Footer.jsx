import React from 'react';
import {FaWhatsappSquare,FaLinkedin,FaInstagramSquare} from  "react-icons/fa";


function Footer() {
  return (
    <div className="w-full h-96 grid grid-cols-4 gap-8 py-20 border-b-[1px] border-b-black">
        <div className="w-full h-full flex flex-col gap-6 justify-start">
            {/* 1st div */}
        <h2 className=" py-6 text-3xl">! My Protfolio</h2>
        <div className="flex gap-4 ">
                <span className="bannerIcon"><FaLinkedin/></span>
                <span className="bannerIcon"><FaWhatsappSquare/></span>
                <span className="bannerIcon"><FaInstagramSquare/></span>
              </div>
        </div>
 {/* 2nd div */}

        <div className="w-full h-full">
            <h3 className="text-xl uppercase text-myColor tracking-wider">Quick Links</h3>
            <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">

                <li><span className="w-full text-lg hover:text-designColor overflow-hidden cursor-pointer duration-300 relative group">About
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform"></span></span></li>

                <li><span className="w-full text-lg hover:text-designColor overflow-hidden cursor-pointer duration-300 relative group">Services
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform"></span></span></li>

                <li><span className="w-full text-lg hover:text-designColor overflow-hidden cursor-pointer duration-300 relative group">Portfolio
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform"></span></span></li>

                <li><span className="w-full text-lg hover:text-designColor overflow-hidden cursor-pointer duration-300 relative group">Blog
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform"></span></span></li>

                <li><span className="w-full text-lg hover:text-designColor overflow-hidden cursor-pointer duration-300 relative group">Contact
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform"></span></span></li>
            </ul>
        </div>

{/* 3rd div */}

<div className="w-full h-full">
            <h3 className="text-xl uppercase text-myColor tracking-wider">Resources</h3>
            <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">

                <li><span className="w-full text-lg hover:text-designColor overflow-hidden cursor-pointer duration-300 relative group">Authentication
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform"></span></span></li>

                <li><span className="w-full text-lg hover:text-designColor overflow-hidden cursor-pointer duration-300 relative group">System Status
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform"></span></span></li>

                <li><span className="w-full text-lg hover:text-designColor overflow-hidden cursor-pointer duration-300 relative group">Terms of Services
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform"></span></span></li>

                <li><span className="w-full text-lg hover:text-designColor overflow-hidden cursor-pointer duration-300 relative group">Pricing
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform"></span></span></li>

                <li><span className="w-full text-lg hover:text-designColor overflow-hidden cursor-pointer duration-300 relative group">Over Right
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform"></span></span></li>
            </ul>
        </div>

{/* 4th div */}

        <div className="w-full h-full">
            <h3 className="text-xl uppercase text-myColor tracking-wider">Developers</h3>
            <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">

                <li><span className="w-full text-lg hover:text-designColor overflow-hidden cursor-pointer duration-300 relative group">Documentation
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform"></span></span></li>

                <li><span className="w-full text-lg hover:text-designColor overflow-hidden cursor-pointer duration-300 relative group">Authentication
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform"></span></span></li>

                <li><span className="w-full text-lg hover:text-designColor overflow-hidden cursor-pointer duration-300 relative group">API References
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform"></span></span></li>

                <li><span className="w-full text-lg hover:text-designColor overflow-hidden cursor-pointer duration-300 relative group">Support
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform"></span></span></li>

                <li><span className="w-full text-lg hover:text-designColor overflow-hidden cursor-pointer duration-300 relative group">Open Sources
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform"></span></span></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer;























