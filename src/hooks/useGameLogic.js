/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { addUniqueIds, getFormedData, getPairedPics, shuffleCards } from "../utils";

const MAX_VISIBLE_CARDS = 2;

const useGameLogic = (images) => {
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
  
  useEffect(() => {
    if (images.length > 0) prepareCards();
  }, [images]);

  useEffect(() => {
    if (visibleCards.length >= MAX_VISIBLE_CARDS) {
      const updatedCards = cards.map(card => {
        if (visibleCards.indexOf(card.uniqueId) !== -1) {
          card.isShown = false;
        }
        return card;
      })
      
      setTimeout(() => {
        setCards(updatedCards);
        setVisibleCards([]);
      }, 1000);
    }
  }, [visibleCards])

  return {cards, onCardClick};
};

export default useGameLogic;