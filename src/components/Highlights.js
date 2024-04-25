import React from 'react';
import Special1 from './Special1';
import Special2 from './Special2';
import Special3 from './Special3';

const Highlights = () => {
  return (
    <section className="section-no-background">
      <div id="highlights-container">
        <h2 id="highlights-text">
          This week's special
        </h2>
        <div className="placeholder-button">
          <button id="highlights-button">Menu</button>
        </div>
      </div>
      <div className="specials-container">
        <Special1 id="special-card" />
        <Special2 id="special-card" />
        <Special3 id="special-card" />
      </div>
    </section>
  );
};

export default Highlights;
