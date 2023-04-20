import React from 'react';
import Title from '../layout/Title';
import Slider from 'react-slick';
import { quote,myPhotoTwos,myPhoto } from '../../assets/index';
import { AiFillStar } from "react-icons/ai";
import {useState} from 'react';
import {HiArrowRight,HiArrowLeft} from 'react-icons/hi';

function SampleNextArrow(props) {
  const {onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    ><HiArrowRight/></div>
  );
}

function SamplePrevArrow(props) {
  const {onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    ><HiArrowLeft/></div>
  );
}

function Testimonials() {

  const [dotActive,setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<SampleNextArrow/>,  // nextArrow is selfdefined property name it isn't coming from library
    prevArrow:<SamplePrevArrow/>,
    beforeChange:(prev,next)=>{
        setDotActive(next);
    },
    appendDots: dots => (
      <div
        style={{
        
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ 
          display:"flex",
          gap:"15px",
          justifyContent:"center",
          marginTop:"20px"
         }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive ? {
            
              width: "12px",
              height: "12px",
              color: "blue",
              borderRadius: "50%",
              background:"#ff014f",
              cursor:"pointer"
            
          }:{
            
              width: "12px",
              height: "12px",
              color: "blue",
              borderRadius: "50%",
              background:"gray",
              cursor:"pointer"
            
          }
        }
      >
      </div>
    ),
  };

  return (
   <section id="testimonial" className="w-full py-20 border-b-[1px] border-b-black ">
        <div className="flex justify-center items-center text-center">
          <Title title={"What My Seniors Say about"} desc={"My Testimonials"}/>
        </div>


{/* first slider starts from here ------------------------------------------------------ */}

{/* left div */}
        <div className="max-w-6xl mx-auto ">
        <Slider {...settings}>
      <div className="w-full">
        <div className="w-full h-[500px] flex justify-between">

            <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne  justify-center flex flex-col gap-8 p-8">
              <img 
              className="h-72 rounded-lg object-cover"
              src={myPhoto} 
              alt="src...."/>
              <div>
                <p className="text-base uppercase text-designColor tracking-wide mb-3">Shubham Kumar</p>
                <h3 className="text-2xl font-bold">FullStack Developer</h3>
                <p className="text-base tracking-wide text-gray-500">Bangalore, India</p>
              </div>
            </div>

{/* right div */}
            <div className="w-[60%] h-full flex flex-col justify-between">
                  <img className="w-[25%] h-[20%]" src={quote} alt="quote"/>

                  <div className="w-full h-[75%] py-15 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-8 flex flex-col gap-8 justify-center gap-8">
                    {/* Card upper side above border div starts */}
                    <div className="flex justify-between items-center py-6 border-b-gray-900 border-b-2">
                      <div>
                        <h3 className="text-2xl font-medium tracking-wide">
                          Website Development and design
                        </h3>
                        <p className="text-base text-gray-400 mt-3">
                          Duration - 27-Oct-2022 to 19-Apr-2023
                        </p>
                      </div>

                      <div className="text-yellow-400 flex gap-1">
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                      </div>
                    </div>
 {/* Card upper side above border div ends */}
                      <p 
                      className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, accusantium. Labore omnis doloremque vero? Ducimus tempore placeat labore quos illum officia exercitationem et? Similique aut ratione asperiores ab veniam tempore. Sit ex repellendus adipisci numquam nobis neque blanditiis ipsum sequi quos quia. Aliquam molestiae pariatur quas aliquid minus soluta quibusdam.
                      </p>
                  </div>
            </div>
        </div>
      </div>


      {/* second slider starts from here -------------------------------------------------------------- */}


   <div className="w-full">
        <div className="w-full h-[500px] flex justify-between">

            <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne  justify-center flex flex-col gap-8 p-8">
              <img 
              className="h-72 rounded-lg object-cover"
              src={myPhotoTwos} 
              alt="src...."/>
              <div>
                <p className="text-base uppercase text-designColor tracking-wide mb-3">Shubham Kumar</p>
                <h3 className="text-2xl font-bold">FullStack Developer</h3>
                <p className="text-base tracking-wide text-gray-500">Bangalore, India</p>
              </div>
            </div>

{/* right div */}
            <div className="w-[60%] h-full flex flex-col justify-between">
                  <img className="w-[25%] h-[20%]" src={quote} alt="quote"/>

                  <div className="w-full h-[75%] py-15 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-8 flex flex-col gap-8 justify-center gap-8">
                    {/* Card upper side above border div starts */}
                    <div className="flex justify-between items-center py-6 border-b-gray-900 border-b-2">
                      <div>
                        <h3 className="text-2xl font-medium tracking-wide">
                          Website Development and design
                        </h3>
                        <p className="text-base text-gray-400 mt-3">
                          Duration - 27-Oct-2022 to 19-Apr-2023
                        </p>
                      </div>

                      <div className="text-yellow-400 flex gap-1">
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                      </div>
                    </div>
 {/* Card upper side above border div ends */}
                      <p 
                      className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, accusantium. Labore omnis doloremque vero? Ducimus tempore placeat labore quos illum officia exercitationem et? Similique aut ratione asperiores ab veniam tempore. Sit ex repellendus adipisci numquam nobis neque blanditiis ipsum sequi quos quia. Aliquam molestiae pariatur quas aliquid minus soluta quibusdam.
                      </p>
                  </div>
            </div>
        </div>
      </div>

      {/* Third Slider starts from here--------------------------------------------------------------------------- */}

      <div className="w-full">
        <div className="w-full h-[500px] flex justify-between">

            <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne  justify-center flex flex-col gap-8 p-8">
              <img 
              className="h-72 rounded-lg object-cover"
              src={myPhotoTwos} 
              alt="src...."/>
              <div>
                <p className="text-base uppercase text-designColor tracking-wide mb-3">Shubham Kumar</p>
                <h3 className="text-2xl font-bold">FullStack Developer</h3>
                <p className="text-base tracking-wide text-gray-500">Bangalore, India</p>
              </div>
            </div>

{/* right div */}
            <div className="w-[60%] h-full flex flex-col justify-between">
                  <img className="w-[25%] h-[20%]" src={quote} alt="quote"/>

                  <div className="w-full h-[75%] py-15 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-8 flex flex-col gap-8 justify-center gap-8">
                    {/* Card upper side above border div starts */}
                    <div className="flex justify-between items-center py-6 border-b-gray-900 border-b-2">
                      <div>
                        <h3 className="text-2xl font-medium tracking-wide">
                         3rd Website Development and design
                        </h3>
                        <p className="text-base text-gray-400 mt-3">
                          Duration - 27-Oct-2022 to 19-Apr-2023
                        </p>
                      </div>

                      <div className="text-yellow-400 flex gap-1">
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                      </div>
                    </div>
 {/* Card upper side above border div ends */}
                      <p 
                      className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, accusantium. Labore omnis doloremque vero? Ducimus tempore placeat labore quos illum officia exercitationem et? Similique aut ratione asperiores ab veniam tempore. Sit ex repellendus adipisci numquam nobis neque blanditiis ipsum sequi quos quia. Aliquam molestiae pariatur quas aliquid minus soluta quibusdam.
                      </p>
                  </div>
            </div>
        </div>
      </div>

    </Slider>
        </div>
{/* slider ends */}
 

   </section>
  )
}

export default Testimonials;
