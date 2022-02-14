import React from 'react';
import {Container} from "react-bootstrap";





function Nav() {
  return (
    <header className="flex-row px-1">
      <Container>
       
        <h2 className='brand' id='homepage'>
          <a data-id="link"  href='/'>
          <span role="img" aria-label="automobile"> 🚗</span> CA
          </a>
        </h2>
        <nav className=''>
         
          <ul className='flex-row'>
            <li className='mx-2'>
            <a data-id="about" href='/about'>About</a>
            </li>
            <li className='m-2'>
              <a data-id="portfolio" href='/portfolio'>Portfolio</a>
            </li>
            <li className='m-2'>
              <a data-id="contact" href='/contact'>Contact</a>
            </li>
            <li className='m-2'>
              <a href='/resume'>Resume</a>
            </li>
          </ul>
         
        </nav>
       
        
      </Container>
    </header>
  );
}

export default Nav;