import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from 'bootstrap-vue';
import VueCodemirror from 'vue-codemirror';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/htmlmixed/htmlmixed.js';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/lib/codemirror.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueTheMask from 'vue-the-mask';
import FirebaseVue from './firebase';

Vue.use(BootstrapVue);
Vue.use(FirebaseVue);
Vue.use(VueTheMask);
Vue.use(VueCodemirror, {
  options: {
    lineNumbers: true,
    mode: "text/html",
    matchBrackets: true,
    autoRefresh:true,
  }
}/* { 
  options: { theme: 'base16-dark', ... },
  events: ['scroll', ...]
} */);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
