/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-01-25 16:40:26 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-02-12 18:25:59
 */

<template>
    <div id="container">
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right" style="line-height:50px;">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>订单管理</el-breadcrumb-item>
                <el-breadcrumb-item>用户退单列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="order_border">
            <el-form ref="search_info" v-model="search_info" label-width="80px" style="margin-top:90px;">
                <el-row>
                    <el-col :span="5" :offset="5">
                        <el-form-item label="订单号">
                            <el-input v-model="search_info.order_id" placeholder="请输入订单号"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="5">

                        <el-form-item label="商品名称">
                            <el-input v-model="search_info.product_name" placeholder="请输入商品名称"></el-input>

                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="处理状态">
                            <el-select placeholder="请选择处理状态" v-model="search_info.order_status">
                                <el-option label="未审核" value="0"></el-option>
                                <el-option label="通过审核" value="1"></el-option>
                                <el-option label="未通过审核" value="2   "></el-option>

                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="5" :offset="5">
                        <el-form-item label="销售商">
                            <el-input v-model="search_info.product_store" placeholder="请输入销售商名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="9">
                        <el-form-item label="申请时间">
                            <el-date-picker v-model="search_info.create_time" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <el-row style="margin-bottom:20px;">
                <el-col>
                    <el-button type="success">批量退货</el-button>
                    <el-button type="danger">批量删除</el-button>
                    <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
                </el-col>
            </el-row>
            <el-row>
                <template>
                    <el-table :data="order_list" style="width: 100%" size="mini">
                        <el-table-column type="selection" width="40"></el-table-column>
                        <el-table-column label="订单号" prop="id"></el-table-column>
                        <el-table-column label="用户账号" prop="order_user"></el-table-column>
                        <el-table-column label="销售商名称" prop="order_store"></el-table-column>
                        <el-table-column label="商品信息" width="180" prop="product_details"></el-table-column>
                        <template>
                            <el-button></el-button>
                        </template>
                        <el-table-column label="订单金额(元)" prop="order_price"></el-table-column>
                        <el-table-column label="审核状态" prop="apply_status"></el-table-column>
                        <el-table-column label="申请时间" width="150" prop="apply_time"></el-table-column>
                        <el-table-column label="申请原因" prop="apply_reason"></el-table-column>

                        <el-table-column align="right">
                            <template slot-scope="scope">
                                <span class="iconfont icon-tuihuodan" style="font-size:20px;cursor: pointer " title="退货审核"></span>
                                <span class="iconfont icon-xiangqing" style="font-size:20px;cursor: pointer " title="订单详情"></span>
                                <span class="iconfont icon-shanchu" style="font-size:20px;cursor: pointer " title="删除申请"></span>

                            </template>
                        </el-table-column>

                    </el-table>
                </template>
            </el-row>
            <el-row class="pagination">
                <el-pagination style="top:50%;text-align: center;" layout="prev, pager, next" :total="1000"></el-pagination>
            </el-row>
        </div>
    </div>
</template>
<style scoped>
#container {
  width: 100%;
  height: 100%;
}
.order_border {
  padding-left: 10px;
  padding-right: 10px;
  border: 2px solid #ccc;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
  -moz-box-shadow: 5px 5px 5px #888888;
  box-shadow: 10px 10px 5px #888888;
}

</style>

<script>
export default {
  data() {
    return {
      /**搜索退单的信息 */
      search_info: {
        order_id: "", //订单号
        product_name: "", //商品名称
        product_store: "", //销售商名称
        order_status: "", //是否处理退货
        create_time: "" //创建时间区间
      },
      /**展示订单列表的数据 */
      order_list: [
        {
          /**订单相关信息*/
          id: "11231231231", //订单号
          create_time: "2019-03-10 12:30:55", //订单创建时间
          apply_time: "2019-03-13 11:20:55", //订单创建时间
          order_price: "9999", //订单金额
          apply_reason: "货不对板！", //申请退货原因
          apply_status: "已审核",
          /**相关商品信息*/
          product_quantity: "1", //商品数量
          product_details: "iphoneX ,红色，5.8英寸 x1", // 商品信息
          /**用户信息*/
          order_user: "及机会", //下单用户
          order_store: "我的销售商" //销售商的名称
        }
      ]
    };
  },
  methods: {
    search: function() {
      console.log(this.search_info);
    }
  }
};
</script>
