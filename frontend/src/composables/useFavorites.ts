import { storeToRefs } from "pinia";
import { favoriteStore } from "../store/favorites";

export const useFavorites = () => {
  const actions = favoriteStore();
  const { movies } = storeToRefs(favoriteStore());

  return {
    movies,
    addToFavorite: actions.addToFavorite,
    removeFromFavorite: actions.removeFromFavorite,
    loadFavorites: actions.loadFavorites,
  };
};
