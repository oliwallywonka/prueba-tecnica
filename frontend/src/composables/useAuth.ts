import { storeToRefs } from "pinia";
import { authStore } from "../store/auth";

export const useAuth = () => {
  const actions = authStore();
  const { user, token, isLoading } = storeToRefs(authStore());
  return {
    token,
    isLoading,
    user,
    login: actions.login,
    logout: actions.logout,
  };
};
