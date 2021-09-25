import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

// routes

import Home from "@/router/modules/login";


const routes: Array<RouteRecordRaw> = [
...Home
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
