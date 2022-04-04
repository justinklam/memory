import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Loader from './../Loader';
import Card from './../Card';
import Result from './../Result';

// hook
import useGetImages from '../../hooks/useGetImages';
import useGameLogic from '../../hooks/useGameLogic';

// style
import styles from './Board.module.css';

const Board = ({gameOptions}) => {
  const [isLoading, setIsLoading] = useState(true);
  const images = useGetImages(gameOptions);
  const {cards, onCardClick, isWin} = useGameLogic(images, gameOptions.pace);
  
  // console.log({images});
  // runs whenever we receive images
  useEffect(() => {
    if (images.length > 0) setIsLoading(false)
  }, [images]);
  
  return (
    <div>
      {isWin && <Result/> }
      {isLoading ? (<Loader />) : 
      (cards.map(card => <Card key={card.uniqueId} card={card} onCardClick={onCardClick} />))}
    </div>
  );
};

export default Board;

Board.propTypes = {
  gameOptions: PropTypes.shape({
    pace: PropTypes.string.isRequired,
    cardsCount:PropTypes.number.isRequired,
    category:PropTypes.string.isRequired
  })
};