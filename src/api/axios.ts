import axios from "axios";
import Qs from "qs";
import _ from "lodash";
import config from "../../config/index";
// 创建axios 实例
const service = axios.create({
  baseURL: config.baseURL, // api的base_url
  timeout: 10000, // 请求超时时间
  transformRequest: [
    data => {
      return Qs.stringify(data);
    }
  ]
});

// request 拦截器
service.interceptors.request.use(
  config => {
    // 这里可以自定义一些config 配置

    return config;
  },
  error => {
    //  这里处理一些请求出错的情况

    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  res => {
    let _data = null;
    if (res.status === 200) {
      _data = res.data;
      if (_.isPlainObject(_data) && _data.code) {
        switch (_data.code) {
          case 401:
            break;
          case 403:
            break;
        }
      }
    }
    return _data;
  },
  error => {
    // 这里处理一些response 出错时的逻辑

    return Promise.reject(error);
  }
);

export default service;
