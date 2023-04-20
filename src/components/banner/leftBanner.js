import React from 'react';
import {useTypewriter,Cursor} from 'react-simple-typewriter'; 
import {FaWhatsappSquare,FaLinkedin,FaInstagramSquare,FaFacebookSquare} from  "react-icons/fa";
import {FaHtml5,FaCss3,FaBootstrap,FaJsSquare,FaReact} from  "react-icons/fa";
import { DiMongodb,DiNodejsSmall } from "react-icons/di";

function LeftBanner(){

  const [text] = useTypewriter({
    words: ['UI Developer', 'Backened Developer', 'Full Stack Web Developer','MERN Stack Developer'],
    loop:true,
    typeSpeed:100,
    deleteSpeed:20,
    delaySpeed:1000
 });

    return (
        <>
        <div className="w-1/2 flex flex-col gap-16">
        {/* this div is for first text section */}
           <div className="flex flex-col gap-5">
              <h4 className="text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
              <h1 className="text-5xl font-bold text-white">Hi I'm  
              <span className="text-designColor capitalize"> Shubham Kumar</span></h1>
              <h2 className="text-4xl font-bold text-white"> a <span>{text}</span><Cursor cursorColor='yellow' /></h2>
              <p className="text-base font-bodyFont leading-6 tracking-wide mt-8 text-justify">I am a highly enthusiastic and passionate full stack Web developer. I am always ready to explore the new technologies which can make me and my End-clients to explore best user experiences overall.</p>
           </div>
        {/* this div is for icon section */}
           <div className="bg-red">
                  <h2 className="text-base uppercase font-titleFont mb-4">
                    Best Skills on
                  </h2>
              
              <div className="flex flex-col gap-8">
                    <div className="flex gap-4">
                      <span className="bannerIcon"><FaHtml5/></span>
                      <span className="bannerIcon"><FaCss3/></span>
                      <span className="bannerIcon"><FaBootstrap/></span>
                      <span className="bannerIcon"><FaJsSquare/></span>
                      <span className="bannerIcon"><FaReact/></span>
                      <span className="bannerIcon"><DiNodejsSmall/></span>
                      <span className="bannerIcon"><DiMongodb/></span>
                    </div>

        <div>
                  <h2 className="text-base uppercase font-titleFont relative">
                    Reach me <span className="text-[8px] text-myColor absolute -top-3">@</span>
                  </h2>
        </div>
                    <div className="flex gap-4">
                      <span className="bannerIcon"><FaLinkedin/></span>
                      <span className="bannerIcon"><FaFacebookSquare/></span>
                      <span className="bannerIcon"><FaInstagramSquare/></span>
                      <span className="bannerIcon"><FaWhatsappSquare/></span>
                    </div>
                </div>
           </div>
       </div>
        </>
    )
}

export default LeftBanner;
