// import files
import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// nav function
function Nav() {
  return (
    <Container>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header ">
            <p className="navbar-brand ">CA 🚗</p>
          </div>
          <ul className="nav navbar-nav flex-row">
            <NavLink className=" mx-2" to="/">
              Home
            </NavLink>
            <NavLink className="mx-2" to="/about">
              About
            </NavLink>
            <NavLink className="mx-2" to="/portfolio">
              Portfolio
            </NavLink>
            <NavLink className="mx-2" to="/contact">
              Contact
            </NavLink>
            <NavLink className="mx-2" to="/resume">
              Resume
            </NavLink>
          </ul>
        </div>
      </nav>
    </Container>
  );
}

// export nav
export default Nav;