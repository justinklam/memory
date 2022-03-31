/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { addUniqueIds, getFormedData, getPairedPics, shuffleCards } from "../utils";

const useGameLogic = (images) => {
  const [cards, setCards]= useState([])

  const prepareCards = () => {
    const a = getFormedData(images);
    // b duplicates images from a
    const b = getPairedPics(a);
    const c = addUniqueIds(b);
    const d = shuffleCards(c);
    setCards(d);
  };
  
  useEffect(() => {
    if (images.length > 0) prepareCards();
  }, [images]);

  return cards;
};

export default useGameLogic;