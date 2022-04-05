import { useState } from 'react';

// components
import Background from './components/Background';
import Board from  './components/Board';
import Settings from './components/Settings';

function App() {
  const [gameOptions, setGameOptions] = useState(null);

  const startGame = (options) => {
    setGameOptions(options);
    console.log({options});
  };

  const restartGame = () => {
    setGameOptions(null);
  };

  return (
    <>
      <Background />
      <h1>Memory Game</h1>
      {/* if there are no game options, render Settings else render Board */}
      {!gameOptions ? <Settings startGame={startGame}/> : <Board gameOptions={gameOptions} restartGame={restartGame}/>}
    </>
  );
};

export default App;