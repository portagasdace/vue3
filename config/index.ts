// 一些全局的config配置
interface ImodeUrl {
  baseURL: string;
  authBaseURL: string;
}
interface ImodeUrlObj {
  production: ImodeUrl;
  development: ImodeUrl;
  test: ImodeUrl;
}
const modeUrlObj: ImodeUrlObj = {
  // 生产环境
  production: {
    baseURL: "http://cloud.huan.tv",
    authBaseURL: ""
  },
  // 开发环境
  development: {
    baseURL: "http://cloud.huan.tv",
    authBaseURL: ""
  },
  // 测试环境
  test: {
    baseURL: "http://cloud.huan.tv/test",
    authBaseURL: ""
  }
};
const NODE_ENV: "production" | "development" | "test" = process.env.NODE_ENV;
export default modeUrlObj[NODE_ENV];
