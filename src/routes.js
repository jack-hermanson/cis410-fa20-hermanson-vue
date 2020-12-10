import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import LogIn from './components/LogIn.vue';
import NotFound from './components/NotFound.vue';
import Sales from './components/Sales.vue';
import SaleCreate from './components/SaleCreate.vue';
import SignUp from './components/SignUp.vue';
import Strain from './components/Strain.vue';
import Strains from './components/Strains.vue';
import StrainCreate from './components/StrainCreate.vue';
import Account from './components/Account.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: LogIn
  },
  {
    path: '/sales',
    component: Sales
  },
  {
    path: '/signup',
    component: SignUp
  },
  {
    path: '/strain/:pk',
    component: Strain,
    children: [{
      path: 'sale',
      component: SaleCreate
    }]
  },
  {
    path: '/strain/new',
    component: StrainCreate
  },
  {
    path: '/strains',
    component: Strains
  },
  {
    path: '/account',
    component: Account
  },
  // not found must be last
  {
    path: '/:invalidroute(.*)',
    component: NotFound
  }
];

export default new VueRouter({
  mode: 'history',
  routes
});
