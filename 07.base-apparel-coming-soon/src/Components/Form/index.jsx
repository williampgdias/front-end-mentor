import React, { Component } from 'react';
import './style.css';
import IconArrow from './icon-arrow.svg';


class Form extends Component {
    render() {
        return(
            <div>
                <form className='form'>
                    <input
                        name = 'email'
                        type = 'email'
                        placeholder = 'E-mail Address'
                    />
                    <button>
                        <img src= { IconArrow } alt='Icon Arrow' className='icon-arrow' />
                    </button>
                </form>
            </div>
        )
    }
};

export default Form;