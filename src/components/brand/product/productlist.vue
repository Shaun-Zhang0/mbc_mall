/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-01-25 16:41:08 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-02-28 17:58:43
 */

<template>
    <div id="abc" style="width: 100%;height:700px;">
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right" style="line-height:50px;">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>商品管理</el-breadcrumb-item>
                <el-breadcrumb-item>商品列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="order_border">
            <!-- 搜索区 -->
            <el-form ref="product" :model="product" label-width="80px" style="margin-top: 90px;">
                <el-row>
                    <el-col :span="5" :offset="5">
                        <el-form-item label="商品id">
                            <el-input v-model.number="product.id" placeholder="请输入商品id"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="商品名称">
                            <el-input v-model="product.name" placeholder="请输入商品名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="商品状态">
                            <el-select v-model="product.status" placeholder="请选择商品状态">
                                <el-option label="正常" value="1"></el-option>
                                <el-option label="下架" value="0"></el-option>

                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="12" :offset="5">
                        <el-form-item label="发布时间">
                            <el-date-picker v-model="product.create_time" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                            </el-date-picker>

                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <!-- 按钮区 -->
            <el-row style="margin-bottom:20px;">
                <el-col>
                    <el-button type="success">批量上架</el-button>
                    <el-button type="info">批量下架</el-button>
                    <el-button type="danger">批量删除</el-button>
                    <el-button type="primary" icon="el-icon-search">搜索</el-button>
                </el-col>
            </el-row>
            <!-- 数据区 -->
            <el-row>
                <template>
                    <el-table :data="tableData7" style="width: 100%" size="mini">
                        <el-table-column type="selection" width="40">
                        </el-table-column>
                        <el-table-column label="商品id" prop="id" width="80"></el-table-column>
                        <el-table-column label="商品名称" prop="name"></el-table-column>
                        <el-table-column prop="imgPath" label="商品图片" width="100">
                            <template slot-scope="scope">
                                <img :src="scope.row.imgPath" alt="" title="查看大图" style="width: 50px;height: 50px;cursor: pointer;" @click="show_img(scope.$index, scope.row)">
                            </template>
                        </el-table-column>
                        <el-table-column label="建议售价(元)" prop="suggested_price"></el-table-column>
                        <el-table-column label="商品价格(元)" prop="price"></el-table-column>
                        <el-table-column label="商品状态" prop="status"></el-table-column>
                        <el-table-column label="剩余库存" prop="quantity"  width="80"></el-table-column>
                        <el-table-column width="150" label="发布时间" prop="create_time"></el-table-column>
                        <el-table-column align="right">
                            <template slot-scope="scope">

                                <span :class="icon" style="font-size:20px;cursor: pointer " title="上架" @click="handeleShelves(scope.$index, scope.row)"></span>
                                <span class="iconfont icon-xiangqing" style="font-size:20px;cursor: pointer " title="商品详情" @click="handleshow(scope.$index, scope.row)"></span>
                                <span class="iconfont icon-iconfontedit" style="font-size:20px;cursor: pointer " title="编辑商品" @click="handleEdit(scope.$index,scope.row)"></span>
                                <span class="iconfont icon-shanchu" style="font-size:20px;cursor: pointer " title="删除商品" @click="handleDelete(scope.$index,scope.row)"></span>

                            </template>
                        </el-table-column>
                    </el-table>
                </template>
            </el-row>
            <el-row class="pagination">
                <el-pagination style="top:50%;text-align: center;" layout="prev, pager, next" :total="1000"></el-pagination>
            </el-row>
        </div>
        <!-- 编辑商品 -->
        <el-dialog title="编辑商品" :visible.sync="dialog_editproduct" width="40%">
            <el-form label-width="120px">
                <el-form-item label="商品id">
                    {{product_show.id}}
                </el-form-item>
                <el-form-item label="商品名称">
                    <el-col :span="12">
                        <el-input v-model="product_show.name"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="商品图片">
                    <img style="max-width:100%;max-height:100%;" :src="img" alt="">

                    <el-button size="mini" @click="update_productimg = !update_productimg">更换图片</el-button>

                    <el-upload v-if="update_productimg" class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或
                            <em>点击上传</em>
                        </div>
                        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过5MB</div>
                    </el-upload>
                </el-form-item>
                <el-form-item label="商品单价(元)">
                    <el-col :span="12">
                        <el-input v-model="product_show.price"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="建议零售价(元)">
                    <el-col :span="12">
                        <el-input v-model="product_show.suggested_price"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="库存数量">
                    <el-col :span="12">
                        <el-input v-model="product_show.quantity"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="限购数量">
                    <el-col :span="12">
                        <el-input v-model="product_show.limit_num"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="商品仓库">
                    <el-col :span="12">
                        <el-select placeholder="请选择仓库" v-model="product_show.warehousename">
                            <el-option label="本地仓库1" value="1"></el-option>
                            <el-option label="本地仓库2" value="2"></el-option>
                            <el-option label="本地仓库3" value="3"></el-option>

                        </el-select>
                    </el-col>
                </el-form-item>
                <el-form-item label="商品类别">
                    <el-col :span="12">
                        <el-select placeholder="请选择商品类别" v-model="product_show.cagegoryname">
                            <el-option label="手机" value="1"></el-option>
                            <el-option label="电脑" value="2"></el-option>
                        </el-select>
                    </el-col>
                </el-form-item>
                <el-form-item label="商品重量">
                    <el-col :span="12">
                        <el-input v-model="product_show.weight"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="商品尺寸">
                    <el-col :span="12">
                        <el-input v-model="product_show.size"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="商品颜色">
                    <el-col :span="24">
                        <el-checkbox-group v-model="product_show.color">
                            <el-checkbox label="红色" border></el-checkbox>
                            <el-checkbox label="黄色" border></el-checkbox>
                            <el-checkbox label="黑色" border></el-checkbox>
                            <el-checkbox label="蓝色" border></el-checkbox>
                        </el-checkbox-group>
                    </el-col>
                </el-form-item>
                <el-form-item label="商品状态">
                    <el-col :span="12">
                        <el-select placeholder="请选择商品状态" v-model="product_show.product_statusname">
                            <el-option label="上架" value="1"></el-option>
                            <el-option label="下架" value="0"></el-option>
                        </el-select>
                    </el-col>
                </el-form-item>
                <el-form-item label="商品描述">
                    <el-col :span="24">
                        <el-input type="textarea" :rows="4" v-model="product_show.details" placeholder="请输入内容" style="resize: none">
                        </el-input>
                    </el-col>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialog_editproduct = false">取 消</el-button>
                <el-button type="primary">确认修改</el-button>
            </div>
        </el-dialog>
        <!-- 商品详情 -->
        <el-dialog title="商品信息" :visible.sync="dialog_showproduct" width="40%">
            <el-form label-width="120px">
                <el-form-item label="商品id">
                    {{product_show.id}}
                </el-form-item>
                <el-form-item label="商品名称">
                    <el-col :span="12">
                        {{product_show.name}}
                    </el-col>
                </el-form-item>
                <el-form-item label="商品图片">
                    <img style="max-width:100%;max-height:100%;" :src="img" alt="">
                </el-form-item>
                <el-form-item label="商品单价(元)">
                    <el-col :span="12">
                        {{product_show.price}}
                    </el-col>
                </el-form-item>
                <el-form-item label="建议零售价(元)">
                    <el-col :span="12">
                        {{product_show.suggested_price}}
                    </el-col>
                </el-form-item>
                <el-form-item label="库存数量">
                    <el-col :span="12">
                        {{product_show.quantity}}
                    </el-col>
                </el-form-item>
                <el-form-item label="限购数量">
                    <el-col :span="12">
                        {{product_show.limit_num}}
                    </el-col>
                </el-form-item>
                <el-form-item label="商品仓库">
                    <el-col :span="12">
                        {{product_show.warehousename}}
                    </el-col>
                </el-form-item>
                <el-form-item label="商品类别">
                    <el-col :span="12">
                        {{product_show.cagegoryname}}
                    </el-col>
                </el-form-item>
                <el-form-item label="商品重量(kg)">
                    <el-col :span="12">
                        {{product_show.weight}}
                    </el-col>
                </el-form-item>
                <el-form-item label="商品尺寸(英寸)">
                    <el-col :span="12">
                        {{product_show.size}}
                    </el-col>
                </el-form-item>
                <el-form-item label="商品颜色">
                    <el-col :span="12">
                        {{product_show.color}}
                    </el-col>
                </el-form-item>
                <el-form-item label="商品状态">
                    <el-col :span="12">
                        {{product_show.product_statusname}}
                    </el-col>
                </el-form-item>
                <el-form-item label="商品描述">
                    <el-col :span="24">
                        {{product_show.details}}
                    </el-col>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialog_showproduct = false">关闭</el-button>
            </div>
        </el-dialog>
        <!-- 展示图片 -->
        <el-dialog :visible.sync="dialog_showimg" width="80%" style="">
            <img :src="show_imgurl" alt="" style="max-height:100%;max-width:100%">
        </el-dialog>

    </div>

