import React from 'react';
import special1 from '../assets/special-1.jpg';
import delivery from '../assets/delivery.png';

const Special1 = () => {
  return (
    <div className="special-card">
      <div className="special-image">
        <img src={special1} id="special-salad" alt="special_salad" />
      </div>
      <div id="special-title">
        <h4>Greek salad</h4>
        <h4 id="item-price">$12.99</h4>
      </div>
      <article className="special-info">
        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta.
      </article>
      <div id="order-bar">
        <h5 className="order-text">Order a delivery</h5>
        <img src={delivery} id="delivery-icon" alt="icon-delivery" />
      </div>
    </div>
  );
};

export default Special1;
