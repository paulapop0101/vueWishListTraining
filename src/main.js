import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import VueGoodTablePlugin from "vue-good-table-next";

// import the styles
import "vue-good-table/dist/vue-good-table.css";

import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(VueGoodTablePlugin);
app.mount("#app");
