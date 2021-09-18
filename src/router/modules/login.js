export default [
  {
    path: '',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/Auth/login.vue'),
  },
]
