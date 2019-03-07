/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-01-25 16:41:08 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-03-07 17:50:02
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
              <el-input v-model.number="product.id" placeholder="请输入商品id" @keydown.enter.native="searchProduct"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="商品名称">
              <el-input v-model="product.name" placeholder="请输入商品名称" @keydown.enter.native="searchProduct"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="商品状态">
              <el-select v-model="product.status" placeholder="请选择商品状态">
                <el-option label="正常" value="0"></el-option>
                <el-option label="下架" value="1"></el-option>

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
          <el-button type="primary" icon="el-icon-search" @click="searchProduct">搜索</el-button>
        </el-col>
      </el-row>
      <!-- 数据区 -->
      <el-row>
        <template>
          <el-table :data="productlist" style="width: 100%" size="mini">
            <el-table-column type="selection" width="50">
            </el-table-column>
            <el-table-column label="商品id" prop="id" width="80"></el-table-column>
            <el-table-column label="商品名称" prop="name"></el-table-column>
            <el-table-column prop="imgPath" label="商品图片" width="100">
              <template slot-scope="scope">
                <img :src="scope.row.imgPath" alt="" title="查看大图" style="width: 50px;height: 50px;cursor: pointer;" @click="show_img(scope.$index, scope.row)">
              </template>
            </el-table-column>
            <el-table-column label="建议售价(元)" prop="recommendPrice"></el-table-column>
            <el-table-column label="商品价格(元)" prop="price"></el-table-column>
            <el-table-column label="商品状态" prop="status"></el-table-column>
            <el-table-column label="剩余库存" prop="quantity" width="80"></el-table-column>
            <el-table-column width="150" label="发布时间" prop="createTime"></el-table-column>
            <el-table-column align="right">
              <template slot-scope="scope">

                <span :class="icon" style="font-size:20px;cursor: pointer " title="上架" @click="handeleShelves(scope.$index, scope.row)"></span>
                <!-- <span class="iconfont icon-xiangqing" style="font-size:20px;cursor: pointer " title="商品详情" @click="handleshow(scope.$index, scope.row)"></span> -->
                <span class="iconfont icon-xiangqing" style="font-size:20px;cursor: pointer " title="商品详情" @click="handleEdit(scope.$index,scope.row)"></span>
                <span class="iconfont icon-shanchu" style="font-size:20px;cursor: pointer " title="删除商品" @click="handleDelete(scope.$index,scope.row)"></span>

              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-row>
      <el-row style="text-align:center;margin-bottom:20px;">

        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 15]" :page-size="50" layout="total, sizes, prev, pager, next" :total="400">
        </el-pagination>

      </el-row>
    </div>
    <!-- 编辑商品 -->
    <el-dialog title="商品详情" :visible.sync="dialog_editproduct" width="40%">
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
            <el-select placeholder="请选择仓库" v-model="product_show.warehouseid">
              <el-option label="本地仓库1" value="1"></el-option>
              <el-option label="本地仓库2" value="2"></el-option>
              <el-option label="本地仓库3" value="3"></el-option>

            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="商品类别">
          <el-col :span="12">
            <el-select placeholder="请选择商品类别" v-model="product_show.cagegoryid">
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
            <el-select placeholder="请选择商品状态" v-model="product_show.product_status">
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
        <el-button type="primary" @click="editProdcut">确认修改</el-button>
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
  padding-right: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
  -moz-box-shadow: 5px 5px 5px #888888;
  box-shadow: 10px 10px 5px #888888;
}
</style>

