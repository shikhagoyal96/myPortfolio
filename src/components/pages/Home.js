import React from 'react';
import '../../App.css';
import MainSection from '../MainSection';
import About from '../About';
//import Cards from '../Cards';
//import Skills from '../Skills';
import Contact from '../Contact';
import Footer from '../Footer';


function Home() {
  return (
    <>
      <MainSection /> 
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;