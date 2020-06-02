import "@/icons"; // icon
import "@/styles/scrollbar.scss";
import "utils/eventBus";
import Vue from "vue";
import VuetifyToast from "vuetify-toast-snackbar";
import App from "./App.vue";
import * as filters from "./filters"; // global filters
import "./permission"; // permission control
import vuetify from "./plugins/vuetify";
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.use(VuetifyToast, {
  x: "center",
  y: "top",
  icon: "mdi-alert-circle",
  dismissable: false,
  showClose: true,
  closeIcon: "mdi-close",
  closeColor: "#fff"
});

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
