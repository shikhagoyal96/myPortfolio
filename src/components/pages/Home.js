import React from 'react';
import '../../App.css';
import MainSection from '../header/MainSection';
import About from '../about/About';
import Experience from '../experience/Experience';
//import Projects from '../PProjects/Projects';
import Projects from '../projects/Projects';
// import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Navbar from '../navigation/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <>
      <div id="home">
        <Navbar />
        <MainSection /> 
        <About />
        <Experience />
        <Projects />
        {/* <Contact /> */}
        <Footer />
      </div>
    </>
  );
}

export default Home;