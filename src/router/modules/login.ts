const ROUTER_PATH = {
  LOGIN: () =>
    import(/* webpackChunkName: "audience" */ "@/views/Login/Pages/index") // 观众分析
};
export default [
  /**
   * @title 观众分析-节目榜单
   */
  {
    path: "/login",
    name: "login",
    meta: { keepAlive: true, isNav: true },
    component: ROUTER_PATH.LOGIN
  }
];
