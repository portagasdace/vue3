import Service from "../index";
export default {
  /**
   * @description: 查询频道和媒体列表
   * @param {type}
   */
  conf() {
    return Service.get({ url: "/v1/conf" });
  }
};
