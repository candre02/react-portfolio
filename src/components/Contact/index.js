// import files
import React from 'react';
import { Container, CardGroup, Card } from 'react-bootstrap';
import Portrait from "../../assets/images/Portrait.jpg";
import Footer from "../Footer/index";

// contact function
function Contact() {  
  return (
    <Container id='contactbox'>
      <div>
        <h2 id="h2tag">Get in touch</h2>
      </div>
      <CardGroup id='shades'>
        <div className="bg-light border">
          <Card style={{
             width: '25rem',
             outline: '1px solid white',
             padding: '40px',
             position: 'relative',
             height: '760px',
             margin: '30%',
             top: '-350px',
             right: '530px'
            
          }}>
            <Card.Img variant="top" src={Portrait}  />
            <Card.Body id='shades2'>
              <Card.Title >Crystal Andre</Card.Title>
              <Card.Text>
                Full Stack Web Developer, loves R&B & EDM music
                <br></br>
                < i className="FaPinMap" id='shades2'>Austin, Texas</i>
                <br></br>
                Email: candre02.2@gmail.com
                <br></br>
                <div>
                  <Footer id="shades2">
                  <button variant=""  href="https://www.github.com/candre02">
                <i className='fa fa-github'  aria-hidden="true"></i>Github
                </button>{' '}
                <button variant=""  href="https://www.linkedin.com/in/crystal-a-6ab60b231/">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>Linkedin
                </button>{' '}
                <button variant=""  href="https://stackoverflow.com/users/16661619/crystal">
                  <i className="fa fa-stackoverflow" aria-hidden="true"></i>stackoverflow
                </button>{' '}
                  </Footer>              
                </div>
              </Card.Text>
            </Card.Body>
            </Card>
        </div>
      </CardGroup>
    </Container>         
  );
}

// export contact
export default Contact;