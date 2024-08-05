import React from 'react';
import './Footer.css';
import Logo_1 from'./icons_assets/Logo_1.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Row 1: 3 columns */}
      <div className="footer-row-1">
        {/* Column 1: Logo */}
        <div className="footer-logo">
          <img src={Logo_1} alt="Logo" />
        </div>

        {/* Column 2: Navigation links */}
        <div className="footer-nav">
          <h3>Navigation</h3>
          <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/order">Order</Link></li>
        <li><Link to="/login">Login</Link></li>
        </div>

        {/* Column 3: Social media links */}
        <div className="footer-social">
        <h3>Social Media</h3>

          <a href="https://www.facebook.com">Facebook</a>
          <a href="https://www.twitter.com">Twitter</a>
          <a href="https://www.instagram.com">Instagram</a>
        </div>
      </div>

      {/* Row 2: Copyright */}
      <div className="footer-copyright">
        <p>© 2024 Little Lemon Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;