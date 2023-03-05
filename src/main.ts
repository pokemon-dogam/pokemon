import { createHead } from '@vueuse/head';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/index.postcss';
import router from './router';
import ko from 'element-plus/es/locale/lang/ko';
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';

const head = createHead();
const app = createApp(App);

app
  .use(createPinia())
  .use(router)
  .use(head)
  .use(ElementPlus, { locale: ko })
  .mount('#app');
