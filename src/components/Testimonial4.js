import React from 'react';
import rating from '../assets/logo-pure-green.png';
import user4 from '../assets/user4.png';

const Testimonial4 = () => {
  return (
    <div className="testimonial-card">
      <div aria-label="User rating" className="rating-container">
        <div aria-label="Rated lemon" className="rating-box">
          <img src={rating} id="lemon-rating-icon" alt="Lemon rating" />
        </div>
        <div arial-label="Rated lemon" className="rating-box">
          <img src={rating} id="lemon-rating-icon" alt="Lemon rating" />
        </div>
        <div aria-label="Rated lemon" className="rating-box">
          <img src={rating} id="lemon-rating-icon" alt="Lemon rating" />
        </div>
        <div aria-label="Rated lemon" className="rating-box">
          <img src={rating} id="lemon-rating-icon" alt="Lemon rating" />
        </div>
        <div aria-label="Rated lemon" className="rating-box">
          <img src={rating} id="lemon-rating-icon" alt="Lemon rating" />
        </div>
      </div>
      <div className="user-container">
        <div aria-label="User image" id="user-image-container">
          <img src={user4} id="user1" alt="user 1 profile" />
        </div>
        <div aria-label="User info" className="user-id">
          <div className="user-info">
            <h6 id="user-info-text">Emily Sanders</h6>
          </div>
          <div id="user-name">
            <h5 id="user-name-text">EmilyS</h5>
          </div>
        </div>
      </div>
      <article aria-label="User comment" className="user-comment">
      "Best Feta Salad in town. Tops everything."
      </article>
    </div>
  );
};

export default Testimonial4;
