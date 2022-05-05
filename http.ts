import axios from "axios";

const instance = axios.create();

let isRefreshToken = false;
let refreshRequest = [];

// 当判定token需要刷新时拦截后续请求

instance.interceptors.request.use((config) => {
  if (isRefreshToken) {
    new Promise((resolve, reject) => {
      refreshRequest.push((token) => {
        // @ts-ignore
        config.token = token;
        resolve(instance(config));
      });
    });
  } else {
    return config;
  }
});

// 多个并发请求 最先返回的若判定为token失效 则重新获取token
// 后续返回的请求进入请求队列 token刷新之后 重新发起请求

instance.interceptors.response.use((response) => {
  if (response?.statusText === "token.expired") {
    isRefreshToken = true;
    getToken().then((token) => {
      isRefreshToken = false;
      refreshRequest.forEach((request) => request(token));
      return instance(response.config);
    });

    return new Promise((resolve, reject) => {
      refreshRequest.push((token) => {
        // @ts-ignore
        response.config.token = token;
        resolve(instance(response.config));
      });
    });
  } else {
    return response;
  }
});

async function getToken() {
  // doSomeThing
  return new Promise((resolve, reject) => {
    // doSomeThing
    let token = "***";
    resolve(token);
  });
}
