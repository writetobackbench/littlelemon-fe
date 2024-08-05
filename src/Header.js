import React from 'react';
import './Header.css';
import restaurant from './icons_assets/b1.jpg'


const Header = () => {
  return (
  <>
  <div className="row-1">
    <div className="text">
      <h2>Little Lemon Restaurant</h2>
      <h3> Chicago</h3>
      <h3>
        We are a family owned Mediterranean restaurant, focused on tradional recipes served with a modern twist.
      </h3>
      <button className="main-button" >Reserve a table</button>

    </div>
    <img src={restaurant}alt="Description" />
  </div>
  </>
  )
};

export default Header;