import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

function Footer() {
  return (
    <>
    <ScrollToTop />
    <div className='footer-container'>
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
    </>
  );
}

export default Footer;