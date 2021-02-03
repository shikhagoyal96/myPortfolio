import React from 'react';
import Navbar from '../navigation/Navbar';
import MainSection from '../header/MainSection';
import About from '../about/About';
import Experience from '../experience/Experience';
import Projects from '../projects/Projects';
import Footer from '../footer/Footer';

function Home() {
  return (
    <>
      <div id="home">
        <Navbar />
        <MainSection /> 
        <About />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </>
  );
}

export default Home;