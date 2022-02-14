import React from "react";
import about from "../../assets/images/onelove-bg.jpg";
import { Container } from "react-bootstrap";


function About() {
    return (
        <Container>
            <h1>About Me</h1>
            <img src={about} className="picture" alt="cover" />
            <p>
                Hi, I'm Crystal Andre and I'm a Full Stack Web Developer. I'm a problem solver by nature, who loves learning the why behind all things technical. 
                In my past career, I spent over a decade working as a mechanic: first on cars, then doing more complex electrical work on forklifts and diesel trucks. 
                I love learning new ways to improve processes and become more efficient, and I'm passionate about delivering the best possible outcomes for my team and end client. 
            </p>
        </Container>
    );
}

export default About;
        
        
       