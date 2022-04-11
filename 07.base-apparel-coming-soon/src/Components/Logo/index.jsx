import React, { Component } from 'react';
import LogoImg from './logo.svg';
import './style.css';

class Logo extends Component {
  render() {
    return (
      <div>
        <img src={LogoImg} alt='Logo' className='logo' />
      </div>
    );
  }
}

export default Logo;
