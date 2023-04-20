import React from 'react';
import ResumeCard from './ResumeCard';
import {motion} from 'framer-motion'

function Education() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.5}}} className="w-full flex gap-20">

    <div>
          <div className="py-12 font-titleFont">
            <p className="text-sm text-designColor tracking-[4px]">2010 - 2017</p>
            <h2 className="text-4xl font-bold">Education Details</h2>
          </div>
          <div className=" mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
            title="B.Tech in Electrical & Electronics Engineering"
            subTitle="Kalinga University,Raipur (2014-2017)"
            result="First Class"
            desc="I have been awarded with B tech degree with First Division."/>
    
          <ResumeCard
            title="Diploma in Electrical & Electronics Engineering"
            subTitle="M.S. Ramaiah Polytechnic,Bangalore (2010-2013)"
            result="First Class"
            desc="I have been completed diploma with First Class Distinction"/>
    
            <ResumeCard
            title="SSLC"
            subTitle="Adarsh High School,Sarbahda (2008-2010)"
            result="First Class"
            desc="I have been completed SSLC with First class distinction"/>
          </div>
      </div>
    
      <div>
         <div className="py-12 font-titleFont">
            <p className="text-sm text-designColor tracking-[4px]">2010 - 2017</p>
            <h2 className="text-4xl font-bold">Education Details</h2>
          </div>
          <div className=" mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
            title="B.Tech in Electrical & Electronics Engineering"
            subTitle="Kalinga University,Raipur (2014-2017)"
            result="First Class"
            desc="I have been awarded with B tech degree with First Division."/>
    
          <ResumeCard
            title="Diploma in Electrical & Electronics Engineering"
            subTitle="M.S. Ramaiah Polytechnic,Bangalore (2010-2013)"
            result="First Class"
            desc="I have been completed diploma with First Class Distinction"/>
    
          <ResumeCard
            title="SSLC"
            subTitle="Adarsh High School,Sarbahda (2008-2010)"
            result="First Class"
            desc="I have been completed SSLC with First class distinction"/>
          </div>
      </div>
          </motion.div>
  )
}

export default Education;



