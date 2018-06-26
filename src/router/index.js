import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index/Index';
import Lock from '@/components/lock/Lock';

import IndexDashboard from '@/components/index/Dashboard/';
import Financing from '@/components/index/CustomerManage/Financing/';
import FinancingCompanyDetail from '@/components/index/CustomerManage/Financing/FinancingCompanyDetail';
import ECommerce from '@/components/index/CustomerManage/E-commerce/';
import ECommerceCompanyDetail from '@/components/index/CustomerManage/E-commerce/ECommercdCompanyDetail';
import RB from '@/components/index/CustomerManage/RB/';
import RbCompanyDetail from '@/components/index/CustomerManage/RB/RBCompanyDetail';
import ViewImg from '@/components/index/CustomerManage/ViewImg';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      redirect: '/index/dashboard',
      component: Index,
      children: [
        {
          path: '/index/dashboard',
          name: '首页',
          component: IndexDashboard,
          meta: {getName: false}
        },
        {path: '/index/CustomerManage/financing',
          name: '融资平台',
          component: Financing,
          meta: {getName: false}
        },
        {path: '/index/CustomerManage/eCommerce',
          name: '电商平台',
          component: ECommerce,
          meta: {getName: false}
        },
        {path: '/index/CustomerManage/RB',
          name: '荣邦',
          component: RB,
          meta: {getName: false}
        },
        {path: '/index/CustomerManage/financing/userDetail/:custId/:companyName',
          name: 'FinancingCompanyDetail',
          component: FinancingCompanyDetail,
          meta: {getName: true}
        },
        {path: '/index/CustomerManage/financing/companyDetail/:custId/:companyName',
          name: 'ECommerceCompanyDetail',
          component: ECommerceCompanyDetail,
          meta: {getName: true}
        },
        {path: '/index/CustomerManage/RB/companyDetail/:custId/:companyName',
          name: 'RBCompanyDetail',
          component: RbCompanyDetail,
          meta: {getName: true}
        },
        {path: '/index/CustomerManage/ViewImg',
          name: '图片浏览',
          component: ViewImg,
          meta: {getName: false}
        }
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
