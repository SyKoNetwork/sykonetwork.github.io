import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/docs",
    name: "Docs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Docs.vue"),
  },
  {
    path: "/creations",
    name: "Creations",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Creations.vue"),
  },
  {
    path: "/TLT",
    name: "TLT",
    component: () =>
      import("../views/Addons/TLT.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
