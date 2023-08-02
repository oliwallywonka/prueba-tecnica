import { storeToRefs } from "pinia";

import { movieStore } from "../store/movies";

export const useMovie = () => {
  const actions = movieStore();
  const { isLoading, hasErrors, movies, movie } = storeToRefs(movieStore());
  return {
    // State
    isLoading,
    hasErrors,
    movies,
    movie,
    // Actions
    loadMovies: actions.loadMovies,
    loadDetails: actions.loadDetails,
  };
};
