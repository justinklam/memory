/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { addUniqueIds, getFormedData, getPairedPics, shuffleCards } from "../utils";

const MAX_VISIBLE_CARDS = 2;

const PACES = {
  easy: 1500,
  medium: 1000,
  hard: 500,
  pro: 200,
};

const useGameLogic = (images, gamePace) => {
  const [cards, setCards]= useState([]);
  const [visibleCards, setVisibleCards] = useState([]);

  const prepareCards = () => {
    const a = getFormedData(images);
    // b duplicates images from a
    const b = getPairedPics(a);
    const c = addUniqueIds(b);
    const d = shuffleCards(c);
    setCards(d);
  };

  const flipCard = (clickedCardId) => {
    console.log('flipCard', clickedCardId);
    const flippedCards = cards.map(card => {
      if (card.uniqueId === clickedCardId) {
        card.isShown = true;
      }

      if (card.isShown) setVisibleCards(oldState => [...oldState, card.uniqueId])

      return card;
    });
    setCards(flippedCards);
  };

  const onCardClick = (clickedCardId) => {
    if (visibleCards.length < MAX_VISIBLE_CARDS) {
      flipCard(clickedCardId);
      console.log({clickedCardId});
    }
  };

  const checkMatch = () => {
    const updatedCards = cards.map(card => {
      if (visibleCards.indexOf(card.uniqueId) !== -1) {
        card.isShown = false;
      }
      return card;
    })
    
    setTimeout(() => {
      setCards(updatedCards);
      setVisibleCards([]);
    }, PACES[gamePace]);
  };
  
  useEffect(() => {
    if (images.length > 0) prepareCards();
  }, [images]);

  useEffect(() => {
    if (visibleCards.length >= MAX_VISIBLE_CARDS) {
      checkMatch()
    }
  }, [visibleCards]);

  return {cards, onCardClick};
};

export default useGameLogic;