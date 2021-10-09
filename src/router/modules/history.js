export default [
  {
    path: "/history",
    component: () => import("@/views/History/history.vue"),
  },
  {
    path:
      "/historydetails/:name/:date/:purpose/:hospital/:position",
    component: () => import("@/views/History/historydetails.vue"),
  },
];
