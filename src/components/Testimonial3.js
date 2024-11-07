import React from 'react';
import rating from '../assets/logo-pure-green.png';
import norating from '../assets/logo-pure-white.png';
import user3 from '../assets/user3.png';

const Testimonial3 = () => {
  return (
    <div className="testimonial-card">
      <div aria-label="User rating" className="rating-container">
        <div aria-label="Rated lemon" className="rating-box">
          <img src={rating} id="lemon-rating-icon" alt="Lemon rating" />
        </div>
        <div aria-label="Rated lemon" className="rating-box">
          <img src={rating} id="lemon-rating-icon" alt="Lemon rating" />
        </div>
        <div aria-label="Rated lemon" className="rating-box">
          <img src={rating} id="lemon-rating-icon" alt="Lemon rating" />
        </div>
        <div aria-label="Unrated lemon" className="rating-box">
          <img src={norating} id="lemon-rating-icon" alt="Lemon rating" />
        </div>
        <div aria-label="Unrated lemon" className="rating-box">
          <img src={norating} id="lemon-rating-icon" alt="Lemon rating" />
        </div>
      </div>
      <div className="user-container">
        <div aria-label="User image" id="user-image-container">
          <img src={user3} id="user1" alt="user 1 profile" />
        </div>
        <div aria-label="User info" className="user-id">
          <div className="user-info">
            <h6 id="user-info-text">Sara Lopez</h6>
          </div>
          <div id="user-name">
            <h5 id="user-name-text">Sara72</h5>
          </div>
        </div>
      </div>
      <article aria-label="User comment" className="user-comment">
      "Cannot stop thinking about the delicious Mac N Cheese."
      </article>
    </div>
  );
};

export default Testimonial3;
