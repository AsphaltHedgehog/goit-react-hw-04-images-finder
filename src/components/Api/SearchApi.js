import axios from 'axios';


const API_KEY = '39837600-44ccebdf36efc250e3924832c';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const FetchQuery = async (searchQuery, page = 1, perPage = 12) => {
  const { data } = await axios.get(
    `?key=${API_KEY}&q=${searchQuery}&page=${page}&per_page=${perPage}`
  );
  return data;
};

// axios.defaults.baseURL = 'https://pixabay.com/api/';

// const FetchQuery = async (request, pageNumber) => {
//   try {
//     const result = await axios.get('', {
//       params: {
//         key: '39837600-44ccebdf36efc250e3924832c',
//         q: request,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         per_page: 12,
//         page: pageNumber,
//       }
//     });
    
//   return result;
//   } catch (error) {
//     console.log(error);
//   }
// };

export default FetchQuery;