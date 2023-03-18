import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../src/component/HomeView.vue";
import Counter from "../src/component/CounterApp.vue";
import NotFound from "../src/component/NotFound.vue";

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
