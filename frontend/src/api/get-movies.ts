import { API_MOVIE_URL } from "../constants/url";
import { Movie } from "../interfaces/Movie";

const queryTitle = "&s=";
export const getMoviesFromAPI = async (title: string) => {
  return await fetch(`${API_MOVIE_URL}${queryTitle}${title}`)
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

const queryId = "&i=";
export const getMovieDetailFromAPI = async (id: string): Promise<Movie> => {
  return await fetch(`${API_MOVIE_URL}${queryId}${id}`)
    .then(async (result) => await result.json())
    .then((movie) => {
      return {
        id: movie.imdbID || "1234",
        title: movie.Title,
        imgUrl: movie.Poster,
        year: movie.Year,
        actors: movie.Actors,
        director: movie.Director,
      };
    });
};
