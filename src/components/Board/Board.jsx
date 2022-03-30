import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// hook
import useGetImages from '../../hooks/useGetImages';

// style
import styles from './Board.module.css';

const Board = ({gameOptions}) => {
  const [isLoading, setIsLoading] = useState(true);

  const images = useGetImages(gameOptions);
  console.log({images});

  // runs whenever we receive images
  useEffect(() => {
    if (images.length > 0) setIsLoading(false)
  }, [images])
  
  return <p>Board</p>;
};

export default Board;
