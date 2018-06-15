import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index/Index';
import Dashboard from '@/components/dashboard/Dashboard';
import Lock from '@/components/lock/Lock';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/lock',
      name: 'lock',
      component: Lock
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
});
