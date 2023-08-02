import { defineStore } from "pinia";

import { Movie } from "../interfaces/Movie";
import { getMovieDetailFromAPI, getMoviesFromAPI } from "../api/get-movies";

interface MovieState {
  movies: Movie[];
  movie: Movie | null;
  isLoading: boolean;
  hasErrors: boolean;
}

const movieStoreKey = "MOVIE_STATE";
export const movieStore = defineStore(movieStoreKey, {
  state: (): MovieState => ({
    movies: [],
    isLoading: false,
    hasErrors: false,
    movie: null,
  }),
  actions: {
    async loadMovies(title: string) {
      this.isLoading = true;
      this.movies = await getMoviesFromAPI(title);
      this.isLoading = false;
    },
    async loadDetails(id: string) {
      this.isLoading = true;
      this.movie = await getMovieDetailFromAPI(id);
      this.isLoading = false;
    },
  },
});
