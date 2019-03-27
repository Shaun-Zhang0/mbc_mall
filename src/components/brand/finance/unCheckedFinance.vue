/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-03-22 16:37:56 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-03-24 14:20:08
 */
<template>
  <div>
    <el-form ref="order" :inline="true" :model="order" label-width="80px" style="margin-top: 20px;text-align:center;">
      <el-row>
        <el-form-item label="订单号">
          <el-input v-model.number="order.orderNo" placeholder="请输入订单号" @keydown.enter.native="searchOrder"></el-input>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input v-model="order.productName" placeholder="请输入商品名称" @keydown.enter.native="searchOrder"></el-input>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-date-picker v-model="order.create_time" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-button @click="searchFinance" type="success" icon="el-icon-search" circle></el-button>
      </el-row>
    </el-form>
    <el-row v-loading="loading">
      <el-row v-if="IsNull == false" class="eachorder" v-for="orderlist in orderlist">
        <el-row>
          <el-row style="font-size:12px;padding: 10px;margin: 0px 10px 0px 10px;text-align:left;color:rgb(131, 131, 131);border-bottom: 1px solid #ccc">
            <el-row>
              <el-col :span="24">
                <span class="order_tip" style="color:#F86D27">订单号：{{orderlist.orderNo}}</span>
                &nbsp;
                <span class="order_tip">账单状态：{{orderlist.stateString}}</span>
                &nbsp;
                <span class="order_tip">订单来源：{{orderlist.storeName}}</span>
              </el-col>
            </el-row>
            <el-row>
              <span class="order_tip">创建时间：{{orderlist.createTime}}</span>
              &nbsp;
              <span class="order_tip">交易完成时间：{{orderlist.endTime}}</span>
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
                <img :src="orderlist.picPath" class="img">
              </span>
            </el-col>
            <el-col :span="6" style="text-align:left;line-height:14px;">
              <span>{{orderlist.name}}
              </span>
            </el-col>
            <el-col :span="3">
              <span> {{orderlist.storePrice}}</span>
            </el-col>
            <el-col :span="3">
              <span>{{orderlist.num}}</span>
            </el-col>
            <el-col :span="3">
              <span>{{orderlist.orderAmount}}</span>
            </el-col>
            <el-col :span="3">
              <span>{{orderlist.money}}</span>
            </el-col>
            <el-col :span="3">
              <span>
                <el-button size="mini">对账反馈</el-button>
              </span>
            </el-col>
          </el-row>
        </el-row>
      </el-row>
      <el-row v-if="IsNull == true" style="height: 100px;line-height: 100px;text-align:center;color:#777777">
        <el-col :span="24">
          <span class="iconfont icon-meiyoushuju" style="font-size:50px;"></span>暂时没有对应条件的订单信息哦~</el-col>
      </el-row>
      <el-row v-if="IsNull == false" style="text-align:center;margin-bottom:20px;">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pageNum" :page-sizes="[5,10,20]" layout="total, sizes, prev, pager, next" :total="totalSize">
        </el-pagination>
        </el-pagination>
      </el-row>
    </el-row>
  </div>
</template>
<style scoped>
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
import { timeFormat } from "./../../../assets/js/timeFormat.js";
import { apiGetUncheckedOrder } from "./../../../assets/js/axios/api.js";
import { apiSearchFinance } from "./../../../assets/js/axios/api.js";

