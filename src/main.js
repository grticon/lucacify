import "./assets/main.css";
import 'jquery';
import $ from 'jquery';
import 'datatables.net';


import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
