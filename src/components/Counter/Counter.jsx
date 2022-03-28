import React from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

const Counter = ({cardsCount}) => {
    return (
      <div className="quantity">
        <button className="minus">-</button>
        <span className="quantity">{cardsCount}</span>
        <button className="plus">+</button>
      </div>
      
    )
};

export default Counter;
