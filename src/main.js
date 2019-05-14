import Vue from "vue";
import App from "./App.vue";

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import router from "./router";
import store from "./store";
import "@/firebase/";

// import "./fortawesome";
import "@fortawesome/fontawesome-free/css/all.css";
Vue.use(Vuetify, {
  iconfont: "fa"
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
// new Vue({
//   el: "#app",
//   router,
//   store,
//   components: { App },
//   template: "<App/>"
// });

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

if (window.Cypress) {
  window.app = app;
}
