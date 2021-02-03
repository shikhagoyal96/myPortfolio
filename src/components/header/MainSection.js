import React, {Component} from 'react';
import '../../App.css';
import '../css/MainSection.css';
import { Link} from 'react-router-dom';

  class MainSection extends React.Component{
    render(){
    return (
      <div className='main-container'>
      
        <h1>Shikha Goyal</h1>
        <p>Junior Web Developer</p>
        
        <br/>
        <div className='resume_section'>
          <Link to='/myresume'>
            <p className="resume_title">Download Resume</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default MainSection
