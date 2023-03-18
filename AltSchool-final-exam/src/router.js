import { createRouter, createWebHistory } from "vue-router";
import Counter from "../src/components/CounterApp.vue";
import NotFound from "../src/components/NotFound.vue";
import HomeView from "../src/components/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/counter",
    name: "counter",
    component: Counter,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
