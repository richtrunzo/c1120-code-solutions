import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';


const images = [
  {
    id: 0,
    pic: "./images/Charizard.png"
  },
  {
    id: 1,
    pic: "./images/Dragonite.png"
  },
  {
    id: 2,
    pic: "./images/Gengar.png"
  },
  {
    id: 3,
    pic: "./images/Greninja.png"
  },
  {
    id: 4,
    pic: "./images/Smeargle.png"
  }
]

ReactDOM.render(<Carousel images={images} />, document.querySelector('#root'));
