import React from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Banner from './components/banner/Banner';
import Features from './components/features/Features';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import FooterBottom from './components/footerBottom/FooterBottom';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-16">
          <NavBar/>
          <Banner/>
          <Features/>
          <Projects/>
          <Resume/>
          <Testimonials/>
          <Contact/>
          <Footer/>
          <FooterBottom/>
      </div>
    </div>
  );
}

export default App;
