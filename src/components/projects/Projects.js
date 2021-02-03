import React from 'react';
import ProjectCards from './ProjectCards';

import 'bootstrap/dist/css/bootstrap.min.css';

function Projects() {
    return (
        <>
           <div className="projects" id="projects" style={{padding: "4%"}}>
                <h1 style={{fontSize: "60px", textAlign: "center"}}>PROJECTS</h1>
                <ProjectCards />
            </div> 
        </>
    )
}

export default Projects
