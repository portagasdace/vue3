// 一些全局的config配置
type NodeEnvType = "production" | "development" | "test";

interface ModeUrlType {
  baseURL: string;
  authBaseURL: string;
}
interface ModeUrlObjType {
  production: ModeUrlType;
  development: ModeUrlType;
  test: ModeUrlType;
}
const modeUrlObj: ModeUrlObjType = {
  // 生产环境
  production: {
    baseURL: "http://cloud.huan.tv/ott-analytics-api-v2",
    authBaseURL: ""
  },
  // 开发环境
  development: {
    baseURL: "http://cloud.huan.tv/ott-analytics-api-v2",
    authBaseURL: ""
  },
  // 测试环境
  test: {
    baseURL: "http://cloud.huan.tv/ott-analytics-api-v2",
    authBaseURL: ""
  }
};
const NODE_ENV: NodeEnvType = process.env.NODE_ENV as NodeEnvType;
export default modeUrlObj[NODE_ENV];
