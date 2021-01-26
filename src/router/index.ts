import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layouts from "@/layouts/index";
import Login from "./modules/login";
import Overview from "./modules/overview";
import Audience from "./modules/audience";
import Platform from "./modules/platform";

const routes: Array<RouteRecordRaw> = [
  ...Login,
  {
    path: "/",
    name: "layouts",
    component: Layouts,
    children: [...Overview, ...Audience, ...Platform]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
