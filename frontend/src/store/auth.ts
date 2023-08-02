import { defineStore } from "pinia";
import { authUser } from "../api/auth-user";

interface AuthState {
  token: string;
  isLoading: boolean;
}

const authStoreKey = "AUTH_STATE";

export const authStore = defineStore(authStoreKey, {
  state: (): AuthState => ({
    token: '',
    isLoading: false,
  }),
  actions: {
    async login(user: string, password: string) {
      this.isLoading = true;
      this.token = await authUser(user, password);
      this.isLoading = false;
      console.log(this.token);
    },
    logout() {
        this.token = '';
    }
  },
});
