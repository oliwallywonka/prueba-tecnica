import { defineStore } from "pinia";
import { authUser } from "../api/auth-user";

interface AuthState {
  token: string;
}

const authStoreKey = "AUTH_STATE";

export const authStore = defineStore(authStoreKey, {
  state: (): AuthState => ({
    token: '',
  }),
  actions: {
    async login(user: string, password: string) {
      this.token = await authUser(user, password);
      console.log(this.token);
    },
    logout() {
        this.token = '';
    }
  },
});
