import React from 'react';
import {Container} from "react-bootstrap";
// import {Link} from 'react-router-dom';



function Nav() {
  return (
    <Container>
    <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header ">
        <a class="navbar-brand " href="/">CA 🚗</a>
      </div>
      <ul class="nav navbar-nav flex-row">
        <li class="active mx-2"><a href="/">Home</a></li>
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