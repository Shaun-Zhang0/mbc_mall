/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-01-25 16:39:53 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-02-12 18:26:20
 */

<template>
    <div id="container" style="width: 100%;height:100%;">
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right" style="line-height:50px;">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>订单管理</el-breadcrumb-item>
                <el-breadcrumb-item>用户订单列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="order_border" style="padding-left: 10px;padding-right:10px;">
            <el-row style="font-size: 28px;text-align: center;  margin-bottom: 70px;margin-top: 20px;margin-left: 20px;"></el-row>
            <!-- 查找区 -->
            <el-form ref="product" :model="product" label-width="80px">
                <el-row>
                    <el-col :span="4" :offset="5">
                        <el-form-item label="订单号">
                            <el-input v-model="product.name" placeholder="请输入订单号"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="销售商">
                            <el-input v-model.number="product.id" placeholder="请输入销售商名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="订单状态">
                            <el-select v-model="product.status" placeholder="请选择订单状态">
                                <el-option label="未付款" value="0"></el-option>
                                <el-option label="已付款" value="1"></el-option>
                                <el-option label="未发货" value="2"></el-option>
                                <el-option label="已发货" value="3"></el-option>
                                <el-option label="交易成功" value="4"></el-option>
                                <el-option label="交易关闭" value="5"></el-option>
                                <el-option label="交易失败" value="6"></el-option>

                            </el-select>
                        </el-form-item>
                    </el-col>

                </el-row>
                <el-row>
                    <el-col :span="12" :offset="5">
                        <el-form-item label="创建时间">
                            <el-date-picker v-model="product.create_time" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                            </el-date-picker>

                        </el-form-item>
                    </el-col>

                </el-row>
            </el-form>
            <!-- 按钮区 -->
            <el-row style="margin-bottom:20px;">
                <el-col>
                    <el-button type="success">批量发货</el-button>
                    <el-button type="danger">批量删除</el-button>
                    <el-button type="primary" icon="el-icon-search">搜索</el-button>
                </el-col>
            </el-row>
            <!-- 表格区 -->
            <el-row>
                <template>
                    <el-table :data="order_list" style="width: 100%" size="mini">
                        <el-table-column type="selection" width="35">
                        </el-table-column>

                        <el-table-column label="订单号" prop="id"></el-table-column>
                        <el-table-column label="用户账号" prop="order_user"></el-table-column>
                        <el-table-column label="销售商名称" prop="order_store"></el-table-column>
                        <el-table-column label="物流号" prop="logistics_num"></el-table-column>
                        <el-table-column label="订单状态" prop="order_status"></el-table-column>
                        <el-table-column label="订单金额(元)" prop="order_price"></el-table-column>
                        <el-table-column label="完成时间" width="150" prop="finish_time"></el-table-column>
                        <el-table-column label="创建时间" width="150" prop="create_time"></el-table-column>
                        <el-table-column label="备注" width="150" prop="order_details"></el-table-column>

                        <el-table-column label="操作" align="center">
                            <template slot-scope="scope">
                                <span class="iconfont icon-xiangqing" style="font-size:20px;cursor: pointer " title="订单详情" @click="show_order(scope.$index, scope.row)"></span>
                                <span class="iconfont icon-fahuo" style="font-size:20px;cursor: pointer " title="订单发货" @click="dialog_send_order = true"></span>
                                <span class="iconfont icon-iconfontedit" style="font-size:20px;cursor: pointer " title="编辑订单" @click="dialog_edit_order = true"></span>
                                <span class="iconfont icon-shanchu" style="font-size:20px;cursor: pointer " title="删除订单" @click="del_order(scope.$index, scope.row)"></span>

                            </template>
                        </el-table-column>

                    </el-table>
                </template>
            </el-row>
            <!-- 分页区 -->
            <el-row class="pagination">
                <el-pagination style="top:50%;text-align: center;" layout="prev, pager, next" :total="1000"></el-pagination>
            </el-row>
        </div>
        <!-- 订单详情 -->
        <el-dialog title="订单详情" :visible.sync="dialog_order_details" width="50%">

            <el-form label-width="100px" :model="order_info">

                <el-col :span="24" style="padding-bottom: 30px;">
                    <el-steps :active="order_info.order_active" finish-status="success" align-center>
                        <el-step title="订单创建" :description="order_info.order_create_time"></el-step>
                        <el-step title="订单支付" :description="order_info.order_payment_time"></el-step>
                        <el-step title="订单已发货" :description="order_info.order_send_time"></el-step>
                        <el-step title="订单已收货" :description="order_info.order_rec_time"></el-step>
                        <el-step title="订单完成" :description="order_info.order_finish_time"></el-step>
                    </el-steps>
                </el-col>

                <el-form-item label="订单号：">
                    <el-col :span="24">
                        {{order_info.order_id}}
                    </el-col>
                </el-form-item>

                <el-form-item label="商品信息：">
                    <el-col :span="24">
                        <span>{{order_info.product_name}}</span>
                        <span style="height: 40px;width: 40px;"> <img :src="order_info.product_imgurl" alt="" style="width: 100%;height: 100%"></span>
                        <br>
                        <span>{{order_info.product_details}}</span>
                        <span style="color: rgb(165, 165, 165);float: right">x{{order_info.product_num}}</span>
                    </el-col>
                </el-form-item>

                <el-form-item label="用户账号：">
                    <el-col :span="24">
                        <span>{{order_info.order_user}}</span>
                    </el-col>
                </el-form-item>

                <el-form-item label="订单金额：">
                    <el-col :span="24">
                        <span>{{order_info.product_price}}</span>
                        <span class="amounttips">商品单价</span>
                        <br>
                        <span>+ {{order_info.order_post_fee}}</span>
                        <span class="amounttips">运费</span>
                        <br>
                        <span>{{sum_orderpay}}</span>
                        <span class="amounttips">实付金额</span>

                    </el-col>
                </el-form-item>
                <el-form-item label="支付方式：">
                    <el-col :span="24">
                        <span>{{order_info.order_payment_type}}</span>
                    </el-col>
                </el-form-item>
                <el-form-item label="收件人信息：">
                    <el-col :span="24">

                        <span>{{order_info.order_rece_name}}</span>
                        <br>
                        <span>{{order_info.order_rece_phone}}</span>
                    </el-col>
                </el-form-item>
                <el-form-item label="收货地址：">
                    <el-col :span="24">
                        <span>{{order_info.order_rece_address}}</span>
                    </el-col>
                </el-form-item>
                <el-form-item label="订单备注：">
                    <el-col :span="24">
                        <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="order_info.order_details" readonly></el-input>
                    </el-col>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">

                <el-button @click="dialog_order_details = false">关闭</el-button>

            </span>
        </el-dialog>
        <!-- 订单发货 -->
        <el-dialog title="订单发货" :visible.sync="dialog_send_order">
            <el-form :model="send_order" label-width="100px">
                <el-form-item label="订单号">
                    {{order_info.order_id}}
                </el-form-item>
                <el-form-item label="收货地址">
                    {{order_info.order_rece_address}}
                </el-form-item>
                <el-form-item label="快递公司">
                    <el-select placeholder="请选择快递公司" v-model="send_order.express">
                        <el-option label="顺丰" value="shunfeng"></el-option>
                        <el-option label="中通" value="zhongtong"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialog_send_order = false">取 消</el-button>
                <el-button type="primary" @click="send_operation">发 货</el-button>
            </div>
        </el-dialog>
        <!-- 修改订单 -->
        <el-dialog title="修改订单" :visible.sync="dialog_edit_order" width="50%">

            <el-form label-width="100px" :model="edit_order">

                <el-form-item label="订单号：">
                    <el-col :span="24">
                        {{order_info.order_id}}
                    </el-col>
                </el-form-item>

                <el-form-item label="商品信息：">
                    <el-col :span="24">
                        <span>{{edit_order.product_name}}</span>
                        <br>

                        <el-select v-if="order_info.order_active == 2||order_info.order_active == 1" placeholder="请选择商品规格" v-model="edit_order.product_details">
                            <el-option label="红色，5.8英寸" value="shanghai"></el-option>
                            <el-option label="黑色，5.8英寸" value="beijing"></el-option>
                        </el-select>
                        <span v-else>{{edit_order.product_details}}</span>
                        <el-input-number style="float: right" v-if="order_info.order_active == 1" v-model="edit_order.product_num" :min="1" :max="10"></el-input-number>
                        <span v-else style="color: rgb(165, 165, 165);float: right">x{{edit_order.product_num}}</span>
                    </el-col>
                </el-form-item>

                <el-form-item label="用户账号：">
                    <el-col :span="24">
                        <span>炒鸡帅哥</span>
                    </el-col>
                </el-form-item>

                <el-form-item label="订单金额：">
                    <el-col :span="24">
                        <span>{{order_info.product_price}}</span>
                        <span style="padding-left:20px;color: rgb(165, 165, 165);">x{{edit_order.product_num}}</span>
                        <span style="color: rgb(165, 165, 165);float: right">商品单价</span>
                        <br>
                        <span>+ {{order_info.order_post_fee}}</span>
                        <span style="color: rgb(165, 165, 165);float: right">运费</span>
                        <br>
                        <span>{{edit_sum_pay}}</span>
                        <span style="color: rgb(165, 165, 165);float: right">实付金额</span>

                    </el-col>
                </el-form-item>
                <el-form-item label="支付方式：">
                    <el-col :span="24">
                        <span>{{edit_order.order_payment_type}}</span>
                    </el-col>
                </el-form-item>
                <el-form-item label="收件人：">
                    <el-col :span="6">

                        <el-input v-model="edit_order.rece_name"></el-input>

                    </el-col>
                </el-form-item>
                <el-form-item label="联系方式：">
                    <el-col :span="8">

                        <el-input v-model="edit_order.rece_phone"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="收货地址：">
                    <el-col :span="24">
                        <el-input v-model="edit_order.rece_address"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="订单备注：">
                    <el-col :span="24">
                        <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="edit_order.order_details" readonly></el-input>
                    </el-col>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">

                <el-button @click="dialog_edit_order = false" type="primary">修改订单</el-button>
                <el-button @click="dialog_edit_order = false">关闭</el-button>

            </span>
        </el-dialog>
    </div>
