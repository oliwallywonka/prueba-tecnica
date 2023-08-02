import { API_MOVIE_URL } from "../constants/url";
import { Movie } from "../interfaces/Movie";

const query = "&s=";
export const getMoviesFromAPI = async (title: string) => {
  return await fetch(`${API_MOVIE_URL}${query}${title}`)
    .then(async (result) => await result.json())
    .then((result) => {
      const movies: Movie[] = [];
      for (let movie of result.Search) {
        movies.push({
          id: movie.imdbID,
          title: movie.Title,
          imgUrl: movie.Poster,
          year: movie.Year,
        });
      }
    });
};
