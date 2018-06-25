import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index/Index';
import Lock from '@/components/lock/Lock';

import IndexDashboard from '@/components/index/Dashboard/';
import Financing from '@/components/index/CustomerManage/Financing/';
import FinancingCompanyDetail from '@/components/index/CustomerManage/Financing/FinancingCompanyDetail';
import ECommerce from '@/components/index/CustomerManage/E-commerce/';
import RB from '@/components/index/CustomerManage/RB/';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      redirect: '/index/dashboard',
      component: Index,
      children: [
        {path: '/index/dashboard', name: '首页', component: IndexDashboard},
        {path: '/index/CustomerManage/financing', name: '融资平台', component: Financing},
        {path: '/index/CustomerManage/eCommerce', name: '电商平台', component: ECommerce},
        {path: '/index/CustomerManage/RB', name: '荣邦', component: RB},
        {path: '/index/CustomerManage/financing/userDetail/:userID/:userName', name: 'FinancingUserDetail', component: FinancingCompanyDetail}
      ]
    },
    {
      path: '/lock',
      name: 'lock',
      component: Lock
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
});
