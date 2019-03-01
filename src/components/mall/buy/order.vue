/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-02-28 17:55:20 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-02-28 18:00:06
 */

<template>
    <div>
        <index-header></index-header>
        <index-search></index-search>
        <div>
            <el-row class="orderall">
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
                <el-row v-show="active == 0" style="height:300px;margin-top:10px;">
                    <el-row style="font-size:2.5vh;height:50px;line-height:50px;margin: 0% 3% 0%;border-bottom:2px solid #ccc;">
                        <el-col :span="12" :offset="2">
                            <span>确认订单信息 </span>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-row class="order_info" style="height:150px;margin:0% 3% 0%;border-bottom: 2px solid #ccc;">
                            <el-table :data="order_data" style="width: 100%;">

                                <el-table-column prop="order_num" label="订单号" width="180">
                                </el-table-column>

                                <el-table-column prop="img_url" label="商品图片" width="180">
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
                <el-row v-show="active == 1" style="height:300px;margin-top:10px;">
                    <el-row style="font-size:2.5vh;height:50px;line-height:50px;margin: 0% 3% 0%;border-bottom:2px solid #ccc;">
                        <el-col :span="12" :offset="2">
                            <span>确认支付</span>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-row class="order_info" style="height:150px;margin:0% 3% 0%;border-bottom: 2px solid #ccc;">
                           
                        </el-row>
                    </el-row>

                </el-row>

                <el-row style="text-align:right;">
                    <el-col :span="20" :offset="2">
                        <el-button @click="active++">确认订单信息</el-button>
                    </el-col>

                </el-row>

            </el-row>
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
export default {
  components: {
    IndexHeader: IndexHeader,
    IndexSearch: IndexSearch,
    IndexFooter: IndexFooter
  },
  computed: {
    order_sumprice() {
      var num = this.order_data[0].product_num;
      var price = this.order_data[0].product_price;
      var total_price = num * price;
      this.order_data[0].order_price = total_price;
    }

    //   console.log(this.order_data[0].product_num);
  },
  data() {
    return {
      active: 0,

      order_data: [
        {
          order_num: "1610154541",
          product_name: "IPHONE X 64G 全网通4G智能手机",
          product_brand: "APPLE/苹果",
          product_num: 1,
          product_price: 6400,
          product_color: "红色",
          order_price: 6400,
          img_url: require("./../../../../public/img/product3.jpg"),
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  }
};
</script>
