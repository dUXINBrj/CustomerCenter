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
  MenuItemGroup,
  Tabs,
  TabPane,
  Button,
  Input,
  Select,
  Option,
  Form,
  FormItem,
  DatePicker,
  Table,
  TableColumn,
  Pagination,
  Loading,
  Message,
  Card
} from 'element-ui';
import './assets/common/css/common.css';
import './assets/common/css/animate.css';
import vuescroll from 'vuescroll';
import * as ApiPath from '@/api';
import * as filters from '@/assets/common/js/filter';
import Request from '@/http';
import common from '@/assets/common/js/common.js';
process.env.MOCK && require('@/mock');

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
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Button);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(DatePicker);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Loading);
Vue.use(Card);

Vue.config.productionTip = false;

axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
Vue.prototype.$http = axios;
Vue.prototype.$request = Request;
Vue.prototype.$Qs = qs;
Vue.prototype.$api = ApiPath;
Vue.prototype.$message = Message;
Vue.prototype.$common = common;

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});

// TODO keep-alive的组件销毁方法
// TODO 标签页管理方法
