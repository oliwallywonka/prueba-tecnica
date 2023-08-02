import { defineStore } from "pinia";

import { Movie } from "../interfaces/Movie";
import MovieData from "../constants/movies.json";
import { getMovieDetailFromAPI } from "../api/get-movies";

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
    async loadDetails(id: string) {
      this.isLoading = true;
      this.movie = await getMovieDetailFromAPI(id);
      this.isLoading = false;
    }
  },
});
