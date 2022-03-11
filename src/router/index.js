import { createRouter, createWebHashHistory } from 'vue-router';
// import carts from '../views/CartsView.vue';

const routes = [
  {
    path: '/',
    component: () => import('../views/HomeView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/ProductsView.vue'),
      },
      {
        path: 'carts',
        component: () => import('../views/CartsView.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/ProductView.vue'),
      },
    ],
  },
  {
    path: '/loginpage',
    component: () => import('../views/LoginPageView.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/AdminProduct.vue'),
      },
      {
        path: '/order',
        component: () => import('../views/OrderView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
