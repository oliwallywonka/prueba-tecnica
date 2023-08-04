import { defineStore } from "pinia";
import { Movie } from "../interfaces/Movie";
import { getDetails } from "../api/auth-user";
import { saveMovie } from "../api/save-movie";

interface FavoriteState {
  movies: Movie[];
  isLoading: boolean;
}

const favoriteStoreKey = "FAVORITE_STATE";
export const favoriteStore = defineStore(favoriteStoreKey, {
  state: (): FavoriteState => ({
    movies: [],
    isLoading: false,
  }),
  actions: {
    async addToFavorite(userId: string, token: string, movie: Movie) {
      this.isLoading = true;
      const res = await saveMovie({userId, token, movie});
      this.isLoading = false;
    },
    removeFromFavorite(id: string) {
      this.movies = this.movies.filter((m) => m.id !== id);
    },
    async loadFavorites(userId: string, token: string) {
      this.isLoading = true;
      const res = await getDetails({ userId, token });
      this.movies = res.user.favorites;
      this.isLoading = false;
    },
  },
});
