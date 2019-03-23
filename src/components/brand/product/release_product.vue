/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-01-25 16:41:16 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-03-23 22:55:54
 */

<template>
    <div id="abc" style="width: 100%;height:100%;">
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right" style="line-height:50px;">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>商品管理</el-breadcrumb-item>
                <el-breadcrumb-item>商品发布</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="order_border">
            <el-row class="form_title">发布商品信息</el-row>
            <el-form :rules="rules" ref="form" :model="form" label-width="80px" class="demo-ruleForm">
                <el-row>
                    <el-col :span="6" :offset="5">
                        <el-form-item label="商品名称" prop="name">
                            <el-input v-model="form.name" autocomplete="off" placeholder="请输入商品名称">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="库存数量" prop="quantity">
                            <el-input type="number" v-model.number="form.quantity" autocomplete="off" placeholder="请输入库存数量">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="6" :offset="5">
                        <el-form-item label="建议售价" prop="suggested_price">
                            <el-input type="number" v-model.number="form.suggested_price" autocomplete="off" placeholder="请输入建议售价，单位：元"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="单价" prop="price">
                            <el-input type="number" v-model.number="form.price" autocomplete="off" placeholder="请输入单价，单位：元"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6" :offset="5" prop="cagegoryid">
                        <el-form-item label="商品类别" prop="cagegoryid">
                            <el-select v-model="form.cagegoryid" placeholder="请选择商品类别">
                                <el-option v-for="category in category"  :label="category.categoryName" :value="category.categoryId"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">

                        <el-form-item label="限购数量" prop="limit_num">
                            <el-input type="number" v-model.number="form.limit_num" autocomplete="off" placeholder="请输入限购数量">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="6" :offset="5">

                        <el-form-item label="商品重量" prop="weight">
                            <el-input type="number" v-model.number="form.weight" autocomplete="off" placeholder="请输入商品重量，单位：kg"></el-input>
                        </el-form-item>

                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="商品仓库" prop="warehouseid">
                            <el-select v-model="form.warehouseid" placeholder="请选择仓库">
                                <el-option label="本地仓库1" value="1"></el-option>
                                <el-option label="本地仓库2" value="2"></el-option>
                                <el-option label="本地仓库3" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6" :offset="5">
                        <el-form-item label="商品状态" prop="product_status">
                            <el-select v-model="form.product_status" placeholder="请选择商品状态">
                                <el-option label="上架" value="1"></el-option>
                                <el-option label="下架" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                </el-row>
                <el-row>
                    <el-col :span="12" :offset="5">
                        <el-form-item label="商品尺寸" prop="size">
                            <el-input v-model="form.size" autocomplete="off" placeholder="请输入商品尺寸,单位：英寸,用/分隔每个尺寸,例如 41/42"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="10" :offset="5">

                        <el-form-item label="商品颜色" prop="color">
                            <el-checkbox-group v-model="form.color">
                                <el-checkbox label="红色" border></el-checkbox>
                                <el-checkbox label="黄色" border></el-checkbox>
                                <el-checkbox label="黑色" border></el-checkbox>
                                <el-checkbox label="蓝色" border></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>

                    </el-col>

                </el-row>
                <el-row>
                    <el-col :span="12" :offset="5">
                        <el-form-item label="商品描述" prop="details">
                            <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="form.details" style="resize: none">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6" :offset="5">
                        <el-form-item label="商品图片">

                            <!-- <form name="imgForm" id="imgForm" enctype="multipart/form-data" action="图片上传接口" method='post'>
                                <input class="input-loc-img" name="imgLocal" id="imgLocal" type='file' accept="image/*" @change="selectImg" />
                            </form> -->
                            <input type="file" class="form-control" @change="onFileChange">
                        </el-form-item>
                    </el-col>

                </el-row>
                <el-row class="form-group" v-if="image">
                    <!-- <label>背景图预览</label> -->
                    <el-col :span="12" :offset="6"><img style="max-width: 50%;max-height: 50%;border: 1px solid #ccc" :src="image" alt=""></el-col>
                </el-row>
                <el-row style="margin-top: 10px;">
                    <el-col :span="6" :offset="9">
                        <el-form-item>
                            <el-button type="primary" @click="release('form')">发布</el-button>
                            <el-button>重置</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </div>
