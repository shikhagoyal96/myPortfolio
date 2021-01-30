import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
//import ScrollToTop from './ScrollToTop';
import Contact from '../contact/Contact';

function Footer() {
  return (
    <>
    <div className='footer-container'>
      <div className="flex-child contact-container">
        <Contact />
      </div>
      <div className="flex-child general">
        <section class='social-media'>
          <div class='social-media-wrap'>
            <small class='website-rights'>Shikha Goyal © 2020</small>
            <div class='social-icons'>
              <Link
                class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Github'
              >
              <i class="fab fa-github" /> 
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i class='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        </section>
      </div>
      {/* <ScrollToTop /> */} 
    </div>
    </>
  );
}

export default Footer;