export default {
  mounted() {
    this.init();
  },
  data() {
    return {
      pageNum: 1, //页数
      pageSize: 10, //条数
      loading: true,
      IsNull: true, //判断结果集是否为空，显示为空
      totalSize: 0,
      orderlist: [
        //展示数据
        {
          product_name: "IPHONE X 64G 全网111111通4G智能手机",
          endtime: "2019-12-06 13:20:44"
        }
      ],
      order: {
        productName: "", //要查询的商品名称
        orderNo: "", //要查询商品的id
        status: 0, //要查询账单的状态
        create_time: "", //要查询订单的创建时间区间开始
        startTime: "", //创建开始时间
        endTime: "" //创建结束时间
      }
    };
  },
  methods: {
    init() {
      apiGetUncheckedOrder(
        {
          page: this.pageNum,
          size: this.pageSize
        },
        {
          headers: { token: this.Cookie.getCookie("brandtoken") }
        }
      ).then(res => {
        this.loading = false;
        if (res.data.data.length != 0) {
          this.IsNull = false;
          this.orderlist = res.data.data;
          for (let i in this.orderlist) {
            let time = this.orderlist[i].createTime;
            let etime = this.orderlist[i].endTime;
            let num = this.orderlist[i].num;
            let price = this.orderlist[i].storePrice;
            let orderAmount = num * price;
            this.orderlist[i].orderAmount = orderAmount;
            let times = new Date(+new Date(time) + 8 * 3600 * 1000)
              .toISOString()
              .replace(/T/g, " ")
              .replace(/\.[\d]{3}Z/, "");
            let endTimes = new Date(+new Date(etime) + 8 * 3600 * 1000)
              .toISOString()
              .replace(/T/g, " ")
              .replace(/\.[\d]{3}Z/, "");
            this.orderlist[i].endTime = endTimes;
            this.orderlist[i].createTime = times;
          }
          console.log(this.orderlist);
          this.totalSize = res.data.data[0].TotalSize;
        } else {
          this.IsNull = true;
        }
      });
    },
    /**更改显示的数量 */
    handleSizeChange(val) {
      this.loading = true;
      this.pageSize = val;
      apiGetUncheckedOrder(
        {
          page: this.pageNum,
          size: this.pageSize
        },
        {
          headers: { token: this.Cookie.getCookie("brandtoken") }
        }
      ).then(res => {
        this.orderlist = res.data.data;
        this.loading = false;
        for (let i in this.orderlist) {
          let time = this.orderlist[i].createTime;
          let etime = this.orderlist[i].endTime;
          let num = this.orderlist[i].num;
          let price = this.orderlist[i].storePrice;
          let orderAmount = num * price;
          this.orderlist[i].orderAmount = orderAmount;
          let times = new Date(+new Date(time) + 8 * 3600 * 1000)
            .toISOString()
            .replace(/T/g, " ")
            .replace(/\.[\d]{3}Z/, "");
          let endTimes = new Date(+new Date(etime) + 8 * 3600 * 1000)
            .toISOString()
            .replace(/T/g, " ")
            .replace(/\.[\d]{3}Z/, "");
          this.orderlist[i].endTime = endTimes;
          this.orderlist[i].createTime = times;
        }
      });
    },
    /**更改页数 */
    handleCurrentChange(val) {
      this.loading = true;
      console.log(val);
      this.pageNum = val;
      apiGetUncheckedOrder(
        {
          page: this.pageNum,
          size: this.pageSize
        },
        {
          headers: { token: this.Cookie.getCookie("brandtoken") }
        }
      ).then(res => {
        this.loading = false;
        this.orderlist = res.data.data;
        for (let i in this.orderlist) {
          let time = this.orderlist[i].createTime;
          let etime = this.orderlist[i].endTime;
          let num = this.orderlist[i].num;
          let price = this.orderlist[i].storePrice;
          let orderAmount = num * price;
          this.orderlist[i].orderAmount = orderAmount;
          let times = new Date(+new Date(time) + 8 * 3600 * 1000)
            .toISOString()
            .replace(/T/g, " ")
            .replace(/\.[\d]{3}Z/, "");
          let endTimes = new Date(+new Date(etime) + 8 * 3600 * 1000)
            .toISOString()
            .replace(/T/g, " ")
            .replace(/\.[\d]{3}Z/, "");
          this.orderlist[i].endTime = endTimes;
          this.orderlist[i].createTime = times;
        }
      });
    },
    /**搜索账单 */
    searchFinance() {
      if (this.order.create_time != "") {
        this.order.startTime = this.order.create_time[0];
        this.order.endTime = this.order.create_time[1];
      }
      apiSearchFinance(
        {
          state: this.order.status,
          orderNo: this.order.orderNo,
          productName: this.order.productName,
          createTime: this.order.startTime,
          endTime: this.order.endTime,
          page: 1,
          size: 10
        },
        {
          headers: { token: this.Cookie.getCookie("brandtoken") }
        }
      ).then(res => {
        console.log(res.data.data);
        if (res.data.data.length == 0) {
          //结果集为空
          this.IsNull = true;
          this.totalSize = 0;
        } else {
          //结果集不为空
          this.IsNull = false;
          this.orderlist = res.data.data;
          this.totalSize = res.data.data[0].totalSize;
          for (let i in this.orderlist) {
            let time = this.orderlist[i].createTime;
            let etime = this.orderlist[i].endTime;
            let num = this.orderlist[i].num;
            let price = this.orderlist[i].storePrice;
            let orderAmount = num * price;
            this.orderlist[i].orderAmount = orderAmount;
            let times = new Date(+new Date(time) + 8 * 3600 * 1000)
              .toISOString()
              .replace(/T/g, " ")
              .replace(/\.[\d]{3}Z/, "");
            let endTimes = new Date(+new Date(etime) + 8 * 3600 * 1000)
              .toISOString()
              .replace(/T/g, " ")
              .replace(/\.[\d]{3}Z/, "");
            this.orderlist[i].endTime = endTimes;
            this.orderlist[i].createTime = times;
          }
        }
      });
    }
  }
};
</script>
