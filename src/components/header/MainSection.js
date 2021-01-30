import React, {Component} from 'react';
import '../../App.css';
//import { Button } from './Button';
import './MainSection.css';
import { Link} from 'react-router-dom';

  class MainSection extends React.Component{
    render(){
  return (
    <div className='main-container'>
    
      <h1>Shikha Goyal</h1>
      <p>Junior Web Developer</p>
     
      
      <br/>
      <div className='main-btns'>
        <div
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
            <Link to='/myresume' style={{color: "white", fontSize:"32px"}} >
                Download Resume
            </Link>
        </div>
        
      </div>
    </div>
  );
}
  }

export default MainSection
