import React from 'react';
import Title from '../layout/Title';
import Card from './Card';
import {DiCodeBadge} from "react-icons/di";
import {FaBuffer} from "react-icons/fa";
import {IoAppsSharp} from "react-icons/io5";

function Features() {
  return (
    <section id="features" className="w-full py-10 border-b-[1px] border-b-black">
        <Title title="Features" desc="What I Do"/>
        <div className="grid grid-cols-3 gap-20">
            <Card title="Web Development"
            desc="I am Passionate about developing the new websites using JS,HTML,CSS and their libraries. I love to approach new way of writing codes."
            icon={<FaBuffer/>}/>

            <Card title="Web Development"
            desc="I am Passionate about developing the new websites using JS,HTML,CSS and their libraries. I love to approach new way of writing codes."  
            icon={<DiCodeBadge/>}/>

            <Card title="Web Development"
            desc="I am Passionate about developing the new websites using JS,HTML,CSS and their libraries. I love to approach new way of writing codes." 
            icon={<IoAppsSharp/>}/>

            <Card title="App Development"
            desc="I am Passionate about developing the new websites using JS,HTML,CSS and their libraries. I love to approach new way of writing codes." 
            icon={<FaBuffer/>}/>

            <Card title="App Development"
            desc="I am Passionate about developing the new websites using JS,HTML,CSS and their libraries. I love to approach new way of writing codes." 
            icon={<DiCodeBadge/>}/>

            <Card title="App Development"
            desc="I am Passionate about developing the new websites using JS,HTML,CSS and their libraries. I love to approach new way of writing codes." 
            icon={<IoAppsSharp/>}/>
        </div>
    </section>
  )
}

export default Features;

















