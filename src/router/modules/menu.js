export default [
  {
    path: '/menu',
    component: () => import('@/views/menu.vue'),
  },

  {
    path: '/prescription',
    component: () => import('@/views/prescription.vue'),
  },

  {
    path: '/labtest',
    component: () => import('@/views/labtest.vue'),
  },

  {
    path: '/medlab',
    component: () => import('@/views/medlab.vue'),
  },

  {
    path: '/meddash',
    component: () => import('@/views/meddash.vue'),
  },

  {
    path: '/paymeth',
    component: () => import('@/views/paymeth.vue'),
  },

  {
    path: '/drug',
    component: () => import('@/views/drug.vue'),
  },
]
