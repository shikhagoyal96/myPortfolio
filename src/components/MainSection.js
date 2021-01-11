import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';
import { Link } from 'react-router-dom';

function MainSection() {
  return (
    <div className='main-container'>
      
      <h1>Shikha Goyal</h1>
      <p>Junior Web Developer</p>
      <br/>
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
            <Link to='/resume' >
                Resume
            </Link>
        </Button>
      </div>
    </div>
  );
}

export default MainSection