</template>

<style scoped>
.order_border {
  border: 2px solid #ccc;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
  -moz-box-shadow: 5px 5px 5px #888888;
  box-shadow: 10px 10px 5px #888888;
}

.amounttips{
  color: rgb(165, 165, 165);
  float: right;
}
</style>

<script>
export default {
  data() {
    return {
      dialog_order_details: false, //订单详情对话框
      dialog_send_order: false, //订单发货对话框
      dialog_edit_order: false,

      //编辑订单
      edit_order: {
        product_name: "IphoneX", //编辑后的商品名称
        product_details: "红色，5.8英寸", //编辑后的商品细节，例如颜色，尺寸
        order_payment_type: "在线支付", //编辑后的支付方式
        rece_name: "郑扬志", //编辑后的收件人姓名
        rece_phone: "15915945621", //编辑后的收件人的联系方式
        rece_address: "广东省广州市虐塘路 09号 谎小区 70号楼 7单元 616室", //编辑后的收货地址
        order_details: "麻烦尽快发货，因为最近比较忙", //编辑后的订单备注
        product_num: 1,
        order_store: "我的销售商",
        sum_product: null
      },
      //发货处理
      send_order: {
        express: "" //快递公司
      },
      //查询订单信息
      product: {
        name: "", //要查询的商品名称
        id: "", //要查询商品的id
        status: "", //要查询商品的状态
        create_time: "" //要查询商品的发布时间区间开始
      },
      //订单详情数据
      order_info: {
        /**订单步骤条*/
        order_active: 1, //订单目前状态
        /**订单基本信息 */
        order_id: "11231231231", //订单号
        order_payment_type: "在线支付", //订单支付方式
        /**订货单时间*/
        order_create_time: "2019-03-10 12:30:55", //订单创建时间
        order_send_time: "2019-03-10 12:30:55", //订单发货时间
        order_payment_time: "2019-03-10 12:30:55", //订单支付时间
        order_rec_time: "2019-03-10 12:30:55", //订货收货时间
        order_finish_time: "", //订单完成时间
        /**相关商品的新消息*/
        product_imgurl: "img/1.jpg", //商品图片
        product_name: "IphoneX", //商品名称
        product_details: "红色，5.8英寸", //商品规格
        product_num: 1, //商品数量
        /**订单金额信息*/
        order_post_fee: 10, //订单运费
        product_price: 9450, //商品价格
        order_payment: null, //订单实付金额
        /**相关用户信息*/
        order_user: "炒鸡帅哥", //用户账号
        /**收件人信息*/
        order_rece_name: "郑扬志", //收件人姓名
        order_rece_phone: "15915915987", //收件人联系方式
        order_rece_address: "广东省广州市虐塘路 09号 谎小区 70号楼 7单元 616室", //收件地址
        order_details: "麻烦尽快发货，因为最近比较忙", //订单备注
        /**物流信息 */
        logistics_num: 123454
      },
      //订单列表展示
      order_list: [
        {
          /**订单相关信息*/
          id: "11231231231", //订单号
          create_time: "2019-03-10 12:30:55", //订单创建时间
          finish_time: "2019-03-10 12:30:55",
          order_status: "待支付", //订单状态
          order_price: "9999", //订单金额
          order_details: "麻烦尽快发货，因为最近比较忙",
          /**相关商品信息*/
          product_name: "iphoneX",

          /**用户信息*/
          order_user: "及机会", //下单用户
          order_store: "我的销售商",
          logistics_num: 11523484878
        }
      ]
    };
  },
  computed: {
    //   订单详情中的总金额计算
    sum_orderpay: function() {
      return this.order_info.order_post_fee + this.order_info.product_price;
    },
    // 编辑订单中的总金额计算
    edit_sum_pay: function() {
      return (
        this.edit_order.product_num * this.order_info.product_price +
        this.order_info.order_post_fee
      );
    }
  },
  methods: {
    /**打开订单详情的对话框*/
    show_order(index, row) {
      console.log(row.id);
      this.dialog_order_details = true;
      this.order_info.order_id = row.id;

      //判断订单状态
      if (this.order_info.order_finish_time != "") {
        this.order_info.order_active = 5;
      } else if (
        this.order_info.order_finish_time == "" &&
        this.order_info.order_rec_time != ""
      ) {
        this.order_info.order_active = 4;
      } else if (
        this.order_info.order_finish_time == "" &&
        this.order_info.order_rec_time == "" &&
        this.order_info.order_send_time != ""
      ) {
        this.order_info.order_active = 3;
      } else if (
        this.order_info.order_finish_time == "" &&
        this.order_info.order_rec_time == "" &&
        this.order_info.order_send_time == "" &&
        this.order_info.order_payment_time != ""
      ) {
        this.order_info.order_active = 2;
      } else if (
        this.order_info.order_finish_time == "" &&
        this.order_info.order_rec_time == "" &&
        this.order_info.order_send_time == "" &&
        this.order_info.order_payment_time == "" &&
        this.order_info.order_create_time != ""
      ) {
        this.order_info.order_active = 1;
      }
    },
    /**删除订单操作*/
    del_order(index, row) {
      console.log(row.id);
      this.$confirm("是否对此订单进行删除操作？执行后无法恢复", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "订单号：" + row.id + " 删除成功!"
          });
          this.dialog_send_order = false;
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除操作"
          });
        });
    },
    /**打开订单发货的对话框，判断是否对订单进行发货操作*/
    send_operation() {
      this.dialog_send_order = true;
      this.$confirm("是否对此订单进行发货操作？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "发货成功！该订单的物流号为：12347975 "
          });
          this.dialog_send_order = false;
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消发货"
          });
        });
    }
  }
};
</script>
