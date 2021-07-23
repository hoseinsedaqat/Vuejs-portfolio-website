import Vue from 'vue';
import VueRouter from 'vue-router';
import { router } from './Routes/Routes.js';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routers = new VueRouter({
  routes: router,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router: routers
}).$mount('#app')
