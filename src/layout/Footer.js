import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-container">
        <img src={`${process.env.PUBLIC_URL}/LOGO (1).png`} alt="Kasa Logo" className="logo" />
      </div>
      <div className="copyright">
        &copy; 2020 Kasa. All rights reserved
      </div>
      <script src="https://kit.fontawesome.com/21e8d4cf36.js" crossorigin="anonymous"></script>
    </footer>
  );
};

export default Footer;