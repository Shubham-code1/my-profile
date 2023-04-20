import React from 'react';
import {motion} from 'framer-motion'

function Skills() {
  return (
   <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.5}}} className="w-full flex gap-20">

      <div className="w-1/2">
          <div className="py-12 font-titleFont">
            <p className="text-sm text-designColor tracking-[4px]">Features</p>
            <h2 className="text-4xl font-bold">Development Skills</h2>
          </div> 
          <div className=" mt-8 w-full flex flex-col gap-6">
            {/* Development Skills */}
                <div className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">HTML</p>
                  <span className="w-full h-2 bgOpacity inline-flex rounded-sm mt-2">
                    <motion.span
                    initial ={{x:"-100%",opacity:0}} 
                    animate={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:0.5}}
                    className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                      <span className="absolute -top-7 right-0 ">90%</span>
                    </motion.span>
                  </span>
                </div>

                <div className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">CSS</p>
                  <span className="w-full h-2 bgOpacity inline-flex rounded-sm mt-2">
                    <motion.span
                    initial ={{x:"-100%",opacity:0}} 
                    animate={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:0.5}}
                    className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                      <span className="absolute -top-7 right-0 ">75%</span>
                    </motion.span>
                  </span>
                </div>

                <div className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">JavaScript</p>
                  <span className="w-full h-2 bgOpacity inline-flex rounded-sm mt-2">
                    <motion.span
                    initial ={{x:"-100%",opacity:0}} 
                    animate={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:0.5}}
                    className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                      <span className="absolute -top-7 right-0 ">60%</span>
                    </motion.span>
                  </span>
                </div>

                <div className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">React</p>
                  <span className="w-full h-2 bgOpacity inline-flex rounded-sm mt-2">
                    <motion.span
                    initial ={{x:"-100%",opacity:0}} 
                    animate={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:0.5}}
                    className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                      <span className="absolute -top-7 right-0 ">70%</span>
                    </motion.span>
                  </span>
                </div>

                <div className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">Node JS</p>
                  <span className="w-full h-2 bgOpacity inline-flex rounded-sm mt-2">
                    <motion.span
                    initial ={{x:"-100%",opacity:0}} 
                    animate={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:0.5}}
                    className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                      <span className="absolute -top-7 right-0 ">60%</span>
                    </motion.span>
                  </span>
                </div>

                <div className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">MongoDB</p>
                  <span className="w-[60%] h-2 bgOpacity inline-flex rounded-sm mt-2">
                    <motion.span
                    initial ={{x:"-100%",opacity:0}} 
                    animate={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:0.5}}
                    className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                      <span className="absolute -top-7 right-0 ">60%</span>
                    </motion.span>
                  </span>
                </div>

          </div>
      </div>

{/* Soft skills entire section w-1/2 */}


      <div className="w-1/2">
          <div className="py-12 font-titleFont">
            <p className="text-sm text-designColor tracking-[4px]">Features</p>
            <h2 className="text-4xl font-bold">Soft Skills</h2>
          </div> 
          <div className=" mt-8 w-full flex flex-col gap-6">
            {/* Soft Skills */}
                <div className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">Apptitude</p>
                  <span className="w-full h-2 bgOpacity inline-flex rounded-sm mt-2">
                    <motion.span
                    initial ={{x:"-100%",opacity:0}} 
                    animate={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:0.5}}
                    className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                      <span className="absolute -top-7 right-0 ">80%</span>
                    </motion.span>
                  </span>
                </div>

                <div className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">Communication </p>
                  <span className="w-full h-2 bgOpacity inline-flex rounded-sm mt-2">
                    <motion.span
                    initial ={{x:"-100%",opacity:0}} 
                    animate={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:0.5}}
                    className="w-[65%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                      <span className="absolute -top-7 right-0 ">65%</span>
                    </motion.span>
                  </span>
                </div>

                <div className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">Analytical Thinking</p>
                  <span className="w-full h-2 bgOpacity inline-flex rounded-sm mt-2">
                    <motion.span
                    initial ={{x:"-100%",opacity:0}} 
                    animate={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:0.5}}
                    className="w-[65%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                      <span className="absolute -top-7 right-0 ">70%</span>
                    </motion.span>
                  </span>
                </div>

                <div className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">Logical Thinking</p>
                  <span className="w-full h-2 bgOpacity inline-flex rounded-sm mt-2">
                    <motion.span
                    initial ={{x:"-100%",opacity:0}} 
                    animate={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:0.5}}
                    className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                      <span className="absolute -top-7 right-0 ">70%</span>
                    </motion.span>
                  </span>
                </div>

                <div className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">Team Work</p>
                  <span className="w-full h-2 bgOpacity inline-flex rounded-sm mt-2">
                    <motion.span
                    initial ={{x:"-100%",opacity:0}} 
                    animate={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:0.5}}
                    className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                      <span className="absolute -top-7 right-0 ">90%</span>
                    </motion.span>
                  </span>
                </div>

                <div className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">Workohlic</p>
                  <span className="w-[95%] h-2 bgOpacity inline-flex rounded-sm mt-2">
                    <motion.span
                    initial ={{x:"-100%",opacity:0}} 
                    animate={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:0.5}}
                    className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                      <span className="absolute -top-7 right-0 ">95%</span>
                    </motion.span>
                  </span>
                </div>

          </div>
      </div>


          </motion.div>
  )
}

export default Skills;

