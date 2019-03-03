<template>
    <div>
        <index-header></index-header>
        <index-search></index-search>
        <OrderSearch></OrderSearch>
        <div style="border-radius:10px;margin: 0% 1.5% 0%">
            <el-row class="orderlist_title">
                <el-col style="font-size:2.5vh;color:#626262" :span="12" :offset="2">
                    我的订单列表
                </el-col>
            </el-row>
            <el-row class="eachorder" v-for="orderlist in orderlist">
                <el-row>
                    <el-col :span="24" style="background-color:#eee;height:30px;line-height:30px;">
                        <el-col :span="3" style="color:#838383;">商品信息</el-col>
                        <el-col :span="10" style="color:#838383;">&nbsp;</el-col>
                        <el-col :span="2" style="color:#838383">商品单价(元)</el-col>
                        <el-col :span="2" style="color:#838383">商品数量</el-col>
                        <el-col :span="2" style="color:#838383">订单总额(元)</el-col>
                        <el-col :span="2" style="color:#838383">订单状态</el-col>
                        <el-col :span="3" style="color:#838383; ">
                            <router-link to="/mall/myorderlist/order" tag="span">
                                <span class="checkorder" style="margin-left:10px;cursor:pointer;">查看详情</span>
                            </router-link>
                        </el-col>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="3" style="color:#838383;">
                        <span>
                            <img :src="orderlist.product.img_url" class="img">
                        </span>
                    </el-col>
                    <el-col :span="10" style="text-align:left">

                        <el-popover placement="bottom" width="200" trigger="hover" :content="'所属厂商 '+orderlist.product.product_brand">
                            <span class="product_name" slot="reference">{{orderlist.product.product_name}}</span>
                        </el-popover>

                    </el-col>
                    <el-col :span="2" style="color:#838383;">
                        {{orderlist.product.product_price}}
                    </el-col>
                    <el-col :span="2" style="color:#838383;">
                        <!-- <el-button size="mini" icon="el-icon-minus" circle></el-button> -->
                        <span style="margin: 0% 15% 0%">{{orderlist.product.product_num}}</span>
                        <!-- <el-button size="mini" icon="el-icon-plus" circle></el-button> -->
                    </el-col>
                    <el-col :span="2" style="color:#838383;">{{orderlist.order_price}}</el-col>
                    <el-col :span="2" style="color:#838383;">正在支付中</el-col>
                    <el-col :span="3" style="color:#838383;">
                        <el-button size="mini" type="danger" round>删除该订单</el-button>
                    </el-col>
                </el-row>
                <el-row style="background-color:#eee;font-size:12px;border-radius:0px 0px 5px 5px;">
                    <el-col style="height:20px;line-height:20px;text-align:left;color:rgb(131, 131, 131)" :span="24">
                        <span class="order_tip">订单号：{{orderlist.orderid}}</span>
                        <span class="order_tip">创建时间：{{orderlist.createdtime}}</span>
                        <span class="order_tip">支付时间：{{orderlist.paymenttime}}</span>
                        <span class="order_tip">交易完成时间：{{orderlist.endtime}}</span>

                    </el-col>
                </el-row>

            </el-row>
            <el-row style="text-align:center;margin-bottom:20px;">
                <el-col :span="24">
                    <el-pagination class="pager" :page-size="100" layout="total, prev, pager, next" :total="1000">
                    </el-pagination>
                </el-col>
            </el-row>

        </div>
        <ToTop></ToTop>
    </div>
</template>
<style scoped>
.orderlist_title {
  border-radius: 10px 10px 10px 10px;
  /* border-bottom: 2px solid #ccc; */
  height: 35px;
  line-height: 35px;
  background-color: #f3f3f3;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06);
}
.product_name {
  cursor: pointer;
}
.eachorder {
  height: auto;
  margin: 20px;
  line-height: 120px;
  border: 2px solid #ccc;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
}
.img {
  max-width: 80px;
  max-height: 80px;
  vertical-align: middle;
}
.checkorder {
  color: #f78989;
}
.checkorder:hover {
  color: rgba(52, 157, 255, 0.74);
}
.pager {
  color: rgb(209, 209, 209) !important;
}
.order_tip {
  margin-left: 10px;
}
</style>
<script>
import IndexHeader from "./../index/header";
import IndexSearch from "./../index/search";
import ToTop from "./../index/to_top";
import OrderSearch from "./../order/ordersearch";
export default {
  components: {
    IndexHeader: IndexHeader,
    IndexSearch: IndexSearch,
    ToTop: ToTop,
    OrderSearch: OrderSearch
  },
  data() {
    return {
      img_url: require("./../../../../public/img/product3.jpg"),
      orderlist: [
        {
          orderid: 164451201,
          product: {
            img_url: require("./../../../../public/img/product3.jpg"),
            product_name: "IPHONE X 64G 全网通4G智能手机",
            product_brand: "APPLE/苹果",
            product_price: 6400,
            product_num: 1
          },
          order_price: 6400,
          createdtime: "2019-12-05 12:10:45",
          paymenttime: "2019-12-05 12:10:55",
          endtime: "2019-12-06 13:20:44"
        },
        {
          orderid: 164451201,
          product: {
            img_url: require("./../../../../public/img/product2.jpg"),
            product_name: "IPHONE X 64G 全网通4G智能手机",
            product_brand: "APPLE/苹果",
            product_price: 6400,
            product_num: 1
          },
          order_price: 6400,
          createdtime: "2019-12-05 12:00:45",
          paymenttime: "2019-12-05 12:12:55",
          endtime: "2019-12-06 13:20:44"
        },
        {
          orderid: 164451201,
          product: {
            img_url: require("./../../../../public/img/product4.jpg"),
            product_name: "IPHONE X 64G 全网通4G智能手机",
            product_brand: "APPLE/苹果",
            product_price: 6400,
            product_num: 1
          },
          order_price: 6400,
          createdtime: "2019-12-05 11:10:45",
          paymenttime: "2019-12-05 12:11:55",
          endtime: "2019-12-06 13:20:44"
        },
        {
          orderid: 164451201,
          product: {
            img_url: require("./../../../../public/img/product5.jpg"),
            product_name: "IPHONE X 64G 全网通4G智能手机",
            product_brand: "APPLE/苹果",
            product_price: 6400,
            product_num: 1
          },
          order_price: 6400,
          createdtime: "2018-12-05 12:10:45",
          paymenttime: "2019-12-05 12:30:55",
          endtime: "2019-12-06 13:20:44"
        },
        {
          orderid: 164451201,
          product: {
            img_url: require("./../../../../public/img/product6.jpg"),
            product_name: "IPHONE X 64G 全网通4G智能手机",
            product_brand: "APPLE/苹果",
            product_price: 6400,
            product_num: 1
          },
          order_price: 6400,
          createdtime: "2019-12-05 12:15:45",
          paymenttime: "2019-12-05 12:20:55",
          endtime: "2019-12-06 13:20:44"
        }
      ]
    };
  }
};
</script>