</template>
<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>

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
.form_title {
  font-size: 28px;
  text-align: center;
  margin-bottom: 100px;
  margin-top: 20px;
}
</style>

<script>
import { apiReleaseProduct } from "./../../../assets/js/axios/api.js";
import { apiGetCategory } from "./../../../assets/js/axios/api.js";
export default {
  mounted() {
    apiGetCategory().then(res => {
      console.log(res.data.data);
      this.category = res.data.data;
     
    });
  },
  data() {
    var checkSize = (rule, value, callback) => {
      //   const mailReg = /^[0-9/]+$/;
      //   const mailReg = /^[0-9]+\/?[0-9]+$/;
      const mailReg = /^([1-9]\d*\.?\d*\/?)+([1-9]\d*\.?\d*)+$/;
      if (!value) {
        return callback(new Error("商品尺寸不得为空"));
      }
      setTimeout(() => {
        if (mailReg.test(value)) {
          callback();
        } else {
          callback(new Error("请输入正确的商品尺寸格式,不得以 / 为开头或结尾"));
        }
      }, 100);
    };
    return {
      form: {
        name: "", //商品名称
        quantity: "", //库存数量
        price: "", //商品单价
        suggested_price: null, //商品建议售价
        details: "", //商品描述
        warehouseid: null, //仓库id、
        color: [], //商品颜色
        cagegoryid: null, //商品类别编号
        size: null, //商品尺寸
        weight: "", //商品重量
        limit_num: null, //限购数量
        brandId: 1, //厂商ID
        product_status: null, //商品状态
        arraySize: [],
        file: "",
        imgUrl: ""
      },
      image: "",
      rules: {
        name: [
          { required: true, message: "商品名称不得为空", trigger: "blur" } //密码的验证规则
        ],
        quantity: [
          { required: true, message: "库存数量不得为空", trigger: "blur" } //密码的验证规则
        ],
        price: [
          { required: true, message: "商品单价不得为空", trigger: "blur" } //密码的验证规则
        ],
        cagegoryid: [
          { required: true, message: "商品类别不得为空", trigger: "change" }
        ],
        limit_num: [
          { required: true, message: "限购数量不得为空", trigger: "blur" }
        ],
        weight: [
          { required: true, message: "商品重量不得为空", trigger: "blur" }
        ],
        warehouseid: [
          { required: true, message: "商品仓库不得为空", trigger: "blur" }
        ],
        size: [{ validator: checkSize, required: true, trigger: "blur" }],
        product_status: [
          { required: true, message: "商品状态不得为空", trigger: "change" }
        ],
        color: [
          { required: true, message: "商品颜色不得为空", trigger: "change" }
        ],
        details: [
          { required: true, message: "商品描述不得为空", trigger: "change" }
        ],
        suggested_price: [
          { required: true, message: "建议售价不得为空", trigger: "blur" } //密码的验证规则
        ]
      },
      category: []
    };
  },
  methods: {
    /**上传图片 */
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      this.form.file = files[0];
      let formData = new FormData(); //通过formdata上传
      this.createImage(this.form.file);
      formData.append("file", this.form.file);
      var that = this;
      this.axios({
        method: "POST",
        url: "api/product/upload",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" }
      }).then(function(res) {
        console.log(res.data);
        that.form.imgUrl = res.data;
      });
    },
    /**获取图片的本地路径，用于显示 */
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    release(formName) {
        console.log(this.form.cagegoryid);
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$confirm("是否发布新的商品？", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          })
            .then(() => {
              apiReleaseProduct({
                productName: this.form.name,
                productSku: this.form.quantity,
                productPrice: this.form.price,
                productRecommendprice: this.form.suggested_price,
                productDefails: this.form.details,
                warehouseId: this.form.warehouseid,
                productColors: this.form.color,
                scategoryId: this.form.cagegoryid,
                productWeight: this.form.weight,
                productSizes: this.form.arraySize,
                productStatue: this.form.productStatue,
                productPicture: this.form.imgUrl
              }).then(res => {
                this.$message({
                  type: "success",
                  message: "新的商品发布成功!"
                });
                this.$refs.form.resetFields(); //清空表单数据
              });
            })
            .catch(error => {
              console.log(error);
              this.$message({
                type: "info",
                message: "已取消发布"
              });
            });
        } else {
          //   console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
