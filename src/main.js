import { createApp } from "vue";
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css';
// import AmapVue from '@amap/amap-vue'
// AmapVue.config.key = '1b6f01b040e207443a367497bca8b7dd'
// AmapVue.config.version = '2.0';
import App from "./App.vue";


// const app = createApp(App);

createApp(App).use(ElementPlus).mount("#app");
