import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import Orderlist from "./components/order/orderlist.vue";
import Index from "./components/structure/home.vue";
import Release_product from "./components/product/release_product.vue";
import Productlist from "./components/product/productlist.vue";
import Update_info from "./components/information/update_info.vue";
import Chargerback from "./components/order/chargeback.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {path:"/",component:Index},
    {path:"/update_info",name:Update_info,component:Update_info},
    {path:"/orderlist",name:Orderlist,component:Orderlist},
    {path:"/release_product",name:Release_product,component:Release_product},
    {path:"/Productlist",name:Productlist,component:Productlist},
    {path:"/Chargerback",name:Chargerback,component:Chargerback}
   
  ]
});
