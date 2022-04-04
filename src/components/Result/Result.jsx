import React from 'react';
import PropTypes from 'prop-types';

import styles from './Result.module.css';

const Result = ({restartGame}) => (
  <div className={`${styles.container} frosted`}>
    <p>You Win!</p>
    <button className={`${styles.button} frosted`} onClick={restartGame}>Restart Game</button>
  </div>
);

export default Result;
