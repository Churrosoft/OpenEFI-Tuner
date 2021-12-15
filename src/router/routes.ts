import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },

  {
    path: '/ignition',
    component: () => import('layouts/Ignition.vue'),
    children: [
      {
        path: 'tables',
        component: () => import('pages/Ignition/tables.vue'),
      },
      {
        path: 'config',
        component: () => import('pages/Ignition/config.vue'),
      },
    ],
  },

  {
    path: '/dtc',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/DTC/Status.vue') },
      {
        path: 'config',
        component: () => import('pages/DTC/Configuration.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
