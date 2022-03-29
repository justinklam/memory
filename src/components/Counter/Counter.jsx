import React from 'react';
import PropTypes from 'prop-types';

// styles
import './Counter.css';

const STEP = 2;

const Counter = ({cardsCount, onClick}) => {

  const onDecrement = (e) => {
    e.preventDefault();
    const number = cardsCount - STEP;
    if (number <= 160) onClick(number);
  };

  const onIncrement = (e) => {
    e.preventDefault();
    const number = cardsCount + STEP;
    if (number >= 2) onClick(number);
  };

    return (
      <div className="quantity">
        <button className="minus" onClick={onDecrement}>-</button>
        <span className="quantity">{cardsCount}</span>
        <button className="plus" onClick={onIncrement}>+</button>
      </div>
      
    )
};

Counter.propTypes = {
  cardsCount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Counter;
