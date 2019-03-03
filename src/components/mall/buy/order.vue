/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-02-28 17:55:20 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-03-03 20:56:04
 */

<template>
    <div>
        <index-header></index-header>
        <index-search></index-search>
        <div style="border:2px solid #ccc;border-radius:10px;margin: 1.5%">
            <el-row class="orderall">
                <el-row style="border-radius:10px;border-bottom: 2px solid #ccc;height:50px;
                               line-height:50px;background-color:#f3f3f3;
                                box-shadow:0 1px 7px rgba(0,0,0,.06)">
                    <el-col style="font-size:2.5vh;color:#626262" :span="12" :offset="2">
                        订单状态
                    </el-col>
                </el-row>
                <el-row class="title">
                    <el-col :xs="8" :sm="10" :md="6" :lg="6" :xl="0">&nbsp;</el-col>
                    <el-col :xl="24" :md="12" :lg="12">
                        <el-steps :active="active" finish-status="success">
                            <el-step title="确认订单信息"></el-step>
                            <el-step title="确认支付"></el-step>
                            <el-step title="购买成功"></el-step>
                        </el-steps>
                    </el-col>
                </el-row>
                <el-row v-show="active == 0 || active == 1">
                    <el-row style="height:300px;margin-top:10px;">
                        <el-row style="border-radius:10px;border-top: 2px solid #ccc;border-bottom: 2px solid #ccc;height:50px;
                                       line-height:50px;background-color:#f3f3f3;
                                box-shadow:0 1px 7px rgba(0,0,0,.06)">
                            <el-col style="font-size:2.5vh;color:#626262" :span="12" :offset="2">
                                确认订单信息
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-row class="order_info" style="height:150px;margin:0% 3% 0%;">
                                <el-table :data="order_data" style="width: 100%;">

                                    <el-table-column prop="order_num" label="订单号" width="130">
                                    </el-table-column>

                                    <el-table-column prop="img_url" label="商品图片" width="120">
                                        <template slot-scope="scope">
                                            <img :src="scope.row.img_url" style="width: 50px;height: 50px;">
                                        </template>
                                    </el-table-column>

                                    <el-table-column prop="product_name" label="商品名称" width="200">
                                    </el-table-column>

                                    <el-table-column prop="product_brand" label="厂商名称" width="180">
                                    </el-table-column>

                                    <el-table-column prop="product_color" label="颜色" width="180">
                                    </el-table-column>
                                    <el-table-column prop="product_num" label="数量" width="200">
                                        <template slot-scope="scope">
                                            <el-input-number @change="{{order_sumprice}}" size="mini" v-model="scope.row.product_num" :min="1" :max="5"></el-input-number>
                                        </template>
                                    </el-table-column>

                                    <el-table-column prop="product_price" label="单价(元)" width="180">
                                    </el-table-column>

                                    <el-table-column prop="order_price" label="订单金额(元)">
                                    </el-table-column>

                                </el-table>
                            </el-row>
                        </el-row>
                    </el-row>
                    <el-row style="text-align:right;">
                        <el-col :span="20" :offset="2">
                            <el-button @click="confirmOrder">确认订单信息</el-button>
                            <!-- <el-button v-show="active == 1" @click="confirmOrder">支付</el-button> -->
                        </el-col>
                    </el-row>
                </el-row>
                <el-row v-show="active == 2">
                    <el-row style="height:300px;margin-top:10px;">
                        <el-row style="border-radius:10px;border-top: 2px solid #ccc;border-bottom: 2px solid #ccc;height:50px;
                                       line-height:50px;background-color:#f3f3f3;
                                box-shadow:0 1px 7px rgba(0,0,0,.06)">
                            <el-col style="font-size:2.5vh;color:#626262" :span="12" :offset="2">
                                支付
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24" style="text-align:center;height:300px;line-height:300px;">
                                <span style="font-size:50px;" :style="{color:status}" :class="payment_icon"></span>
                                <span :style="{color:status}">{{paystatus}}</span>
                            </el-col>
                            <el-col :span="12"></el-col>
                        </el-row>

                    </el-row>

                </el-row>

                <Success v-if="active == 3"></Success>
            </el-row>
            <el-dialog title="订单支付" :visible.sync="dialogpayment" width="350px">
                <el-row>
                    <el-form label-width="90px">
                        <el-form-item label="订单号：">
                            {{order_data[0].order_num}}
                        </el-form-item>
                        <el-form-item label="订单金额：">
                            {{order_data[0].order_price}} 元
                        </el-form-item>
                        <el-form-item label="创建时间：">
                            {{order_data[0].order_createtime}}
                        </el-form-item>

                    </el-form>
                </el-row>
                <el-row>

                    <el-col :span="24">
                        <el-button style="width:100%;" type="primary" @click="payment">确 定 支 付</el-button>
                    </el-col>

                </el-row>

            </el-dialog>
        </div>
        <index-footer></index-footer>
    </div>
</template>
<style scoped>
.orderall {
  /* background-color: #ccc; */
  height: 600px;
}
.img {
  width: 100%;

  height: auto;
  /* border: 1px solid #999; */
}
.order_info .el-col {
  margin: 1%;
}
.title {
  height: auto;
  /* line-height: 50px; */
  font-size: 2.5vh;
  margin: 3%;
  background-color: white;
  /* border-top: 2px solid #ccc; */
}
</style>
<script>
import IndexHeader from "./../index/header";
import IndexSearch from "./../index/search";
import IndexFooter from "./../index/footer";
import Success from "./../buy/success";
export default {
  components: {
    IndexHeader: IndexHeader,
    IndexSearch: IndexSearch,
    IndexFooter: IndexFooter,
    Success: Success
  },
  created() {
    window.scrollTo(0, 0);
  },
  computed: {
    order_sumprice() {
      var num = this.order_data[0].product_num;
      var price = this.order_data[0].product_price;
      var total_price = num * price;
      this.order_data[0].order_price = total_price;
    }
  },
  data() {
    return {
      active: 0,
      paystatus: "正在支付中",
      payment_icon: "el-icon-loading",
      dialogpayment: false,
      status: "black",
      order_data: [
        {
          order_num: "1610154541",
          order_createtime: "2019-12-06 12:00:59",
          product_name: "IPHONE X 64G 全网通4G智能手机",
          product_brand: "APPLE/苹果",
          product_num: 1,
          product_price: 6400,
          product_color: "红色",
          order_price: 6400,
          img_url: require("./../../../../public/img/product3.jpg")
        }
      ]
    };
  },
  methods: {
    confirmOrder() {
      this.active = 1;
      this.dialogpayment = true;
    },
    payment() {
      this.active = 2;
      this.dialogpayment = false;
      setTimeout(() => {
        this.paystatus = "支付完成";
        this.payment_icon = "el-icon-check";
        this.status = "#67c23a";
        this.active = 3;
      }, 3000);
    }
  }
};
</script>
