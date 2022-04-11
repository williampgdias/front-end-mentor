import React, { Component } from 'react';
import ModelImg from './hero-desktop.jpg';
import './style.css';

class Img extends Component {
  render() {
    return (
      <div>
        <img src={ModelImg} alt='' className='model-img' />
      </div>
    );
  }
}

export default Img;
