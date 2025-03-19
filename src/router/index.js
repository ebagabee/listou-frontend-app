import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "get-started",
    component: () => import("../views/onboarding/GetStarted.vue"),
  },

  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
