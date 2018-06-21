// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import qs from 'qs';
import store from './store/';
import {
  Container,
  Row,
  Col,
  Header,
  Aside,
  Main,
  Footer,
  menu,
  Submenu,
  MenuItem,
  MenuItemGroup
} from 'element-ui';
import './assets/common/css/common.css';
import vuescroll from 'vuescroll';

Vue.use(vuescroll);
Vue.use(Container);
Vue.use(Row);
Vue.use(Col);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);

Vue.config.productionTip = false;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
Vue.prototype.$http = axios;
Vue.prototype.$Qs = qs;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
