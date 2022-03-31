/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { addUniqueIds, getFormedData, getPairedPics, shuffleCards } from "../utils";

const useGameLogic = (images) => {

  console.log('images-----', {images});

  const prepareCards = () => {
    const a = getFormedData(images);
    // b duplicates images from a
    const b = getPairedPics(a);
    const c = addUniqueIds(b);
    const d = shuffleCards(c);
  };
  
  useEffect(() => {
    if (images.length > 0) prepareCards();
  }, [images])
};

export default useGameLogic;