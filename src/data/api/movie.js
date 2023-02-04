const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const DEFAULT_QUERY = 'language=en-US&include_adult=false&';

export const getMoviesBySearchQuery = (
  searchText,
  pageNumber = 1,
) => fetch(
  `${BASE_URL}?${DEFAULT_QUERY}api_key=${process.env.REACT_APP_API_KEY}&query=${searchText}&page=${pageNumber}`,
)
  .then((response) => response.json());
