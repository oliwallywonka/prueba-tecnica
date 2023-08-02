import { defineStore } from "pinia";
import { Movie } from "../interfaces/Movie";

interface FavoriteState {
  movies: Movie[];
}

const favoriteStoreKey = "FAVORITE_STATE";
export const favoriteStore = defineStore(favoriteStoreKey, {
  state: (): FavoriteState => ({
    movies: [],
  }),
  actions: {
    addToFavorite(movie: Movie) {
      this.movies = [...this.movies, movie];
    },
    removeFromFavorite(id: string) {
      this.movies = this.movies.filter((m) => m.id !== id);
    },
  },
});
