import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const pinia = createPinia();
import { router } from "./routes/route";
import { createPinia } from "pinia";

createApp(App).use(router).use(pinia).mount("#app");
