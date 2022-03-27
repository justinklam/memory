import React from 'react';
import PropTypes from 'prop-types';

import styles from './RadioBox.module.css';

const RadioBox = ({name, selectedItem}) => {
  // console.log('name',name)
    return (
      <div className={`${styles.radioBox}`}>
        <input type="radio" name={name} id={name} value={name} checked={selectedItem}/>
        <label htmlFor={name}>{name}</label>
      </div>
    )
};

export default RadioBox;
