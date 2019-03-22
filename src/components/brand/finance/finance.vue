/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-03-20 14:53:37 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-03-22 22:46:42
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
                            <el-col :span="22" :offset="1" class="card-item-name">销售额(元)</el-col>
                        </el-row>
                        <el-row class="card-item-value-body">
                            <el-col :span="22" :offset="1" class="card-item-value">{{sellTotal}}</el-col>
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
                    <el-tab-pane label="未对账订单" name="first">
                        <!-- 查找区 -->
                        <el-form ref="order" :inline="true" :model="order" label-width="80px" style="margin-top: 20px;text-align:center;">
                            <el-row>
                                <el-form-item label="订单号">
                                    <el-input v-model.number="order.id" placeholder="请输入订单号" @keydown.enter.native="searchOrder"></el-input>
                                </el-form-item>
                                <el-form-item label="商品名称">
                                    <el-input v-model="order.name" placeholder="请输入商品名称" @keydown.enter.native="searchOrder"></el-input>
                                </el-form-item>
                                <el-form-item label="创建时间">
                                    <el-date-picker v-model="order.create_time" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                                    </el-date-picker>
                                </el-form-item>
                                <el-button type="success" icon="el-icon-search" circle></el-button>
                            </el-row>
                        </el-form>
                        <unCheckedFinance ref="unchecked"></unCheckedFinance>

                    </el-tab-pane>
                    <el-tab-pane label="已对账订单" name="second">
                        <el-form ref="order" :inline="true" :model="order" label-width="80px" style="margin-top: 20px;text-align:center;">
                            <el-row>
                                <el-form-item label="订单号">
                                    <el-input v-model.number="order.id" placeholder="请输入订单号" @keydown.enter.native="searchOrder"></el-input>
                                </el-form-item>
                                <el-form-item label="商品名称">
                                    <el-input v-model="order.name" placeholder="请输入商品名称" @keydown.enter.native="searchOrder"></el-input>
                                </el-form-item>
                                <el-form-item label="创建时间">
                                    <el-date-picker v-model="order.create_time" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                                    </el-date-picker>
                                </el-form-item>
                                <el-button type="success" icon="el-icon-search" circle></el-button>
                            </el-row>
                        </el-form>
                        <checkedFinance ref="checked"></checkedFinance>

                    </el-tab-pane>

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
</style>
 <script>
import unCheckedFinance from "./../finance/unCheckedFinance";
import  checkedFinance  from "./../finance/checkedFinance";
import { apiGetfinance } from "./../../../assets/js/axios/api.js";
export default {
  components: {
    unCheckedFinance: unCheckedFinance,
    checkedFinance: checkedFinance
  },
  mounted() {
    apiGetfinance(this.Cookie.getCookie("id")).then(res => {
      console.log(res.data.data);
      this.balance = res.data.data.totalmoney;
      this.sellTotal = res.data.data.sellTotal;
      this.noArrival = res.data.data.waitDealing;
    });
  },
  data() {
    return {
      pageSize: 10,
      pageNum: 1,
      activeName: "first",
      balance: 0.0, //钱包余额
      noArrival: 0.0, //未到账金额
      sellTotal: 0.0, //销售额
      fllowStore: 0, //销售商数量
      orderlist:[{}],
    
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
      if(tab.index == 1){
          console.log(this.$refs.checked)
          console.log(this.$refs.checked.pageNum);
          this.$refs.unchecked.pageSize = 5;
          this.$refs.unchecked.pageNum = 1;

            this.$refs.checked.init();
} else if(tab.index == 0){
    this.$refs.checked.pageNum = 1;
    this.$refs.checked.pageSize = 5;
    this.$refs.unchecked.init();
}
    }
  }
};
</script>
 