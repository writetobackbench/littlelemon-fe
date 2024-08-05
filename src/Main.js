import React from 'react';
import './Main.css';
import card1pic from './icons_assets/c1.jpg'
import card2pic from './icons_assets/c2.jpg'
import card3pic from './icons_assets/c3.jpg'

const Main = () => {
  return (
    <main className="main">
      <div className="row-2">
      <h1>This week Special Menu !</h1>
      <button className="main-button">Order now</button>
      </div>

      <div className="row-2">
        <div className="card">
        <img src={card1pic} alt="card1 dish" />
          <h3>Mexican burger &nbsp; $12.50</h3>
          <p>The famous mexican burger with crispy lettuce,peppers,olives and our chicago style feta cheese,garnished with crunchy garlic and rosemary croutons</p>
        </div>
        <div className="card">
        <img src={card2pic} alt="card 2 dish" />
          <h3>Bruchetta &nbsp; $8.50</h3>
          <p>Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
        </div>
        <div className="card">
        <img src={card3pic} alt="card 3 dish" />
          <h3> Greek salad &nbsp; $16.50</h3>
          <p>The famous greek salad of crispy lettuce,peppers,olives and our chicago style feta cheese,garnished with crunchy garlic and rosemary croutons</p>
        </div>
      </div>

      {/* Row 3: Testimonials */}
      <div className="row-3">
        <h2>Testimonials</h2>
        <br></br>
        <p style={{ fontWeight: 'bold' }}> “Absolutely fantastic dining experience! The ambiance was perfect, and the food was out of this world. The staff was friendly and attentive. I highly recommend the chef’s special—it’s a must-try!
"</p>
        <p style={{ fontWeight: 'bold' }}>— Jane D., Food Critic</p>
      </div>
    </main>
  );
};
export default Main;
