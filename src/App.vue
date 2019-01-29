<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="el-container">
      <app-aside></app-aside>
     <router-view></router-view>

    </div>
    <app-footer></app-footer>
  </div>
  
</template>

<script>

import Header from "./components/structure/header";
import Aside from "./components/structure/aside";
import Footer from "./components/structure/footer";
import Main from "./components/structure/home";
import Update_info from "./components/information/update_info";
import Release_product from "./components/product/release_product";
import Productlist from "./components/product/productlist";
import Orderlist from "./components/order/orderlist";
import Chargeback from "./components/order/chargeback"


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
</style>
