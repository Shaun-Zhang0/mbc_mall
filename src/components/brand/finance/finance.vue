/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-03-20 14:53:37 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-03-20 20:23:35
 */

<template>
    <div style="width: 100%;">
        <el-row class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right" style="line-height:50px;">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>账单管理</el-breadcrumb-item>
                <el-breadcrumb-item>账单管理</el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>

        <el-row>
            <el-col class="card-all" :offset="1" :span="22">
                <el-row class="card-title">
                    <el-col :span="12" style="padding-left:20px;">财务信息</el-col>
                </el-row>

                <el-row class="card-body">
                    <el-col class="card-item" :offset="1" :span="4">
                        <el-row class="card-item-name-body">
                            <el-col :span="22" :offset="1" class="card-item-name">钱包余额(元)</el-col>
                        </el-row>
                        <el-row class="card-item-value-body">
                            <el-col :span="22" :offset="1" class="card-item-value">{{balance}}</el-col>
                        </el-row>
                    </el-col>
                    <el-col class="card-item" :offset="2" :span="4">
                        <el-row class="card-item-name-body">
                            <el-col :span="22" :offset="1" class="card-item-name">未到账金额(元)</el-col>
                        </el-row>
                        <el-row class="card-item-value-body">
                            <el-col :span="22" :offset="1" class="card-item-value">{{noArrival}}</el-col>
                        </el-row>
                    </el-col>
                    <el-col class="card-item" :offset="2" :span="4">
                        <el-row class="card-item-name-body">
                            <el-col :span="22" :offset="1" class="card-item-name">已提现金额(元)</el-col>
                        </el-row>
                        <el-row class="card-item-value-body">
                            <el-col :span="22" :offset="1" class="card-item-value">{{withdrawMoney}}</el-col>
                        </el-row>
                    </el-col>
                    <el-col class="card-item" :offset="2" :span="4">
                        <el-row class="card-item-name-body">
                            <el-col :span="22" :offset="1" class="card-item-name">销售商数量</el-col>
                        </el-row>
                        <el-row class="card-item-value-body">
                            <el-col :span="22" :offset="1" class="card-item-value">{{fllowStore}}</el-col>
                        </el-row>
                    </el-col>
                </el-row>

            </el-col>
        </el-row>

        <el-row style="margin-top: 50px;">
            <el-col class="settleOrder" :span="22" :offset="1" style="">
                <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="未对账订单(10)" name="first">
                        <!-- 查找区 -->
                        <el-form ref="order" :model="order" label-width="80px" style="margin-top: 20px;">
                            <el-row>
                                <el-col :span="5" :offset="5">
                                    <el-form-item label="订单号">
                                        <el-input v-model.number="order.id" placeholder="请输入订单号" @keydown.enter.native="searchOrder"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="5">
                                    <el-form-item label="商品名称">
                                        <el-input v-model="order.name" placeholder="请输入商品名称" @keydown.enter.native="searchOrder"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="5">
                                    <el-form-item label="订单状态">
                                        <el-select v-model="order.status" placeholder="请选择订单状态">

                                            <el-option label="未发货" value="3"></el-option>
                                            <el-option label="已发货" value="4"></el-option>
                                            <el-option label="交易成功" value="8"></el-option>
                                            <el-option label="交易关闭" value="7"></el-option>
                                            <el-option label="交易失败" value="5"></el-option>

                                        </el-select>
                                    </el-form-item>
                                </el-col>

                                <el-col :span="19" :offset="5">
                                    <el-form-item label="创建时间">
                                        <el-date-picker v-model="order.create_time" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                                        </el-date-picker>

                                        <span style="padding-left:20px;">
                                            <el-button type="success" icon="el-icon-search" circle></el-button>
                                        </span>

                                    </el-form-item>
                                </el-col>

                            </el-row>

                        </el-form>
                        <el-row class="eachorder" v-for="orderlist in orderlist">
                            <el-row>
                                <el-row style="font-size:12px;padding: 10px;margin: 0px 10px 0px 10px;text-align:left;color:rgb(131, 131, 131);border-bottom: 1px solid #ccc">

                                    <el-row>
                                        <el-col :span="24">
                                            <span class="order_tip" style="color:#F86D27">订单号：{{orderlist.orderid}}</span>
                                            &nbsp;
                                            <span class="order_tip">订单来源：销售商</span>
                                        </el-col>
                                    </el-row>

                                    <el-row>

                                        <span class="order_tip">创建时间：{{orderlist.createdtime}}</span>
                                        &nbsp;
                                        <span class="order_tip">交易完成时间：{{orderlist.endtime}}</span>
                                    </el-row>

                                </el-row>
                                <el-row style="margin: 0px 10px 0px 10px;">
                                    <el-col :span="24" style="height:30px;border-bottom:1px solid #ccc;line-height:30px;">
                                        <el-col :span="7" style="color:#838383;">商品信息</el-col>
                                        <el-col :span="2" style="color:#838383;">&nbsp;</el-col>
                                        <el-col :span="3" style="color:#838383">商品单价(元)</el-col>
                                        <el-col :span="3" style="color:#838383">商品数量</el-col>
                                        <el-col :span="3" style="color:#838383">订单总额(元)</el-col>
                                        <el-col :span="3" style="color:#838383">对账金额(元)</el-col>
                                        <el-col :span="3" style="color:#838383; ">

                                            <span class="checkorder" style="margin-left:10px;cursor:pointer;"></span>

                                        </el-col>
                                    </el-col>
                                </el-row>

                                <el-row style="line-height:80px;padding:10px;font-size:12px;">
                                    <el-col :span="3">
                                        <span>
                                            <img :src="orderlist.product.img_url" class="img">
                                        </span>
                                    </el-col>
                                    <el-col :span="6" style="text-align:left;line-height:14px;">
                                        <span>{{orderlist.product.product_name}}</span>
                                    </el-col>
                                    <!-- <el-col :span="2">&nbsp;</el-col> -->
                                    <el-col :span="3">
                                        <span> {{orderlist.product.product_price}}</span>
                                    </el-col>
                                    <el-col :span="3">
                                        <span>{{orderlist.product.product_num}}</span>
                                    </el-col>
                                    <el-col :span="3">
                                        <span>{{orderlist.order_price}}</span>
                                    </el-col>
                                    <el-col :span="3">
                                        <span>15</span>
                                    </el-col>
                                    <el-col :span="3">
                                        <span>
                                            <el-button size="mini">对账反馈</el-button>
                                        </span>
                                    </el-col>

                                </el-row>

                            </el-row>
                        </el-row>
                        <el-row style="text-align:center;margin-bottom:20px;">

                            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pageNum" :page-sizes="[5,10,20]" layout="total, sizes, prev, pager, next" :total="100">
                            </el-pagination>
                            </el-pagination>

                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="已对账订单(12)" name="second">2</el-tab-pane>

                </el-tabs>
            </el-col>
        </el-row>

    </div>

