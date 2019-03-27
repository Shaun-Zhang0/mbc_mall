"use strict";

import Vue from "vue";
import axios from "axios";
import router from "../router";
import { Message } from "element-ui";

import Cookie from "../assets/js/cookie"; //设置cookie

axios.defaults.baseURL = "http://172.16.103.53:9000";

let config = {
  timeout: 6 * 1000 // Timeout
};

Vue.use(router);

axios.create(config);

//不需要拦截器的url
var notInterceptors = [
  "api/login/adminLogin/login",
  "api/login/adminLogin/getAdminTo",
  "api/personal/brand/register",
  "api/login/login/brand/email",
  "api/catalog/category/getCategory/",
  "api/product/product/findProductToIndex",
  "api/product/storeProduct/saveStoreProduct",
  "api/catalog/category/findFirstCategory"
];
for (let i = 0; i <= 5000; i++) {
  let url = "api/catalog/category/getCategory/" + i;
  notInterceptors.push(url);
}
for (let i = 0; i <= 5000; i++) {
  let url = "api/product/product/findOne/" + i;
  notInterceptors.push(url);
}
axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    // if (
    //   !Cookie.getCookie("brandtoken") &&
    //   notInterceptors.indexOf(config.url) == -1
    // ) {
    //   router.push({ path: "/brand/login" }); /**路由跳转到系统首页 */
    //   const CancelToken = axios.CancelToken;
    //   const source = CancelToken.source();
    //   source.cancel();
    //   Message.error({
    //     message: "登录凭证已过期，请重新登录~"
    //   });
    // }

    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    switch (error.response) {
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
        // router.push({ path: "/brand/login" }); /**路由跳转到系统首页 */
        Message.error({
          message: "服务器出错，请稍后再试"
        });
        break;
      case 504:
        console.log("服务器超时，请刷新页面重试");
        // router.push({ path: "/brand/login" }); /**路由跳转到系统首页 */
        Message.error({
          message: "服务器超时，请刷新页面重试"
        });
        break;
    }
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = axios;
  window.axios = axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return axios;
      }
    },
    $axios: {
      get() {
        return axios;
      }
    }
  });
};

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 */
export function get(url) {
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

export function post(url, params, headers) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, headers, {
        cancelToken: axios.CancelToken.source().token
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

Vue.use(Plugin);

export default Plugin;
