import React from 'react';
import special3 from '../assets/special-3.jpg';
import delivery from '../assets/delivery.png';

const Special3 = () => {
  return (
    <div className="special-card">
      <div className="special-image">
        <img src={special3} id="special-cake" alt="special_cake" />
      </div>
      <div id="special-title">
        <h4>Cheese Cake</h4>
        <h4 id="item-price">$5.69</h4>
      </div>
      <article className="special-info">
      Zesty citrus meets creamy perfection. A tantalizing treat for...
      </article>
      <div id="order-bar">
        <h5 className="order-text">Order a delivery</h5>
        <img src={delivery} id="delivery-icon" alt="icon-delivery" />
      </div>
    </div>
  );
};

export default Special3;
