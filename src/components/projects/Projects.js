import React from 'react';
// import './Projects.css';
// import Pcards from './Pcards';
import PP from './PP';

import 'bootstrap/dist/css/bootstrap.min.css';

function Projects() {
    return (
        <>
           <div className="projects" id="projects" style={{padding: "4%"}}>
                <h1 style={{fontSize: "60px", textAlign: "center"}}>PROJECTS</h1>
                {/* <Pcards /> */}
                <PP />
            </div> 
        </>
    )
}

export default Projects
