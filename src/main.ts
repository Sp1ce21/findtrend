import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { i18n } from "@/translation/translation";
import components from "@/components/UI/index";
import LoadScript from "vue-plugin-load-script";
  // import { loadScript } from "vue-plugin-load-script";
  // loadScript("https://platform.twitter.com/widgets.js");
const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(store).use(i18n).use(LoadScript).use(router).mount("#app");
