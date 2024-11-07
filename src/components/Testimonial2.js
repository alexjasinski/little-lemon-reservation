import React from 'react';
import rating from '../assets/logo-pure-green.png';
import norating from '../assets/logo-pure-white.png';
import user2 from '../assets/user2.png';

const Testimonial2 = () => {
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
        <div aria-label="Rated lemon" className="rating-box">
          <img src={rating} id="lemon-rating-icon" alt="Lemon rating" />
        </div>
        <div aria-label="Unrated lemon" className="rating-box">
          <img src={norating} id="lemon-rating-icon" alt="Lemon rating" />
        </div>
      </div>
      <div className="user-container">
        <div aria-label="User image" id="user-image-container">
          <img src={user2} id="user1" alt="user 1 profile" />
        </div>
        <div aria-label="User info" className="user-id">
          <div className="user-info">
            <h6 id="user-info-text">Mario Lopez</h6>
          </div>
          <div id="user-name">
            <h5 id="user-name-text">Lopez69</h5>
          </div>
        </div>
      </div>
      <article aria-label="User comment" className="user-comment">
        "Such a chilled out atmosphere out here!"
      </article>
    </div>
  );
};

export default Testimonial2;
