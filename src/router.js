import Vue from "vue";
import Router from "vue-router";
/**厂商管理平台 */
import Login from "./components/brand/login/login.vue"; //登录
import register from "./components/brand/register/register.vue"; //注册
import Orderlist from "./components/brand/order/orderlist.vue"; //订单列表
import Index from "./components/brand/structure/home.vue"; //主页展示
import Release_product from "./components/brand/product/release_product.vue"; //发布商品
import Productlist from "./components/brand/product/productlist.vue"; //商品列表
import Update_info from "./components/brand/information/update_info.vue"; //更新个人信息
import finance from "./components/brand/finance/finance.vue"; //账单管理

/**进货平台 */
import mall_index from "./components/mall/index/index.vue"; //主页
import mall_login from "./components/mall/login/login.vue"; //登录
import product from "./components/mall/product/product.vue"; //商品详情页
import order from "./components/mall/buy/order.vue";
import orderlist from "./components/mall/order/orderlist.vue";
import orderinfo from "./components/mall/order/orderinfo.vue";
import searchResult from "./components/mall/search/search.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    /**厂商管理平台 */
    {
      path: "/brand", //管理平台的首页
      component: Index,
      meta: { keepAlive: true }
    },
    {
      path: "/brand/update_info", //更新信息页面
      name: "Update_info",
      component: Update_info,
      meta: { keepAlive: true }
    },
    {
      path: "/brand/orderlist", //订单列表页面
      name: "Orderlist",
      component: Orderlist,
      meta: { keepAlive: true }
    },
    {
      path: "/brand/release_product", //发布商品页面
      name: "Release_product",
      component: Release_product,
      meta: { keepAlive: true }
    },
    {
      path: "/brand/Productlist", //商品列表页面
      name: "Productlist",
      component: Productlist,
      meta: { keepAlive: true }
    },

    {
      path: "/brand/Login", //登录页面
      name: "Login",
      component: Login,
      meta: { keepAlive: false }
    },
    {
      path: "/brand/register", //注册页面
      name: "register",
      component: register,
      meta: { keepAlive: false }
    },
    /**进货平台 */
    {
      path: "/mall/index", //首页
      name: "mall_index",
      component: mall_index,
      meta: { keepAlive: false }
    },
    {
      path: "/mall/myorderlist",
      name: "orderlist",
      component: orderlist,
      meta: { keepAlive: false }
    },

    {
      path: "/brand/finance", //财务管理界面
      name: "finance",
      component: finance,
      meta: { keepAlive: true }
    },
    {
      path: "/mall/product/:id", //商品详情页面
      name: "product",
      component: product,
      meta: { keepAlive: false }
    },
    {
      path: "/mall/searchResult", //搜索页面
      name: "searchResult",
      component: searchResult,
      meta: { keepAlive: false },
      query: {
        product_name: ""
      }
    }
  ]
});
