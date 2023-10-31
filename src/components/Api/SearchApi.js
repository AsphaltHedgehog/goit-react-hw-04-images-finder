import axios from 'axios';

const API_KEY = '39837600-44ccebdf36efc250e3924832c';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const FetchQuery = async (searchQuery, page = 1, perPage = 12) => {
  const { data } = await axios.get(
    `?key=${API_KEY}&q=${searchQuery}&page=${page}&per_page=${perPage}`
  );
  return data;
};

export default FetchQuery;