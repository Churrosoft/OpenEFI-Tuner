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
    path: '/injection',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'tables',
        component: () => import('pages/Injection/tables.vue'),
      },
      {
        path: 'config',
        component: () => import('pages/Injection/config.vue'),
      },
    ],
  },
  {
    path: '/startup',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'wue',
        component: () => import('pages/StartUp/WUE.vue'),
      },
      {
        path: 'ase',
        component: () => import('pages/StartUp/ASE.vue'),
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
  {
    path: '/debug',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Debug/console.vue') }],
  },
  {
    path: '/pmic',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/PMIC/index.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
