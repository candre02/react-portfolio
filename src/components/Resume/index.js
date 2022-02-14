import React from "react";
import { Container, Button } from "react-bootstrap";
import Footer from "../Footer/index";
import Resumefile from "../Resume/Resumefile.pdf";



function Resume() {
    return (
        <Container>
            <div>
                <Button className="btn-resume">
                    <a href={ Resumefile } download>Download My Resume</a>
                </Button>
            </div>
            <div>
                <h1>Skills</h1>
                <h2>Front-End:</h2>
                <p>HTML, CSS, JavaScript, Web API's, Third-Party API's, and Server-Side API's, React</p>
                <h2>Back-End:</h2>
                <p>Node.js, Object-Oriented Programming, SQL, Object-Relational Mapping, Model-View-Controller, Progressive Web Application, MERN</p>
                <h2>Tools used:</h2>
                <p>Git, Github, Heroku, MongoDB, JawsDB, DevTools</p>    
            </div>
            <Footer>
                <p>Want to get connected? Follow me on the social channels below</p>
                <button variant="" href="https://www.github.com/candre02"><i class="fa fa-github" aria-hidden="true"></i>Github</button> <button variant="" href="https://www.lindedin.com/candre02"><i class="fa fa-linkedin" aria-hidden="true"></i>Linkedin</button> <button variant="" href="https://www.twitter.com/crystal_andre2"><i class="fa fa-twitter" aria-hidden="true"></i>Twitter</button> 
            </Footer>
        </Container>
    );
}

export default Resume;