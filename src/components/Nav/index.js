import React from 'react';
import {Container} from "react-bootstrap";
// import {Link} from 'react-router-dom';



function Nav() {
  return (
    <Container>
    <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header ">
        <a className="navbar-brand " href="/">CA 🚗</a>
      </div>
      <ul className="nav navbar-nav flex-row">
        <li className="active mx-2"><a href="/">Home</a></li>
        <li className='mx-2'><a href="/about">About</a></li>
        <li className='mx-2'><a href="/portfolio">Portfolio</a></li>
        <li className='mx-2'><a href="/contact">Contact</a></li>
        <li className='mx-2'><a href="/resume">Resume</a></li>
      </ul>
    </div>
  </nav>
  </Container>
    );
  }


export default Nav;