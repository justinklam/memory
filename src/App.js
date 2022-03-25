import Background from './components/Background';

function App() {
  const buildURL = () => {
    let url = new URL ('https://api.pexels.com/v1/search');
    // adds the baseURL
    url.search = new URLSearchParams({
      query: 'nature',
      orientation: 'square',
      size: 'small',
      per_page: 2,
    });
    return url;
  };

  fetch(buildURL(), {
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