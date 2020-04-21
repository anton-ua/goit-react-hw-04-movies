import axios from "axios";

const refs = {
  key: "d677a7e0ed4415c59cdc6bb614255a6d",
  baseUrl: "https://api.themoviedb.org/3/movie/",
  trendingUrl: "https://api.themoviedb.org/3/trending/movie/day?api_key=",
  searchUrl: "https://api.themoviedb.org/3/search/movie?api_key=",
};

export const fetchTrendingMovies = () =>
  axios.get(`${refs.trendingUrl}${refs.key}`).then(({ data }) => data.results);

export const searchMovie = (query) =>
  axios.get(`${refs.searchUrl}${refs.key}&query=${query}&page=1`);

export const fetchMovie = (id) =>
  axios.get(`${refs.baseUrl}${id}?api_key=${refs.key}`);

export const fetchCasts = (id) =>
  axios
    .get(`${refs.baseUrl}${id}/credits?api_key=${refs.key}`)
    .then(({ data }) => data.cast);

export const fetchReviews = (id) =>
  axios
    .get(
      `${refs.baseUrl}${id}/reviews?api_key=${refs.key}&language=en-US&page=1`
    )
    .then(({ data }) => data.results);
