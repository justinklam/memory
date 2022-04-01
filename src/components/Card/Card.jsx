import React from 'react';
import PropTypes from 'prop-types';

// components
import Image from './../Image';

// style
import styles from './Card.module.css';

const Card = ({card}) => {
    return (
      <div className={`${styles.container}`}>
      <div className={`${styles.card}`}>
          <div className={`${styles.front}`}></div>
          <div className={`${styles.back}`}></div>
            <Image url={card.url}/>
        </div>
      </div>
    )
};

export default Card;
