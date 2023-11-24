import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  faLinkedin, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import './Contact.css'; 
import '../mobileScreen.css'

const Contact = () => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxgbzt8rpsMBkg_NiGaKTNrpmWN93TjjWOcJ-neMLMggedZMWVB2UBh68PvhsgtBcSJ/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Reset the form and display success message
        form.reset();
        document.getElementById('msg').innerText = 'Message sent successfully!';
        setTimeout(() => {
          document.getElementById('msg').innerText = '';
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error!', error.message);
    }
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
              Yashashri11.work@gmail.com
            </p>
            <div className="social-icons">
              <a href="https://twitter.com/Yashipawar24">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
              <a href="https://www.linkedin.com/in/yashashri-pawar-904a42256/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/yashipawar">
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
            </div>
            <a href="https://resume.io/r/OMtDAYFdL" download className="btn btn2">
              Resume Review
            </a>
            <a href="#" className="btn">
              Hire Me
            </a>
          </div>
          <div className="contact-right">
            <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="text" name="Email" placeholder="Your Email" required />
              <textarea name="Message" rows="6" placeholder="Your Message" />
              <button type="submit" className="btn btn2">
                Submit
              </button>
            </form>
            <span id="msg"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
