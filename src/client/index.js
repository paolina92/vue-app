import Vue from 'vue';
import VueRouter from 'vue-router';

import Routes from './routes';
import App from './app.vue';

Vue.use(VueRouter);

const routes = new VueRouter({
  routes: Routes
});

(() => new Vue({
  el: '#app',
  render: h => h(App),
  router: routes
}))();