<script>
export default {
  mounted() {
    this.product_init();
    this.token = this.Cookie.getCookie("token");
  },
  data() {
    return {
      token:"",
      currentPage: 1,
      pageNum: 1,
      pageSize: 5,
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
        create_time: "",
        startTime: "", //要查询商品的发布时间 开始时间点
        endTime: "" //要查询商品的发布时间  结束时间点
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
        cagegoryid: "", //商品类别编号
        cagegoryname: "", //商品类别名称
        size: "", //商品尺寸
        sizeArray: [],
        weight: null, //商品重量
        limit_num: null, //限购数量
        brandId: 1, //厂商ID
        product_status: "", //商品状态
        product_statusname: "" //商品状态
      },
      /**商品列表信息 */
      productlist: [{}]
    };
  },

  methods: {
    product_init() {
      this.$axios({
        method: "post",
        url: "http://localhost:9000/api/product/product/findByCondition",
        data: {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        },
                headers: {
                  token: this.token
                }
      }).then(res => {
        //   console.log(res.data.data);
        this.productlist = res.data.data;
        for (var i in this.productlist) {
          var time = this.productlist[i].createTime;
          var times = new Date(+new Date(time) + 8 * 3600 * 1000)
            .toISOString()
            .replace(/T/g, " ")
            .replace(/\.[\d]{3}Z/, "");
          this.productlist[i].createTime = times;
        }
        //   console.log(this.productlist);
      });
    },

    show_img(index, row) {
      this.dialog_showimg = true;
      this.show_imgurl = row.imgPath;
    },
    /**查看商品详情 */
    handleEdit(index, row) {
      this.dialog_editproduct = true;
      this.product_show.id = row.id;
      this.$axios
        .get(
          "http://localhost:9000/api/product/product/findOne/" +
            this.product_show.id
        )
        .then(res => {
          // console.log(res);
          this.product_show.sizeArray = ["5", "10"]; //商品尺寸
          this.product_show.size = this.product_show.sizeArray.join("/");

          this.product_show.name = res.data.data.name;
          this.product_show.price = res.data.data.price;
          this.product_show.suggested_price = res.data.data.recommendPrice;
          this.product_show.quantity = 10; //库存数量
          this.product_show.limit_num = 2; //限购数量
          this.product_show.warehouseid = "3"; //仓库名称
          this.product_show.cagegoryid = "2"; //分类名称
          this.product_show.weight = 0.125; //商品质量

          this.product_show.color = ["红色", "黑色"]; //商品颜色
          this.product_show.product_status = "1"; //商品状态]

          this.product_show.details = res.data.data.description;
        })
        .catch(error => {
          console.log(error);
        });
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
    },
    /**每页展示的商品条数*/
    handleSizeChange(value) {
      // console.log(value);
      this.$axios({
        method: "post",
        url: "http://localhost:9000/api/product/product/findByCondition",
        data: {
          pageNum: this.pageNum,
          pageSize: value
        }
      }).then(res => {
        //   console.log(res.data.data);
        this.productlist = res.data.data;
        for (var i in this.productlist) {
          var time = this.productlist[i].createTime;

          var times = new Date(+new Date(time) + 8 * 3600 * 1000)
            .toISOString()
            .replace(/T/g, " ")
            .replace(/\.[\d]{3}Z/, "");

          this.productlist[i].createTime = times;
        }
      });
    },
    /**跳转第几页的商品列表*/
    handleCurrentChange(value) {
      this.$axios({
        method: "post",
        url: "http://localhost:9000/api/product/product/findByCondition",
        data: {
          pageNum: value,
          pageSize: this.pageSize
        }
      }).then(res => {
        //   console.log(res.data.data);
        this.productlist = res.data.data;
        for (var i in this.productlist) {
          var time = this.productlist[i].createTime;

          var times = new Date(+new Date(time) + 8 * 3600 * 1000)
            .toISOString()
            .replace(/T/g, " ")
            .replace(/\.[\d]{3}Z/, "");

          this.productlist[i].createTime = times;
        }
      });
    },
    /**搜索商品*/
    searchProduct() {
      //   console.log(this.product.create_time);
      this.product.startTime = this.product.create_time[0];
      this.product.endTime = this.product.create_time[1];
      //   console.log(this.product.startTime+ " " + this.product.endTime);
      if (this.product.id == "") {
        delete this.product.id;
      } else if (this.product.name == "") {
        delete this.product.name;
      } else if (this.product.status == "") {
        delete this.product.status;
      } else if (this.product.create_time == "") {
        delete this.product.startTime;
        delete this.product.endTime;
      }
      this.$axios({
        method: "post",
        url: "http://localhost:9000/api/product/product/findByCondition",
        data: {
          id: this.product.id,
          productName: this.product.name,
          productStatus: this.product.status,
          startTime: this.product.startTime,
          endTime: this.product.endTime,
          pageNum: 1,
          pageSize: 3
        }
        
      }).then(res => {
        //   console.log(res.data.data);
        this.productlist = res.data.data;
        for (var i in this.productlist) {
          var time = this.productlist[i].createTime;

          var times = new Date(+new Date(time) + 8 * 3600 * 1000)
            .toISOString()
            .replace(/T/g, " ")
            .replace(/\.[\d]{3}Z/, "");

          this.productlist[i].createTime = times;
        }
      });
    },
    editProdcut() {
      //   console.log(this.product_show);
      this.$confirm("是否确认更改商品信息 ", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.product_show.sizeArray = this.product_show.size.split("/");
          this.$axios({
            method: "post",
            url: "http://localhost:9000/api/product/product/update",
            data: {
              id: this.product_show.id,
              productColors: this.product_show.color,
              productName: this.product_show.name,
              productSku: this.product_show.quantity,
              productPrice: this.product_show.price,
              productRecommendprice: this.product_show.suggested_price,
              productDefails: this.product_show.details,
              warehouseId: this.product_show.warehouseid,
              limitNum: this.product_show.limit_num,
              scategoryId: this.product_show.cagegoryid,
              productQuality: this.product_show.weight,
              productSizes: this.product_show.sizeArray,
              productStatus: this.product_show.product_status
            }
          }).then(res => {
            this.$message({
              type: "success",
              message: "商品信息更改成功"
            });
            this.$options.methods.product_init.bind(this)();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消更改"
          });
        });
    }
  }
};
</script>
