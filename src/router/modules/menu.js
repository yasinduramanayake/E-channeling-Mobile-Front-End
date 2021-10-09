export default [
  {
    path: "/menu",
    component: () => import("@/views/menu.vue"),
  },

  {
    path: "/prescription",
    component: () => import("@/views/prescription.vue"),
  },

  {
    path: "/labtest",
    component: () => import("@/views/labtest.vue"),
  },

  {
    path: "/meddash",
    component: () => import("@/views/meddash.vue"),
  },

  {
    path: "/paymeth",
    component: () => import("@/views/paymeth.vue"),
  },

  {
    path: "/drug",
    component: () => import("@/views/drug.vue"),
  },
  {
    path: "/medlab",
    component: () => import("@/views/mediclab.vue"),
  },

  {
    path: "/visa",
    component: () => import("@/views/visa.vue"),
  },

  {
    path: "/master",
    component: () => import("@/views/master.vue"),
  },

  {
    path: "/savecard",
    component: () => import("@/views/savecard.vue"),
  },

  {
    path: "/success",
    component: () => import("@/views/success.vue"),
  },
];
