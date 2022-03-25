import Background from './components/Background';

const BASE_URL = 'https://api.pexels.com/v1/search?query=nature&orientation=square';

function App() {
  const buildURL = () => {
    let url = new URL ('https://api.pexels.com/v1/search');
    // adds the baseURL
    url.search = new URLSearchParams({
      query: 'nature',
    });
  };

  fetch(BASE_URL, {
    headers: {
      Authorization: process.env.REACT_APP_AUTH_KEY,
    }
  });

  return (
    <>
      <Background />
      <h1>Memory Game</h1>
    </>
  );
};

export default App;