import React from 'react';
import '../css/Skills.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Skills() {
    return (
        <>
            <div id="skills">
                <div>
                    <label>HTML</label>
                    <ProgressBar animated now={90} label={`90%`} />
                </div>
                <div>
                    <label>CSS/SASS/SCSS</label>
                    <ProgressBar animated now={90} label={`90%`} />
                </div> 
                <div>
                    <label>JAVASCRIPT</label>
                    <ProgressBar animated now={80} label={`80%`} />
                </div>
                <div>
                    <label>REACT.JS</label>
                    <ProgressBar animated now={70} label={`70%`} />
                </div>
                <div>
                    <label>NODE.JS</label>
                    <ProgressBar animated now={60} label={`60%`} />
                </div>  
            </div>
            <div style={{width: "40%" , margin:"4%", display: "inline-block"}}>
                <div>
                    <label>JAVA</label>
                    <ProgressBar animated now={60} label={`60%`} />
                </div>
                <div>
                    <label>PHP</label>
                    <ProgressBar animated now={80} label={`80%`} />
                </div> 
                <div>
                    <label>ASP.NET</label>
                    <ProgressBar animated now={60} label={`60%`} />
                </div>  
                <div>
                    <label>MYSQL</label>
                    <ProgressBar animated now={70} label={`70%`} />
                </div>
                <div>
                    <label>PHOTOSHOP</label>
                    <ProgressBar now={60} label={`60%`} />
                </div>  
            </div>             
        </>
    )
}

export default Skills
