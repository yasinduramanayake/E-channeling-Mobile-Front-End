export default [
  {
    path: '',
    component: () => import('@/views/home.vue'),
  },
{
     path: '',
     component: () => import ('@/views/Folder.vue')
     },
  {
    path: '/login',
    component: () => import('@/views/Auth/login.vue'),
  },
]
