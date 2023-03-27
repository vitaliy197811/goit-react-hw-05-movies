import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/';
const KEY = '2e3720a8bccf444312af356dec280511';

export const getTrending = async () => {
    const { data } = await axios.get(`${URL}trending/movie/day?api_key=${KEY}&language=en-US`);
    return data.results;
};

export const getSearchQuery = async (query) => {
    const { data } = await axios.get(`${URL}/search/movie?api_key=${KEY}&query=${query}&include_adult=false&language=en-US&page=1`);
    return data.results;
};

export const getDetails = async (id) => {
    const { data } = await axios.get(`${URL}movie/${id}?api_key=${KEY}&language=en-US`);
    return data;
};

export const geCast = async (id) => {
    const { data } = await axios.get(`${URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`);
    return data.cast;
};

export const getReview = async (id) => {
    const { data } = await axios.get(`${URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`);
    return data.results;
};