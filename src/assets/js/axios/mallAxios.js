import mallAxios from "axios";
import Vue from "vue";

import Cookie from "./../cookie"; //设置cookie
import { Message } from "element-ui";
import router from "./../../../router";

const maxios = mallAxios.create();

maxios.defaults.baseURl = "http://localhost:9000";

var notInterceptors = [];

for (let i = 0; i <= 20; i++) {
  let url = "api/catalog/category/getCategory/" + i;
  notInterceptors.push(url);
}
for (let i = 0; i <= 50; i++) {
  let url = "api/product/product/findOne/" + i;
  notInterceptors.push(url);
}

maxios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    const storeToken = Cookie.getCookie("storeToken");
    if (storeToken) {
      console.log(storeToken);
      config.headers.token = storeToken;
    }
    if (notInterceptors.indexOf(config.url) == -1) {
      Message.error({
        message: "该商品不存在~"
      });
      
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
maxios.interceptors.response.use(
  function(response) {
    // Do something with response data

    return response;
  },
  function(error) {
    // Do something with response error
    switch (error.response.status) {
      case 401:
        console.log("登录验证已过期，请重新登录");
        this.$router.push({ path: "/brand/login" }); /**路由跳转到系统首页 */
        Message.error({
          message: "服务器出错，请稍后再试"
        });
        break;
      case 404:
        console.log("服务器找不到相关的资源");
        Message.error({
          message: "服务器找不到相关的资源"
        });
        break;
      case 500:
        console.log("服务器出错，请稍后再试");
        Message.error({
          message: "服务器出错，请稍后再试"
        });
        break;
      case 504:
        console.log("服务器超时，请刷新页面重试");
        Message.error({
          message: "服务器超时，请刷新页面重试"
        });
        break;
    }
    return Promise.reject(error);
  }
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 */
export function mallGet(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 *
 */
export function mallPost(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
export default maxios;
