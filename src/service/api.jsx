import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/';
const KEY = '2e3720a8bccf444312af356dec280511';

export const getTrending = async () => {
    const { data } = await axios.get(`${URL}trending/movie/day?api_key=${KEY}&language=en-US`);
    return data.results;
};

export async function getSearchQuery(query) {
    const { data } = await axios.get(`${URL}/search/movie?api_key=${KEY}&query=${query}&include_adult=false&language=en-US&page=1`);
    return data.results;;
}



// export const baseUrl = 'https://image.tmdb.org/t/p/w500';
// export const defaultUrl =
//     'https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg';


//запрос о полной информации о фильме для страницы кинофильма
export async function getDetails(id) {
    const { data } = await axios.get(`${URL}/movie/${id}?api_key=${KEY}&language=en-US`);
    // console.log(data);
    return data.results;
}

// запрос информации о актёрском составе для страницы кинофильма

export async function getMovieCast(id) {
    const { data } = await axios.get(
        `${URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`
    );

    const { cast } = data;
    // console.log(cast);
    return cast;
}

//запрос обзоров для страницы кинофильма

export async function getReview(id) {
    const { data } = await axios.get(
        `${URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
    );

    const { results } = data;
    // console.log(results);
    return results;
}