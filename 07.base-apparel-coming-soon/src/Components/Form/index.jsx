import React from 'react';
import './style.css';
import IconArrow from './icon-arrow.svg';

function Form() {
  function handleSubmit(e) {
    e.preventdefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input name='email' placeholder='E-mail Address' />
      <button type='submit'>
        <img src={IconArrow} alt='Icon Arrow' className='icon-arrow' />
      </button>
    </form>
  );
}

export default Form;
