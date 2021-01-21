import Service from "@/api/index";
import { HomeType } from "./interface";

/**
 * @description: 查询频道和媒体列表
 * @param {type}
 */
export const getHomeListApi = (data: HomeType) => {
  return Service.get({ url: "/v1/home-list", params: data });
};
