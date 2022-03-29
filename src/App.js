import { useState } from 'react';

// components
import Background from './components/Background';
import Board from  './components/Board';
import Settings from './components/Settings';

// hook
import useGetImages from './hooks/useGetImages';

function App() {
  const [gameOptions, setGameOptions] = useState(null);

  const images = useGetImages(gameOptions);
  console.log({images});

  const startGame = (options) => {
    setGameOptions(options);
    console.log({options});
  };

  return (
    <>
      <Background />
        <h1>Memory Game</h1>
      <Settings startGame={startGame}/>
      {images.length > 0 && <Board />}
    </>
  );
};

export default App;