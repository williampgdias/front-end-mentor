import React, { Component } from 'react';
import './style.css';

class Intro extends Component {
  render() {
    return (
      <div className='container'>
        <div className='title'>
          <h1>
            <span>We're</span> <br />
            coming <br />
            soon
          </h1>
        </div>

        <div className='intro-text'>
          <p>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
        </div>
      </div>
    );
  }
}

export default Intro;
