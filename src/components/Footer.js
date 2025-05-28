import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles.css';

const Footer = () => {
  return (
    <footer>
      <section className="info">
        <h2>About Us</h2>
        <p>Quality is our trademark</p>
      </section>
      <section className="contact">
        <h2>Get In Touch</h2>
        <div className="contact-info">
          <div className="contact-item">Email: vincentobed4@gmail.com</div>
          <div className="contact-item">Phone: +254 740 808922</div>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>

      </section> 
      <section className="send-feedback">
        <h2>Send Feedback</h2>
        <form>
          <input type="text" placeholder="Your Name" required />  
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </footer>
  );
};

export default Footer;
