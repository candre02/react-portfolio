import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { validateEmail } from '../../utils/helpers';



function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
        console.log('Submit Form', formState);
      }
    };
  
    const handleChange = (e) => {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('Handle Form', formState);
      }
    };

   
  return (
    <section>
      <h2 id="h2tag">Contact</h2>
      <p id='hire'>
      Interested in hiring me for your project or just want to say hi? <br></br>
      You can fill in the contact form below.
      </p>
      <form id="contact-form" onSubmit={handleSubmit}>
        <Row>
          <Col>
         <label htmlFor="name" id="nametag">Name:</label> 
         <input type="text" name="name" defaultValue={name} onBlur={handleChange} /> 
          </Col>
          <Col>
          <label htmlFor="email" id="emailtag">Email:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </Col>
        </Row>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button id="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;