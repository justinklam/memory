import React from 'react';
import PropTypes from 'prop-types';

// hook
import useGetImages from '../../hooks/useGetImages';

// style
import styles from './Board.module.css';

const Board = ({gameOptions}) => {
  const images = useGetImages(gameOptions);
  console.log({images});
  
    return <p>Board</p>;
};

export default Board;
