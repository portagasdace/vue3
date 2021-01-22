/*
 * @Author: 徐长剑
 * @Description: 观众分析 路由文件
 * @Date: 2019-04-16 16:16:39
 */
const ROUTER_PATH = {
  OVERVIEW: () =>
    import(/* webpackChunkName: "audience" */ "@/views/Overview/index") // 观众分析
};
export default [
  /**
   * @title 观众分析
   */
  {
    path: "/overview",
    name: "overview",
    meta: { keepAlive: true, isNav: true },
    component: ROUTER_PATH.OVERVIEW
  }
];
