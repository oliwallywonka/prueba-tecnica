import { defineStore } from "pinia";
import { authUser } from "../api/auth-user";
import { User } from "../interfaces/User";

interface AuthState {
  token: string;
  user: User | null;
  isLoading: boolean;
}

const authStoreKey = "AUTH_STATE";

export const authStore = defineStore(authStoreKey, {
  state: (): AuthState => ({
    token: "",
    user: null,
    isLoading: false,
  }),
  actions: {
    async login(user: string, password: string) {
      this.isLoading = true;
      const res = await authUser(user, password);
      this.token = res.token;
      this.user = res.user;
      this.isLoading = false;
      console.log(res);
    },
    logout() {
      this.token = "";
      this.user = null;
    },
  },
});
