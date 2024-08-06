import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import AboutPage from './AboutPage';
import BookingPage from './BookingPage';
import OrderPage from './OrderPage';
import LoginPage from './LoginPage';
import MenuPage from './MenuPage';
import ConfirmedBooking from './ConfirmedBooking';


import Main from './Main';
import Footer from './Footer';
import Header from './Header';

const App = () => {
  return (
    <Router>
      <div className="grid-container">
        <Nav/>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;