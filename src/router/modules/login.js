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

  {
    path: '/list',
    component: () => import('@/views/private_doctor_list.vue'),
  },

  {
    path: '/list2',
    component: () => import('@/views/ayurvedic_list.vue'),
  },

  {
    path: '/register',
    component: () => import('@/views/Auth/register.vue'),
  },

  {
    path: '/channel1',
    component: () => import('@/views/private_hospital.vue'),
  },

  {
    path: '/channel2',
    component: () => import('@/views/ayurvedic_hospital.vue'),
  },

  {
    path: '/profile',
    component: () => import('@/views/profile.vue'),
  },
  
  {
    path: '/details',
    component: () => import('@/views/details.vue'),
  },

]
