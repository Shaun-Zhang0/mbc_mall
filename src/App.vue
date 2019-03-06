<template>
  <div id="app">
    <div v-if="$route.meta.keepAlive">
      <div class="container">
        <app-header></app-header>
      </div>
      <div class="el-container">
        <app-aside></app-aside>
        <router-view></router-view>

      </div>
    </div>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>

</template>
<script>

/**厂商管理平台 */
import Header from "./components/brand/structure/header";
import Aside from "./components/brand/structure/aside";
import Footer from "./components/brand/structure/footer";
import Main from "./components/brand/structure/home";
import Update_info from "./components/brand/information/update_info";
import Release_product from "./components/brand/product/release_product";
import Productlist from "./components/brand/product/productlist";
import Orderlist from "./components/brand/order/orderlist";
import Chargeback from "./components/brand/order/chargeback";
import login from "./components/brand/login/login";
import register from "./components/brand/register/register";


export default {
  components: {
    appHeader: Header, //header组件
    appAside: Aside, //aside组件
    appMain: Main, //首页展现组件
    appFooter: Footer, //首页展现组件
    update_info: Update_info, //更新厂商信息组件
    release_product: Release_product, //发布商品组件
    orderlist: Orderlist, //发布商品组件
    productlist: Productlist, //搜索商品的组件
    chargeback: Chargeback, //退单的组件
    login: login, //登录的组件
    register: register //注册的组件
  }
};
</script>

<style>

html,
body {
  margin: 0;
  padding: 0;
}
.el-container {
  width: 100%;
  height: 100%;
}
.el-main {
  background-color: white;
  color: #333;
  text-align: center;
  height: 100%;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 100%;
}
.el-menu {
  border-right: none;
}
.aside {
  width: 100%;
}
.breadcrumb {
  height: 50px;
  background-color: hsla(0, 0%, 70%, 0.1);
  padding-left: 10px;
}
.pagination {
  background-color: white;
  height: 60px;
  line-height: 60px;
}

</style>
