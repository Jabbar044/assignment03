import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; 
import './../../style/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
