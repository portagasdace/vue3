const ROUTER_PATH = {
  AUDIENCE: () =>
    import(/* webpackChunkName: "audience" */ "@/views/Audience/Pages/index") // 观众分析
};
export default [
  /**
   * @title 观众分析-节目榜单
   */
  {
    path: "/audience-program",
    name: "audience-program",
    meta: { keepAlive: true, isNav: true },
    component: ROUTER_PATH.AUDIENCE
  }
];
