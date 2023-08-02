import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Favorites from "../pages/Favorites.vue";
import Details from "../pages/Details.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/favoritos",
    name: "Favorites",
    component: Favorites,
  },
  {
    path: "/:movieId",
    component: Details,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
