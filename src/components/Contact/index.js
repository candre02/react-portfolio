// import files
import React from 'react';
import { Container, CardGroup, Card } from 'react-bootstrap';
import Portrait from "../../assets/images/Portrait.jpg";
import Footer from "../Footer/index";

// contact function
function Contact() {  
  return (
    <Container>
      <div>
        <h2 id="h2tag">Get in touch</h2>
      </div>
      <CardGroup>
        <div className="bg-light border">
          <Card style={{
             width: '25rem',
             height: '809px', 
             outline: '1px solid white',
             marginRight:'600px',
             padding: '10px',
             position: 'absolute'
          }}>
            <Card.Img variant="top" src={Portrait} />
            <Card.Body>
              <Card.Title>Crystal Andre</Card.Title>
              <Card.Text>
                Full Stack Web Developer, loves r&b and edm music
                <br></br>
                < i className="FaPinMap">Austin, Texas</i>
                <br></br>
                Email: candre02.2@gmail.com
                <br></br>
                <div>
                  <Footer>
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