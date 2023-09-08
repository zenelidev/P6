import React from 'react';
//import './Footer.css'; // Import your CSS file for styling
//import logo from './kasa-logo.png'; // Import your Kasa logo image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-container">
        <img src={`${process.env.PUBLIC_URL}/LOGO (1).png`} alt="Kasa Logo" className="logo" />
      </div>
      <div className="copyright">
        &copy; 2020 Kasa, All rights reserved
      </div>
    </footer>
  );
};

export default Footer;