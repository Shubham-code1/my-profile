import React from 'react';
import LeftBanner from './leftBanner';
import RightBanner from './RightBanner';


function Banner() {
  return (
    <section id="home" className="w-full pt-12 pb-12 flex items-center border-b-[1px] font-titleFont border-b-black">
       <LeftBanner/>
       <RightBanner/>
    </section>
  )
}

export default Banner;



