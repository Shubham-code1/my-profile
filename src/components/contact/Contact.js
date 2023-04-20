import React from 'react';
import Title from '../layout/Title';
import ContactLeft from './ContactLeft';
import { useState } from 'react';

function Contact() {

  const [username,setUserName] = useState("");
  const [mobNo,setMobNo] = useState("");
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [message,setMessage] = useState("");
  const [errMsg,setErrMessage] = useState("");


const handleSend = (e)=>{
      e.preventDefault();
      if(username === ""){
        setErrMessage("Name id Required")
      }else if(mobNo === ""){
        setErrMessage("Mobile No is required");
      }else if(email === ""){
        setErrMessage("Email is required");
      }else if(subject === ""){
        setErrMessage("Subject is required");
      }else if(message === ""){
        setErrMessage("Message is required");
      }else{
            
            setErrMessage("");
            setUserName("");
            setEmail("");
            setMessage("");
            setSubject("");
            setMobNo("");
      }

      console.log(username,message,mobNo,email,subject);
      console.log(errMsg);
}

  return (
    <section id="contacts" className="w-full py-20 border-b-[1px] border-b-black ">
    <div className="flex justify-center items-center text-center">
      <Title title={"Please Contact me with your queries"} desc={"Contact Me"}/>
    </div>

<div className="w-full flex flex-col gap-4">
  <div className="w-full h-auto flex justify-between">
      <ContactLeft/>

      <div className="w-[60%] h-full p-8 py-3 flex flex-col bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne  flex flex-col gap-8 rounded-lg">
            <form className="w-full flex flex-col gap-6 py-5">
              
                {
                      errMsg ? <p className="py-3 bg-gradient-to-r from-[#1e2024] □to- [#23272b]
                      shadow-shadowOne text-center text-orange-500 text-base tracking-wide
                      animate-bounce">
                      {errMsg}
                      </p> : null
                }
              
  {/* ---------------------------------------Name & mobile no section starts ------------------------------------*/}
                  <div className="w-full flex gap-10">
                    <div className="w-1/2 flex flex-col gap-4">
                          <p className="text-sm uppercase text-gray-400 tracking-wide">Name:-</p>
                          <input 
                          onChange={(e)=>{setUserName(e.target.value)}}
                          value={username}
                          type="text" className="contactInput"/>
                    </div>

                    <div className="w-1/2 flex flex-col gap-4">
                          <p className="text-sm uppercase text-gray-400 tracking-wide">Mobile No:-</p>
                          <input 
                          onChange={(e)=>{setMobNo(e.target.value)}}
                          value={mobNo}
                          type="text" className="contactInput"/>
                    </div>
                  </div>
  {/* ---------------------------------Name & mobile no section ends----------------------------------------------*/}
                  <div className="flex flex-col gap-4">
                          <p className="text-sm uppercase text-gray-400 tracking-wide">Email:-</p>
                          <input 
                          onChange={(e)=>{setEmail(e.target.value)}}
                          value={email}
                          type="email" className="contactInput"/>
                  </div>

                  <div className="flex flex-col gap-4">
                          <p className="text-sm uppercase text-gray-400 tracking-wide">Subject:-</p>
                          <input 
                           onChange={(e)=>{setSubject(e.target.value)}}
                           value={subject}
                          type="text" className="contactInput"/>
                  </div>

                  <div className="flex flex-col gap-4">
                          <p className="text-sm uppercase text-gray-400 tracking-wide">Message:-</p>
                          <textarea 
                           onChange={(e)=>{setMessage(e.target.value)}}
                           value={message}
                          className="contactTextArea" cols="30" rows="8"></textarea>
                  </div>

                  <div className="w-full">
                    <button onClick={handleSend}
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent" >Submit</button>
                  </div>

            </form>
      </div>
  </div>
</div>
    
    </section>
  )
}

export default Contact;


















