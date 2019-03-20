/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-03-20 14:57:40 
 * @Last Modified by:   Shaun.Zhang 
 * @Last Modified time: 2019-03-20 14:57:40 
 */

<template>
    <div>
        <el-row>
            <el-col :span="20" :offset="2">
                <el-row>
                    <el-form :inline="true" :model="searchorder">
                        <el-form-item label="订单号">
                            <el-input placeholder="订单号" v-model="searchorder.orderid"></el-input>
                        </el-form-item>

                        <el-form-item label="商品名称">
                            <el-input placeholder="商品名称" v-model="searchorder.product_name"></el-input>
                        </el-form-item>

                        <el-form-item label="创建时间">
                            <el-date-picker v-model="searchorder.created_time" type="datetimerange" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="['00:00:00']">
                            </el-date-picker>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="on_search">查询</el-button>
                            <el-button type="danger" @click="clear">清空条件</el-button>
                        </el-form-item>
                    </el-form>

                </el-row>

            </el-col>
            <el-col :span="12"></el-col>
        </el-row>

    </div>
</template>
<style>
</style>
<script>
export default {
  data() {
    return {
      searchorder: {
        orderid: "",
        product_name: "",
        created_time: ""
      }
    };
  },
  methods: {
    on_search() {
      console.log(
        this.searchorder.orderid + "  " + this.searchorder.product_name + " " + this.searchorder.created_time
      );
    },
    clear(){
        this.searchorder.orderid = null;
        this.searchorder.product_name = null;
        this.searchorder.created_time = null;
    }
  }
};
</script>
