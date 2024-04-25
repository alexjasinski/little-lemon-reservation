import React from 'react';
import rating from '../assets/logo-pure-green.png';
import user4 from '../assets/user4.png';

const Testimonial4 = () => {
  return (
    <div className="testimonial-card">
      <div className="rating-container">
        <div className="rating-box">
          <img src={rating} id="lemon-rating-icon" alt="Lemon rating" />
        </div>
        <div className="rating-box">
          <img src={rating} id="lemon-rating-icon" alt="Lemon rating" />
        </div>
        <div className="rating-box">
          <img src={rating} id="lemon-rating-icon" alt="Lemon rating" />
        </div>
        <div className="rating-box">
          <img src={rating} id="lemon-rating-icon" alt="Lemon rating" />
        </div>
        <div className="rating-box">
          <img src={rating} id="lemon-rating-icon" alt="Lemon rating" />
        </div>
      </div>
      <div className="user-container">
        <div id="user-image-container">
          <img src={user4} id="user1" alt="user 1 profile" />
        </div>
        <div className="user-id">
          <div className="user-info">
            <h6 id="user-info-text">Emily Sanders</h6>
          </div>
          <div id="user-name">
            <h7 id="user-name-text">EmilyS</h7>
          </div>
        </div>
      </div>
      <article className="user-comment">
      "Best Feta Salad in town. Tops everything."
      </article>
    </div>
  );
};

export default Testimonial4;
