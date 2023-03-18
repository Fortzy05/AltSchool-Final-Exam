import { createApp } from "vue";
import App from "./App.vue";
import router from ".";
import store from "./main";
import "./assets/App.css";

createApp(App).use(router).use(store).mount("#app");
