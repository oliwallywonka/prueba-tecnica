import { defineStore } from "pinia";

import { Movie } from "../interfaces/Movie";
import MovieData from "../constants/movies.json";

interface MovieState {
  movies: Movie[];
  isLoading: boolean;
  hasErrors: boolean;
}

const movieStoreKey = "MOVIE_STATE";
export const movieStore = defineStore(movieStoreKey, {
  state: (): MovieState => ({
    movies: [],
    isLoading: false,
    hasErrors: false,
  }),
  actions: {
    async loadMovies() {
      this.isLoading = true;
      this.movies = await MovieData.Search.map((movie) => ({
        title: movie.Title,
        imgUrl: movie.Poster,
        year: movie.Year,
        id: movie.imdbID,
      }));
      this.isLoading = false;
    },
  },
});
