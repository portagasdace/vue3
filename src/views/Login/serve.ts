import Service from "@/api/index";
import { LoginApiType } from "./interface";

export default {
  /**
   * @description: 查询频道和媒体列表
   * @param {type}
   */
  LoginApi(params: LoginApiType) {
    return Service.get({ url: "/v2/login", params });
  }
};
