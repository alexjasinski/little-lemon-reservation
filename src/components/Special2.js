import React from 'react';
import special2 from '../assets/special-2.jpg';
import delivery from '../assets/delivery.png';

const Special2 = () => {
  return (
    <div className="special-card">
      <div className="special-image">
        <img src={special2} id="special-appetizer" alt="special_appetizer" />
      </div>
      <div aria-label="Bruschetta" id="special-title">
        <h4>Bruschetta</h4>
        <h4 id="item-price">$7.20</h4>
      </div>
      <article className="special-info">
      Our Bruschetta is made from grilled bread that has been smeared with fresh butter.
      </article>
      <div id="order-bar">
        <h5 className="order-text">Order a delivery</h5>
        <img src={delivery} id="delivery-icon" alt="icon-delivery" />
      </div>
    </div>
  );
};

export default Special2;
