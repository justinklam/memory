const BASE_URL = 'https://api.pexels.com/v1/search';

const getRandomPage = () => Math.round(Math.random() * (10-1) +1);

const useGetImages = () => {
  const buildURL = () => {
    let url = new URL ('https://api.pexels.com/v1/search');
    // adds the baseURL
    url.search = new URLSearchParams({
      query: 'nature',
      orientation: 'square',
      size: 'small',
      per_page: 2,
      page: getRandomPage()
    });
    return url;
  };

  fetch(buildURL(), {
    headers: {
      Authorization: process.env.REACT_APP_AUTH_KEY,
    }
  });
};

export default useGetImages;