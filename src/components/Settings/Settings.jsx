import React from 'react';
import PropTypes from 'prop-types';

import { CATEGORIES } from '../../constant';
import RadioBox from '../RadioBox/RadioBox.jsx';

import styles from './Settings.module.css';

const Settings = () => {
    return (
        <div className={`${styles.settings} frosted`}>
          <h2>Settings</h2>

          <h4>Category:</h4>
          <div className={`${styles.settings}`}>
            {CATEGORIES.map(item => {
              <RadioBox key={item} name={item}/>
            })}
          </div>
        </div>
    );
};

export default Settings;
