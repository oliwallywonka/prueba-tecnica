import { storeToRefs } from "pinia";
import { authStore } from "../store/auth";

export const useAuth = () => {
  const actions = authStore();
  const { token } = storeToRefs(authStore());
  return {
    token,
    login: actions.login,
    logout: actions.logout,
  };
};
