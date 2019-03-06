import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./plugins/element.js";
import Cookie from "./assets/js/cookie"; //设置cookie
// import { getCookie } from "./assets/js/cookie"; //读取cookie
// import { delCookie } from "./assets/js/cookie"; //删除cookie
Object.defineProperty(Vue.prototype, "$http", {
  value: axios
});
Vue.prototype.Cookie = Cookie;


/**厂商管理平台 */
import header from "./components/brand/structure/header.vue"; //导入顶部导航栏的组件
import aside from "./components/brand/structure/aside.vue"; //导入侧边导航栏的组件
import main from "./components/brand/structure/home.vue"; //导入首页的页面的组件
import footer from "./components/brand/structure/footer.vue"; //导入首页的页面的组件
import update_info from "./components/brand/information/update_info.vue"; //导入更新厂商界面的组件
import release_product from "./components/brand/product/release_product.vue"; //导入发布商品界面的组件
import productlist from "./components/brand/product/productlist.vue"; //导入搜索商品的界面的组件
import orderlist from "./components/brand/order/orderlist.vue"; //导入编辑订单的组件
import chargeback from "./components/brand/order/chargeback.vue"; //导入退单的组件
import login from "./components/brand/login/login.vue"; //导入登录的组件
import register from "./components/brand/register/register.vue"; //导入注册的组件

/**进货平台 */
import index from "./components/mall/index/index.vue"; //导入进货平台首页
import search from "./components/mall/index/search.vue"; //导入搜索的组件

/**字符 */
import fonts from "./assets/fonts/iconfont.css"; //导入字符型图案

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
