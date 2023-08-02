import { storeToRefs } from "pinia";

import { movieStore } from "../store/movies";

export const useMovie = () => {
  const actions = movieStore();
  const { isLoading, hasErrors, movies } = storeToRefs(movieStore());
  return {
    // State
    isLoading,
    hasErrors,
    movies,

    // Actions
    loadMovies: actions.loadMovies,
  };
};
