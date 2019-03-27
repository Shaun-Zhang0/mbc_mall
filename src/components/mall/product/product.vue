/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-02-28 17:55:08 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-03-26 16:21:38
 */

<template>
  <div>
    <div>
      <index-header></index-header>
    </div>
    <div>
      <index-search></index-search>
    </div>
    <el-row class="product_all">
      <el-col :xs="0" :sm="2" :md="1" :lg="1" :xl="1">&nbsp;</el-col>
      <el-col class="img_all" :md="24" :lg="15">
        <img class="img" :src="product.img_src">
      </el-col>
      <el-col :md="24" :lg="8">
        <el-row class="product_title">
          <el-col :xs="8" :sm="10" :md="10" :lg="2" :xl="1">&nbsp;</el-col>
          <el-col :md="24" :lg="20">
            <el-col :xs="2" :sm="8" :md="8" :lg="0" :xl="0">&nbsp;</el-col>
            <span> {{product.name}}</span>
          </el-col>
        </el-row>
        <el-row class="product_price">
          <el-col :md="24" :lg="20">
            <span>￥{{product.price}}</span>
          </el-col>
        </el-row>

        <el-row class="product_brand">
          <el-col :xs="8" :sm="10" :md="10" :lg="2" :xl="1">&nbsp;</el-col>
          <el-col :md="24" :lg="20">
            所属厂商
            <span>{{product.product_brand}}</span>
          </el-col>
        </el-row>

        <el-row class="product_brand">
          <el-col :xs="8" :sm="10" :md="10" :lg="2" :xl="1">&nbsp;</el-col>
          <el-col :md="24" :lg="20">
            商品状态
            <span>{{product.product_status}}</span>
          </el-col>
        </el-row>

        <el-row class="product_sell">
          <el-col :xs="8" :sm="10" :md="2" :lg="2" :xl="1">&nbsp;</el-col>
          <el-col :md="24" :lg="18">
            剩余库存
            <span>{{product.product_sell}}</span>
          </el-col>
        </el-row>

        <el-row class="buy_num">
          <el-row>
            <el-col :xs="0" :sm="10" :md="2" :lg="2" :xl="1">&nbsp;</el-col>
            <el-col :xs="10 " :md="4" :lg="4">选择数量</el-col>

          </el-row>
          <el-row>
            <el-col :xs="8" :sm="10" :md="10" :lg="2" :xl="1">&nbsp;</el-col>
            <el-col class="select_num" :sm="4" :md="4" :lg="20">
              <el-input-number :disabled="product.disabled == '0'" :title='"最大限购数量为："+product.buy_limit' v-model="select_num" :min="1" :max="product.buy_limit" label="描述文字"></el-input-number>
            </el-col>
          </el-row>
        </el-row>

        <el-row class="confirm">
          <el-col :xs="8" :sm="10" :md="2" :lg="2" :xl="1">&nbsp;</el-col>
          <el-col :md="24" :lg="20">
            <el-button :disabled="product.disabled == '0'" type="info" class="confirm_button" @click="checkLogin">确认代理</el-button>
          </el-col>
        </el-row>

        <el-row class="product_details">
          <el-row class="details_tip">
            <el-col :xs="8" :sm="10" :md="10" :lg="2" :xl="1">&nbsp;</el-col>
            <el-col :span="20">
              <span>查看更多商品</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="8" :sm="10" :md="5" :lg="2" :xl="1">&nbsp;</el-col>
            <el-col :md="14" :lg="18">
              <span>{{product.description}}</span>
            </el-col>
          </el-row>
        </el-row>
      </el-col>

    </el-row>
    <div class="footer">
      <IndexFooter></IndexFooter>
    </div>
    <div>
      <MallLogin></MallLogin>
    </div>
    <el-dialog :before-close="quitDialog" title="确认代理" :visible.sync="dialogCheckProduct" width="400px">
      <el-row>
        <el-col :span="12">商品名称：{{product.name}}</el-col>
        <el-col :span="12">所属厂商：{{product.product_brand}}</el-col>
      </el-row>
      <el-row style="margin-top: 20px">
        <el-col :span="12">代理数量：{{select_num}}</el-col>
      </el-row>

      <span slot="footer" class="dialog-footer">
        <el-button @click="back">返 回</el-button>
        <el-button type="primary" @click="proxyProduct" :disabled="proxySuccess">
          <span v-show="!proxystatus&&!proxySuccess">确认代理</span>
          <span v-show="proxystatus&&!proxySuccess">代理中
            <span class="el-icon-loading"></span>
          </span>

          <span v-show="proxystatus&&proxySuccess">代理成功
            <span class="el-icon-check"></span>
          </span>
        </el-button>
      </span>
    </el-dialog>
    </el-dialog>

  </div>
