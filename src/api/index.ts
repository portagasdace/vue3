import axios from "./axios";
export default {
  put({ url = "", headers = {}, params = {} }) {
    return axios({
      method: "put",
      url,
      headers,
      data: params,
      timeout: 60000
    });
  },
  putParam({ url = "", headers = {}, params = {} }) {
    return axios({
      method: "put",
      url,
      headers,
      params,
      timeout: 60000
    });
  },
  post({ url = "", headers = {}, params = {} }) {
    return axios({
      method: "post",
      url,
      headers,
      data: params,
      timeout: 60000
    });
  },
  get({ url = "", headers = {}, params = {} }) {
    return axios({
      method: "get",
      url,
      headers,
      params,
      timeout: 60000
    });
  },
  delete({ url = "", headers = {}, params = {} }) {
    return axios({
      method: "delete",
      url,
      headers,
      params,
      timeout: 60000
    });
  }
};
