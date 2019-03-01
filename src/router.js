import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
/**厂商管理平台 */
import Orderlist from "./components/brand/order/orderlist.vue";
import Index from "./components/brand/structure/home.vue";
import Release_product from "./components/brand/product/release_product.vue";
import Productlist from "./components/brand/product/productlist.vue";
import Update_info from "./components/brand/information/update_info.vue";
import Chargerback from "./components/brand/order/chargeback.vue";
import Login from "./components/brand/login/login.vue";
import register from "./components/brand/register/register.vue";
/**进货平台 */
import mall_index from "./components/mall/index/index.vue";
import mall_login from "./components/mall/login/login.vue";
import index_header from "./components/mall/index/header.vue";
import carousel from "./components/mall/index/carousel.vue";
import search from "./components/mall/index/search.vue";
import footer from "./components/mall/index/footer.vue";
import product_line from "./components/mall/index/product_line.vue";
/**商品页面 */
import product from "./components/mall/product/product.vue";
/**确认订单 */
import order from "./components/mall/buy/order.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    /**厂商管理平台 */
    {
      path: "/brand",
      component: Index,
      meta: { keepAlive: true }
    },
    {
      path: "/brand/update_info",
      name: 'Update_info',
      component: Update_info,
      meta: { keepAlive: true }
    },
    {
      path: "/brand/orderlist",
      name: 'Orderlist',
      component: Orderlist,
      meta: { keepAlive: true }
    },
    {
      path: "/brand/release_product",
      name: 'Release_product',
      component: Release_product,
      meta: { keepAlive: true }
    },
    {
      path: "/brand/Productlist",
      name: 'Productlist',
      component: Productlist,
      meta: { keepAlive: true }
    },
    {
      path: "/brand/Chargerback",
      name: 'Chargerback',
      component: Chargerback,
      meta: { keepAlive: true }
    },
    {
      path: "/brand/Login",
      name: 'Login',
      component: Login,
      meta: { keepAlive: false }
    },
    {
      path: "/brand/register",
      name: 'register',
      component: register,
      meta: { keepAlive: false }
    },
    /**进货平台 */
    {//header
      path: "/mall/index",
      name: 'mall_index',
      component: mall_index,
      meta: { keepAlive: false }
    },
    {//header
      path: "/mall/order",
      name: 'order',
      component: order,
      meta: { keepAlive: false }
    },
    {//轮播图
      path: "/mall/product/:id",
      name: 'product',
      component: product,
      meta: { keepAlive: false }
    }
  ]
});
    