import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Favorites from "../pages/Favorites.vue";
import Details from "../pages/Details.vue";
import { useAuth } from "../composables/useAuth";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: false },
  },
  {
    path: "/favoritos",
    name: "Favorites",
    component: Favorites,
    meta: { requiresAuth: true },
  },
  {
    path: "/:movieId",
    component: Details,
    meta: { requiresAuth: false },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const { user } = useAuth();
  if (to.meta.requiresAuth && !user.value ) {
    return {
      path: '/',
      query: { redirect: to.fullPath }
    }
  }
})