</template>
<style scoped>
.order_border {
  border: 2px solid #ccc;
  padding-left: 10px;
  padding-right:10px;
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
      dialog_showimg: false, //是否显示展示图片的对话框
      dialog_showproduct: false, //是否显示商品详情的对话框
      dialog_editproduct: false, //是否显示编辑商品的对话框
      update_productimg: false, //是否显示图片上传 --v-if控制
      img: require("../../../../public/img/1.jpg"),
      show_imgurl: "",
      icon: "iconfont icon-shangjia",
      /**查询商品的信息 */
      product: {
        name: "", //要查询的商品名称
        id: "", //要查询商品的id
        status: "", //要查询商品的状态
        create_time: "" //要查询商品的发布时间
      },
      /**展示商品详情的信息 */
      product_show: {
        id: null,
        name: "", //商品名称
        quantity: "", //库存数量
        price: "", //商品单价
        suggested_price: null, //商品建议售价
        details: "", //商品描述
        warehouseid: null, //仓库id、
        color: [], //商品颜色
        cagegoryid: null, //商品类别编号
        cagegoryname: null, //商品类别名称
        size: null, //商品尺寸
        weight: null, //商品重量
        limit_num: null, //限购数量
        brandId: 1, //厂商ID
        product_status: null, //商品状态
        product_statusname: null, //商品状态
        warehousename: null //仓库名称
      },
      /**商品列表信息 */
      tableData7: [
        {
          id: "1",
          name: "iphoneX",
          price: 9800,
          suggested_price: 10800,
          status: "已上架",
          quantity: "100",
          create_time: "2019-03-10 12:30:55",
          imgPath:  require("../../../../public/img/1.jpg")
        },
        {
          id: "2",
          name: "iphoneX RS",
          price: 10800,
          suggested_price: 11800,
          status: "已下架",
          quantity: "100",
          create_time: "2019-03-10 12:30:55",
          imgPath:  require("../../../../public/img/2.jpg")
        }
      ]
    };
  },

  methods: {
    show_img(index, row) {
      this.dialog_showimg = true;
      this.show_imgurl = row.imgPath;
    },
    /**商品详情 */
    handleshow(index, row) {
      this.dialog_showproduct = true;
      this.product_show.id = row.id;
      this.product_show.name = row.name;
      this.product_show.price = row.price;
      this.product_show.suggested_price = 10080;
      this.product_show.quantity = 10;
      this.product_show.limit_num = 2;
      this.product_show.warehouseid = 2;
      this.product_show.warehousename =
        "本地仓库" + this.product_show.warehouseid;
      this.product_show.cagegoryid = 1;
      if (this.product_show.cagegoryid == 1) {
        this.product_show.cagegoryname = "手机";
      } else if (this.product_show.cagegoryid == 2) {
        this.product_show.cagegoryname = "电脑";
      }
      this.product_show.weight = 0.125;
      this.product_show.size = 5.8;
      this.product_show.color = "红色、黑色";
      this.product_show.product_status = 1;
      if (this.product_show.product_status == 1) {
        this.product_show.product_statusname = "上架";
      } else if (this.product_show.product_status == 0) {
        this.product_show.product_statusname = "下架";
      }
      this.product_show.details = "超级帅气迷人的手机";
    },
    /**修改商品 */
    handleEdit(index, row) {
      this.dialog_editproduct = true;
      this.product_show.id = row.id;
      this.product_show.name = row.name;
      this.product_show.price = row.price;
      this.product_show.suggested_price = 10080;
      this.product_show.quantity = 10;
      this.product_show.limit_num = 2;
      this.product_show.warehouseid = 2;
      this.product_show.warehousename =
        "本地仓库" + this.product_show.warehouseid;
      this.product_show.cagegoryid = 1;
      if (this.product_show.cagegoryid == 1) {
        this.product_show.cagegoryname = "手机";
      } else if (this.product_show.cagegoryid == 2) {
        this.product_show.cagegoryname = "电脑";
      }
      this.product_show.weight = 0.125;
      this.product_show.size = 5.8;
      this.product_show.color = ["红色", "黑色"];
      this.product_show.product_status = 1;
      if (this.product_show.product_status == 1) {
        this.product_show.product_statusname = "上架";
      } else if (this.product_show.product_status == 0) {
        this.product_show.product_statusname = "下架";
      }
      this.product_show.details = "超级帅气迷人的手机";
    },
    /**商品上架 */
    handeleShelves(index, row) {
      this.dialog_shelves = true;
      this.$confirm(
        "是否将商品id为： " +
          row.id +
          " 商品名称为：" +
          row.name +
          " 商品上架？",
        "上架",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      )
        .then(() => {
          this.$message({
            type: "success",
            message:
              "商品id为： " + row.id + " 商品名称为：" + row.name + " 上架成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消上架"
          });
        });
    },
    /**商品删除 */
    handleDelete: function(index, row) {
      //删除商品信息
      console.log("删除");
      this.$confirm(
        "是否将商品id为： " +
          row.id +
          " 商品名称为：" +
          row.name +
          " 商品删除？",
        "删除",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      )
        .then(() => {
          this.$message({
            type: "success",
            message:
              "商品id为： " + row.id + " 商品名称为：" + row.name + " 删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>
