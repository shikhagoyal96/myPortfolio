import React from 'react';
// import './About.css';
import Cards from './Cards';
import Skills from './Skills';

function About() {
    return (
        <section id="about">
            <div style={{padding: "6%"}}>
            <h1 style={{fontSize: "60px", textAlign: "center"}}>ABOUT</h1>
            <Cards /> 
            <h1 style={{fontSize: "60px", textAlign: "center"}}>SKILLS</h1>
            <Skills /> 
            </div>   
        </section>
    )
}

export default About