</template>
<style scoped>
.card-all {
  height: 160px;
  margin-top: 20px;
  border: 1px solid #eee;
  -moz-box-shadow: 3px 3px 3px #888888;
  box-shadow: 3px 3px 3px #888888;
}
.card-body {
  position: flex;
  align-items: center;
}
.card-item {
  height: 100px;
  margin-top: 10px;
  background-color: #f8f8f8;
}
.card-item-name {
  color: #999;
}
.card-item-value {
  color: #008080;
}
.card-title {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #f6f6f6;
  font-size: 14px;
}
.card-item-name-body {
  font-size: 13px;
  height: 40px;
  line-height: 40px;
}
.card-item-value-body {
  font-size: 30px;
  height: 60px;
  line-height: 50px;
}
.settleOrder {
  -moz-box-shadow: 3px 3px 3px #888888;
  box-shadow: 3px 3px 3px #888888;
}
.eachorder {
  height: 100%;
  margin-bottom: 10px;
  /* line-height: 120px; */
  border: 1px solid #ccc;
  /* border-radius: 5px; */
  text-align: center;
  font-size: 14px;
}
.img {
  max-width: 80px;
  max-height: 80px;
  vertical-align: middle;
}
</style>
 <script>
export default {
  data() {
    return {
      pageSize: 10,
      pageNum: 1,
      activeName: "first",
      balance: 15000, //钱包余额
      noArrival: 4000, //未到账金额
      withdrawMoney: 2000, //已提现金额
      fllowStore: 20, //销售商数量
      orderlist: [
        {
          orderid: 164451201,
          product: {
            img_url: require("./../../../../public/img/product3.jpg"),
            product_name: "IPHONE X 64G 全网111111通4G智能手机",
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
      ],
      order: {
        name: "", //要查询的商品名称
        id: "", //要查询商品的id
        status: "", //要查询商品的状态
        create_time: "", //要查询商品的创建时间区间开始
        startTime: "", //创建开始时间
        endTime: "" //创建结束时间
      }
    };
  },
  methods: {
    /**切换对账和未对账的界面 */
    handleClick(tab, event) {
      //   console.log(tab, event);
      console.log(tab.index);
    },
    /**更改显示的数量 */
    handleSizeChange(val) {},
    /**更改页数 */
    handleCurrentChange(val) {},
    searchOrder() {}
  }
};
</script>
 