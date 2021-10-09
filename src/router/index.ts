import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

// routes

import Home from "@/router/modules/login";
import Menu from "@/router/modules/menu";
import History from "@/router/modules/history";
import Vedio from "@/router/modules/vedio_consultation";
import Medlab from "@/router/modules/medlab";

const routes: Array<RouteRecordRaw> = [...Home, ...Menu, ...Vedio, ...History, ...Medlab];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
