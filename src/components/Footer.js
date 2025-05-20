import React from "react";

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
          <div className="contact-item">Email: info@example.com</div>
          <div className="contact-item">Phone: +123 456 7890</div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
