import React from 'react';
import './Nav.css';
import Logo_1 from './icons_assets/Logo_1.svg'; // Adjust the path to your logo
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <img src={Logo_1} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/confirmedbooking">Confirmed Booking </Link></li>
        <li><Link to="/order">Order</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;