</template>
<style scoped>
.product_all {
  height: 100%;
  /* background-color: grey; */
  width: 100%;
  margin-top: 50px;
  border-top: 2px solid #ccc;
}
.img_all {
  /* background-color: pink; */
  height: 700px;
  display: flex;
  align-items: center;
  padding: 1%;
}
.img {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
}
.product_title {
  margin-top: 30px;
  font-size: 20px;
}
.product_price {
  margin-top: 30px;
  text-align: right;
  font-size: 22px;
}
.product_sell {
  margin-top: 30px;
}
.product_sell span {
  color: red;
  padding-left: 20px;
}
.product_color {
  margin-top: 20px;
}
.color_button {
  margin-top: 20px;
}
.buy_num {
  margin-top: 30px;
}
.select_num {
  margin-top: 30px;
}
.confirm {
  margin-top: 50px;
}
.confirm_button {
  width: 100%;
}
.product_details {
  margin-top: 30px;
}
.details_tip {
  margin-bottom: 20px;
}
.details_tip span {
  cursor: pointer;
}
.details_tip span:hover {
  color: rgb(253, 40, 40);
}
.product_brand {
  margin-top: 30px;
}
.product_brand span {
  color: #999;
  padding-left: 10px;
}
.footer {
  margin-top: 100px;
  border-top: 2px solid #ccc;
}
.stock {
  color: #ccc;
}
</style>
<script>
import IndexHeader from "./../index/header.vue";
import IndexSearch from "./../index/search";
import IndexFooter from "./../index/footer";
import MallLogin from "./../login/login";
import { apiMallProductshow } from "./../../../assets/js/axios/api.js";
import { apiProxyProduct } from "./../../../assets/js/axios/api.js";
export default {
  components: {
    IndexHeader: IndexHeader,
    IndexSearch: IndexSearch,
    IndexFooter: IndexFooter,
    MallLogin: MallLogin
  },
  created() {
    window.scrollTo(0, 0);
    console.log(this.$route.params.id);
    this.productInit();
  },
  data() {
    return {
      proxystatus: false, //正在代理
      proxySuccess: false, //是否代理成功
      dialogCheckProduct: false, //确认代理信息对话框
      select_num: 1,
      buy_color: "",
      stock: "none",
      productId: "",
      product: {
        img_src: require("./../../../../public/img/noproduct.png"),
        product_status: 1,
        name: "暂无",
        product_brand: "暂无",
        product_sell: "暂无",
        price: "暂无",
        description: "暂无",
        buy_limit: 5
      }
    };
  },
  methods: {
    productInit() {
      apiMallProductshow(this.$route.params.id).then(res => {
        console.log(res.data.data);

        if (res.data.code == 4000) {
          this.$message({
            type: "warning",
            message: "该商品不存在~"
          });
          this.$router.push({ path: "/mall/index" });
        } else if (res.data.code == 200) {
          this.product = res.data.data;
          this.productId = res.data.data.id;
          this.product.img_src = res.data.data.picture;
          this.product.product_brand = res.data.data.brandName;
          this.product.disabled = res.data.data.productStatus;
          // if (res.data.data.picture == "") {
          //   this.product.img_src = require("./../../../../public/img/noproduct.png");
          // }
          if (res.data.data.productStatus == 1) {
            this.product.product_status = "已上架";
          } else {
            this.product.product_status = "已下架";
          }
          this.product.product_sell = res.data.data.productSku;
          this.product.buy_limit = res.data.data.limitNum;
        }
      });
    },
    checkLogin() {
      if (!this.Cookie.getCookie("storeToken")) {
        this.$message({
          type: "warning",
          message: "您还没登录，请登录后在进行操作"
        });
      } else {
        this.dialogCheckProduct = true;
      }
    },
    quitDialog(done) {
      this.dialogCheckProduct = false;
      this.proxystatus = false;
      this.proxySuccess = false;
      done();
    },
    back() {
      this.dialogCheckProduct = false;
      this.proxystatus = false;
      this.proxySuccess = false;
    },
    proxyProduct() {
      this.proxystatus = true;
      apiProxyProduct(
        {
          productId: this.productId,
          storeStock: this.select_num
        },
        {
          headers: { token: this.Cookie.getCookie("storeToken") }
        }
      ).then(res => {
        console.log(res.data);
        if (res.data.code == 200) {
          // this.dialogCheckProduct = false;
          this.proxySuccess = true;
        }
      });
    }
  }
};
</script>
