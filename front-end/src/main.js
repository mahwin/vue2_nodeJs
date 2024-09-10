import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import "@/plugins/formatter";
import "@/plugins/axios";

import mixins from "@/mixins";
Vue.mixin(mixins);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
