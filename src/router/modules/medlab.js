export default [
    {
      path: "/prescription",
      component: () => import("@/views/Medlab/prescription.vue"),
    },
  
    {
      path: "/labtest",
      component: () => import("@/views/Medlab/labtest.vue"),
    },
  
    {
      path: "/meddash",
      component: () => import("@/views/Medlab/meddash.vue"),
    },
  
    {
      path: "/paymeth",
      component: () => import("@/views/Medlab/paymeth.vue"),
    },
  
    {
      path: "/drug",
      component: () => import("@/views/Medlab/drug.vue"),
    },
    {
      path: "/medlab",
      component: () => import("@/views/Medlab/mediclab.vue"),
    },
  
    {
      path: "/visa",
      component: () => import("@/views/Medlab/visa.vue"),
    },
  
    {
      path: "/master",
      component: () => import("@/views/Medlab/master.vue"),
    },
  
    {
      path: "/savecard",
      component: () => import("@/views/Medlab/savecard.vue"),
    },
  
    {
      path: "/success",
      component: () => import("@/views/Medlab/success.vue"),
    },
  ];
  