/* eslint-disable no-unused-vars */
import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaGlobe } from 'react-icons/fa'; // Import React Icons
import '../styles/Footer.css'; // Import the CSS file for the footer styling

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>About Our E-Commerce</h5>
            <p className="text-muted">
              Welcome to our eCommerce platform where we offer the best products across multiple categories like fashion, electronics, home decor, and much more. Shop with confidence and enjoy hassle-free services with secure payment options and timely delivery.
            </p>
          </div>

          {/* Contact Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <span className="icon">&#9993;</span>{' '}
                <a href="mailto:support@myecommerce.com" className="text-white">
                  support@myecommerce.com
                </a>
              </li>
              <li>
                <span className="icon">&#9742;</span>{' '}
                <a href="tel:+123456789" className="text-white">
                  +1 (234) 567-89
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Follow Us</h5>
            <ul className="follow-link list-unstyled d-flex">
              <li className="mr-3">
                <a
                  href="https://www.linkedin.com"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li className="mr-3">
                <a
                  href="https://www.instagram.com"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
              <li className="mr-3">
                <a
                  href="https://www.facebook.com"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={24} />
                </a>
              </li>
              <li className="mr-3">
                <a
                  href="https://www.twitter.com"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={24} />
                </a>
              </li>
              <li className="mr-3">
                <a
                  href="https://www.yourwebsite.com"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="row">
          <div className="col text-center">
            <p className="text-muted">&copy; 2024 My E-Commerce Application. ADITYA_KUMAR</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
