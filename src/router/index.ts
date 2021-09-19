import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

// routes

import Home from "@/router/modules/login";
import Menu from "@/router/modules/menu";


const routes: Array<RouteRecordRaw> = [
...Home,
...Menu
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
