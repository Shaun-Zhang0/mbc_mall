"use strict";

import Vue from "vue";
import axios from "axios";
import router from "../router";

import { Message } from "element-ui";
import Cookie from "../assets/js/cookie"; //设置cookie

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
axios.defaults.headers.post["token"] = Cookie.getCookie("token");
console.log(Cookie.getCookie("token"));
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";
// if (Cookie.getCookie("token")) {
//   axios.defaults.headers.post["token"] = Cookie.getCookie("token");
// }

axios.defaults.baseURL = "http://localhost:9000";

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  timeout: 10 * 1000 // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

Vue.use(router);

axios.create(config);

axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    console.log(config.url);
    
    if (!Cookie.getCookie("token")&& config.url != "api/adminLogin/login") {
      Message.error({
        message: "登录验证已过期，请重新登录"
      });
      router.push({ path: "/brand/login" }); /**路由跳转到系统首页 */
    }
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
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
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
 */
export function post(url, params) {
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

Vue.use(Plugin);

export default Plugin;
