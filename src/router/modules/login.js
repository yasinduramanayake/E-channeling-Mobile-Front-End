export default [
  {
    path: '',
    component: () => import('@/views/home.vue'),
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
    path: '/privateList',
    component: () => import('@/views/private_doctor_list.vue'),
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
