// import files
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Footer from '../Footer/index';
import Resumefile from '../Resume/Resumefile.pdf';

// resume function
function Resume() {
  return (
    <Container id='res1'>
      <div>
        <Button className="btn-resume">
          <a href={Resumefile} download>
            Download My Resume
          </a>
        </Button>
      </div>
      <div>
        <ul>
          Skills Achieved:
          <h3 className="list-header">Front-end skills</h3>
          <ul className="prof-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
          <h3 className="list-header">Back-end skills</h3>
          <ul className="prof-list">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
          </ul>
        </ul>
      </div>
      <Footer>
        <button variant="" href="https://www.github.com/candre02">
          <i className="fa fa-github" aria-hidden="true"></i>Github
        </button>{' '}
        <button variant="" href="https://www.linkedin.com/in/crystal-a-6ab60b231/">
          <i className="fa fa-linkedin" aria-hidden="true"></i>Linkedin
        </button>{' '}
        <button variant="" href="https://www.twitter.com/crystal_andre2">
          <i className="fa fa-twitter" aria-hidden="true"></i>Twitter
        </button>
      </Footer>
    </Container>
  );
}

// export resume
export default Resume
