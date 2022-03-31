import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Loader from './../Loader';

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
  
  return <div>{isLoading && <Loader />}</div>;
};

export default Board;

Board.propTypes = {
  gameOptions: PropTypes.shape({
    pace: PropTypes.string.isRequired,
    cardsCount:PropTypes.number.isRequired,
    category:PropTypes.string.isRequired
  })
}
