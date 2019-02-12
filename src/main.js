import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./plugins/element.js";

import header from "./components/structure/header.vue"; //导入顶部导航栏的组件
import aside from "./components/structure/aside.vue"; //导入侧边导航栏的组件
import main from "./components/structure/home.vue"; //导入首页的页面的组件
import footer from "./components/structure/footer.vue"; //导入首页的页面的组件
import update_info from "./components/brand/information/update_info.vue"; //导入更新厂商界面的组件
import release_product from "./components/brand/product/release_product.vue"; //导入发布商品界面的组件
import productlist from "./components/brand/product/productlist.vue"; //导入搜索商品的界面的组件
import orderlist from "./components/brand/order/orderlist.vue"; //导入编辑订单的组件
import chargeback from "./components/brand/order/chargeback.vue"; //导入退单的组件
import login from "./components/brand/login/login.vue"; //导入登录的组件
import register from "./components/brand/register/register.vue"; //导入注册的组件
import fonts from "./assets/fonts/iconfont.css"; //导入字符型图案

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
