// @ts-nocheck
import Vue from "vue";
import App from "./App.vue";
import { Button, Menu, Icon, Layout } from "ant-design-vue";
import VueRouter from "vue-router";
import router from "./router/router";

Vue.config.productionTip = false;

Vue.component({ Button, Menu, Icon, Layout });
Vue.use(Button);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Layout);

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
