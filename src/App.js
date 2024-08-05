import React from 'react';
import './App.css';
import Nav from './Nav';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <div className="grid-container">
      <Nav />
      <Header/>
      <Main />
      <Footer />
    </div>
  );
}
export default App;