/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-03-22 16:37:56 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-03-22 23:12:44
 */

<template>
  <el-row>
    <el-row v-if="IsNull == false" class="eachorder" v-for="orderlist in checkedOrderlist">
      <el-row>
        <el-row style="font-size:12px;padding: 10px;margin: 0px 10px 0px 10px;text-align:left;color:rgb(131, 131, 131);border-bottom: 1px solid #ccc">
          <el-row>
            <el-col :span="24">
              <span class="order_tip" style="color:#F86D27">订单号：{{orderlist.orderNo}}</span>
              &nbsp;
              <span class="order_tip">账单状态：{{orderlist.stateString}}</span>
              &nbsp;
              <span class="order_tip">订单来源：销售商</span>
            </el-col>
          </el-row>
          <el-row>
            <span class="order_tip">创建时间：{{orderlist.createTime}}</span>
            &nbsp;
            <span class="order_tip">交易完成时间：{{orderlist.endtime}}交易完成时间</span>
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
            <span>{{orderlist.product_name}} 商品名称
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
        <span class="iconfont icon-meiyoushuju" style="font-size:50px;"></span>暂时没有已经对账的订单信息哦~</el-col>
    </el-row>
    <el-row v-if="IsNull == false" style="text-align:center;margin-bottom:20px;">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pageNum" :page-sizes="[5,10,20]" layout="total, sizes, prev, pager, next" :total="100">
      </el-pagination>
      </el-pagination>

    </el-row>
  </el-row>

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
import { apiGetCheckedOrder } from "./../../../assets/js/axios/api.js";
export default {
  mounted() {},
  data() {
    return {
      pageNum: 1, //页数
      pageSize: 10, //条数
      IsNull: true,
      checkedOrderlist: [
        //展示数据
        {
          product_name: "IPHONE X 64G 全网111111通4G智能手机",
          endtime: "2019-12-06 13:20:44"
        }
      ]
    };
  },
  methods: {
    init() {
      apiGetCheckedOrder({
        page: this.pageNum,
        size: this.pageSize
      }).then(res => {
        console.log(res.data.data);
        if (res.data.data.length != 0) {
          this.IsNull = false;
          this.checkedOrderlist = res.data.data;
          for (let i in this.checkedOrderlist) {
            let time = this.checkedOrderlist[i].createTime;
            let num = this.checkedOrderlist[i].num;
            let price = this.checkedOrderlist[i].storePrice;
            let orderAmount = num * price;
            this.checkedOrderlist[i].orderAmount = orderAmount;
            let times = new Date(+new Date(time) + 8 * 3600 * 1000)
              .toISOString()
              .replace(/T/g, " ")
              .replace(/\.[\d]{3}Z/, "");
            this.checkedOrderlist[i].createTime = times;
          }
        } else {
          this.IsNull = true;
        }
      });
    },
    /**更改显示的数量 */
    handleSizeChange(val) {
      apiGetCheckedOrder({
        page: this.pageNum,
        size: this.pageSize
      }).then(res => {
        console.log(res.data.data);
        this.checkedOrderlist = res.data.data;
        for (let i in this.checkedOrderlist) {
          let time = this.checkedOrderlist[i].createTime;
          let num = this.checkedOrderlist[i].num;
          let price = this.checkedOrderlist[i].storePrice;
          let orderAmount = num * price;
          this.checkedOrderlist[i].orderAmount = orderAmount;
          let times = new Date(+new Date(time) + 8 * 3600 * 1000)
            .toISOString()
            .replace(/T/g, " ")
            .replace(/\.[\d]{3}Z/, "");
          this.checkedOrderlist[i].createTime = times;
        }
      });
    },
    /**更改页数 */
    handleCurrentChange(val) {
      console.log(val);
      this.pageNum = val;
      apiGetCheckedOrder({
        page: this.pageNum,
        size: this.pageSize
      }).then(res => {
        console.log(res.data.data);
        this.checkedOrderlist = res.data.data;
        for (let i in this.checkedOrderlist) {
          let time = this.checkedOrderlist[i].createTime;
          let num = this.checkedOrderlist[i].num;
          let price = this.checkedOrderlist[i].storePrice;
          let orderAmount = num * price;
          this.checkedOrderlist[i].orderAmount = orderAmount;
          let times = new Date(+new Date(time) + 8 * 3600 * 1000)
            .toISOString()
            .replace(/T/g, " ")
            .replace(/\.[\d]{3}Z/, "");
          this.checkedOrderlist[i].createTime = times;
        }
      });
    },
    searchOrder() {}
  }
};
</script>
