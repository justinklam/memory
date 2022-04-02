/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { addUniqueIds, getFormedData, getPairedPics, shuffleCards } from "../utils";

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
    console.log({clickedCardId});
    flipCard(clickedCardId);
  };
  
  useEffect(() => {
    if (images.length > 0) prepareCards();
  }, [images]);

  return {cards, onCardClick};
};

export default useGameLogic;