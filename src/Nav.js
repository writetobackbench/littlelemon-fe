import React from 'react';
import './Nav.css';
import Logo_1 from './icons_assets/Logo_1.svg'; // Adjust the path to your logo

const Nav = () => {
  return (
    <nav className="nav">
      <img src={Logo_1} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservation">Reservation</a></li>
        <li><a href="#order">Order</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Nav;