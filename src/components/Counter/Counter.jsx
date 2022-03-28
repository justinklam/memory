import React from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

const Counter = ({cardsCount, onClick}) => {

  const onDecrement = (e) => {
    e.preventDefault();

  };

  const onIncrement = (e) => {
    e.preventDefault();

  };


    return (
      <div className="quantity">
        <button className="minus" onClick={onDecrement}>-</button>
        <span className="quantity">{cardsCount}</span>
        <button className="plus" onClick={onIncrement}>+</button>
      </div>
      
    )
};

export default Counter;
