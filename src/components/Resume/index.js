// import files
import React from "react";
import { Container, Button } from "react-bootstrap";
import "./resume.css";
// import Footer from '../Footer/index';
import Resumefile from "../Resume/Resumefile.pdf";
import Certificate from "../Resume/Certificate.pdf";

// resume function
function Resume() {
  return (
    <Container id="res1">
      <div>
        <Button className="btn-resume">
          <a href={Resumefile} download>
            Check Out Resume
          </a>
        </Button>
        <Button className="btn-cert">
          <a href={Certificate} download>
            View Certificate
          </a>
        </Button>
      </div>
      <h3 id="Skres">My Skills: </h3>
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <h4 id="resFE">Front-end</h4>
          </div>
          <div className="flip-box-back">
            <p id="Hor">
              Html, Css, JavaScript, BootStrap, Responsive Web Design, React and
              JQuery
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <div className="flip-vbox" id="verticalbox">
        <div className="flip-vbox-inner">
          <div className="flip-vbox-front">
            <h4 id="resBE">Back-end</h4>
          </div>
          <div className="flip-vbox-back">
            <p id="Ver">
              Mongodb, Express, Node, OOP, APIs, Rest, Mongoose, MySql,
              Sequelize, Webpack, MVC and Handlebars
            </p>
          </div>
        </div>
      </div>
      <section>
        <h4 id="Skres"> Additional Skills: </h4>
        <p id="otherskils">Git, Github, Heroku and Insomnia</p>
      </section>
    </Container>
  );
}

// export resume
export default Resume;
