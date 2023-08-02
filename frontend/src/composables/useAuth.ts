import { storeToRefs } from "pinia";
import { authStore } from "../store/auth";

export const useAuth = () => {
  const actions = authStore();
  const { token, isLoading } = storeToRefs(authStore());
  return {
    token,
    isLoading,
    login: actions.login,
    logout: actions.logout,
  };
};
