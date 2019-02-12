import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Orderlist from "./components/brand/order/orderlist.vue";
import Index from "./components/structure/home.vue";
import Release_product from "./components/brand/product/release_product.vue";
import Productlist from "./components/brand/product/productlist.vue";
import Update_info from "./components/brand/information/update_info.vue";
import Chargerback from "./components/brand/order/chargeback.vue";
import Login from "./components/brand/login/login.vue";
import register from "./components/brand/register/register.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
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
    }
  ]
});
