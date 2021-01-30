import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Skills() {
    return (
        <>
        <div style={{width: "40%" , margin:"4%", display: "inline-block"}}>

                <div>
                    <label>HTML</label>
                    <ProgressBar now={90} label={`90%`} />
                </div>
                <div>
                    <label>CSS/SASS/SCSS</label>
                    <ProgressBar now={90} label={`90%`} />
                </div> 
                <div>
                    <label>JAVASCRIPT</label>
                    <ProgressBar now={80} label={`80%`} />
                </div>
                <div>
                    <label>REACT.JS</label>
                    <ProgressBar now={70} label={`70%`} />
                </div>
                <div>
                    <label>NODE.JS</label>
                    <ProgressBar now={60} label={`60%`} />
                </div>  
            </div>
            <div style={{width: "40%" , margin:"4%", display: "inline-block"}}>
                <div>
                    <label>JAVA</label>
                    <ProgressBar now={60} label={`60%`} />
                </div>
                <div>
                    <label>PHP</label>
                    <ProgressBar now={80} label={`80%`} />
                </div> 
                <div>
                    <label>ASP.NET</label>
                    <ProgressBar now={60} label={`60%`} />
                </div>  
                <div>
                    <label>MYSQL</label>
                    <ProgressBar now={70} label={`70%`} />
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
