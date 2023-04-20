import React from 'react'
import Title from '../layout/Title';
import ProjectCards from './ProjectCards';
import  {project}  from '../../assets/index';

function Projects() {
  return (
    <section id="projects" className="w-full py-16 border-b-[1px] border-b-black">
        <div className="flex justify-center items-center text-center">
      <Title 
      title="Visit My PortFolio and Give Your valuable feedback" 
      desc="My Projects"/>
      </div>
      <div className="grid grid-cols-3 gap-14">
        <ProjectCards 
        title="FlashCard"
        desc="This Project need valid user Inputs to create a flashCard which can be viewed and deleted as per the user requirements. This is Front-End Project hence Local Storage is used to store created cards data."
        src={project}/>

<ProjectCards 
        title="FlashCard"
        desc="This Project need valid user Inputs to create a flashCard which can be viewed and deleted as per the user requirements. This is Front-End Project hence Local Storage is used to store created cards data." 
        src={project}
        />

<ProjectCards 
        title="FlashCard"
        desc="This Project need valid user Inputs to create a flashCard which can be viewed and deleted as per the user requirements. This is Front-End Project hence Local Storage is used to store created cards data."
        src={project}/>

<ProjectCards 
        title="FlashCard"
        desc="This Project need valid user Inputs to create a flashCard which can be viewed and deleted as per the user requirements. This is Front-End Project hence Local Storage is used to store created cards data."
        src={project}/>

<ProjectCards 
        title="FlashCard"
        desc="This Project need valid user Inputs to create a flashCard which can be viewed and deleted as per the user requirements. This is Front-End Project hence Local Storage is used to store created cards data."
        src={project}/>

<ProjectCards 
        title="FlashCard"
        desc="This Project need valid user Inputs to create a flashCard which can be viewed and deleted as per the user requirements. This is Front-End Project hence Local Storage is used to store created cards data."
        src={project}/>
        
      </div>
    </section>
  )
}

export default Projects;

