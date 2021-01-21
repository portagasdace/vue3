import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layouts from "@/layouts/index";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "layouts",
    component: Layouts
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
