import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import image1 from '../assets/chicago1.jpg';
import image2 from '../assets/chicago2.jpg';
import image3 from '../assets/chicago3.jpg';

const About = () => {
  var items = [
    {
      image: image1,
      // name: 'Placeholder',
      // description: 'Placeholder description'
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
  ];

  return (
    <div className="section-no-background">
      <div id="about">
          <h3 id="about-text">About us</h3>
          <article aria-label="About Little Lemon"id="about-info" className="section-text">
            Founded in Chicago, Little Lemon Mediterranean Restaurant has been serving authentic flavors since its inception. With a rich history
            of culinary excellence, we're committed to bringing the taste of the Mediterranean to your table.
          </article>
        <Carousel>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

function Item(props) {
  return (
    <Paper style={{ borderRadius: '19px' }}>
        <img aria-label="image-carousel" id="carousel" src={props.item.image} alt={props.item.name} />
        {/* <h2>{props.item.name}</h2>
        <p>{props.item.description}</p> */}
    </Paper>
  );
}

export default About;
