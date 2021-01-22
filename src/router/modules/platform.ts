const ROUTER_PATH = {
  PLATFORM: () =>
    import(/* webpackChunkName: "audience" */ "@/views/Platform/program") // 观众分析
};
export default [
  /**
   * @title 观众分析-节目榜单
   */
  {
    path: "/platform-program",
    name: "platform-program",
    meta: { keepAlive: true, isNav: true },
    component: ROUTER_PATH.PLATFORM
  }
];
