import './css/app.css'

import Vue from "vue";
import App from "./app.vue";
import store from "./store";
import router from "./router";
// import i18n from "./i18n";

import { sync } from "vuex-router-sync";
import NProgress from 'vue-nprogress'



Vue.use(NProgress);


// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router);


Vue.config.devtools = process.env.NODE_ENV !== 'production';

// create the app instance.
// here we inject the router, store and ssr context to all child components,
// making them available everywhere as `this.$router` and `this.$store`.

const nprogress = new NProgress();


const app = new Vue({
  // mixins: [mixin],
  el: '#app',
  router,
  store,
  nprogress,
  // i18n,  
  render: h => h(App)
});

// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
export { app, router, store };