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
                <img class="img" :src="img_src">
            </el-col>
            <el-col :md="24" :lg="8">
                <el-row class="product_title">
                    <el-col :xs="8" :sm="10" :md="10" :lg="2" :xl="1">&nbsp;</el-col>
                    <el-col :md="24" :lg="20">
                        <el-col :xs="2" :sm="8" :md="8" :lg="0" :xl="0">&nbsp;</el-col>
                        <span> {{product.product_name}}</span>
                    </el-col>
                </el-row>
                <el-row class="product_price">
                    <el-col :md="24" :lg="20">
                        <span>￥6300</span>
                    </el-col>
                </el-row>

                <el-row class="product_brand">
                    <el-col :xs="8" :sm="10" :md="10" :lg="2" :xl="1">&nbsp;</el-col>
                    <el-col :md="24" :lg="20">
                        所属厂商
                        <span>{{product.product_brand}}</span>
                    </el-col>
                </el-row>

                <el-row class="product_sell">
                    <el-col :xs="8" :sm="10" :md="2" :lg="2" :xl="1">&nbsp;</el-col>
                    <el-col :md="24" :lg="18">
                        累计售出
                        <span>{{product.product_sell}}</span>
                    </el-col>
                </el-row>

                <el-row class="product_color">
                    <el-row>
                        <el-col :xs="8" :sm="10" :md="2" :lg="2" :xl="1">&nbsp;</el-col>
                        <el-col :md="24" :lg="20">颜色分类</el-col>
                    </el-row>
                    <el-row class="color_button">
                        <el-col :xs="0" :sm="7" :md="7" :lg="2" :xl="1">&nbsp;</el-col>
                        <el-col :xs="24" :sm="12" :md="20" :lg="20">
                            <el-col v-for="color in product.product_color" :md="6" :span="6">
                                <el-radio @change="select_color" v-model="buy_color" :label="color.color" border>{{color.color}}</el-radio>
                            </el-col>

                        </el-col>
                    </el-row>
                </el-row>

                <el-row class="buy_num">
                    <el-row>
                        <el-col :xs="0" :sm="10" :md="2" :lg="2" :xl="1">&nbsp;</el-col>
                        <el-col :xs="10 " :md="4" :lg="4">选择数量</el-col>
                        <!-- <el-col :xs="10" :md="8" :lg="9" class="stock" :style="{display : stock}">{{buy_color}}剩余库存:
                            <span>11</span>
                        </el-col> -->
                    </el-row>
                    <el-row>
                        <el-col :xs="8" :sm="10" :md="10" :lg="2" :xl="1">&nbsp;</el-col>
                        <el-col class="select_num" :sm="4" :md="4" :lg="20">
                            <el-input-number v-model="select_num" :min="1" :max="product.buy_limit" label="描述文字"></el-input-number>
                        </el-col>
                    </el-row>
                </el-row>

                <el-row class="confirm">
                    <el-col :xs="8" :sm="10" :md="2" :lg="2" :xl="1">&nbsp;</el-col>
                    <el-col :md="24" :lg="20">
                        <el-button type="info" class="confirm_button">确认购买</el-button>
                    </el-col>
                </el-row>

                <el-row class="product_details">
                    <el-row class="details_tip" style="">
                        <el-col :xs="8" :sm="10" :md="10" :lg="2" :xl="1">&nbsp;</el-col>
                        <el-col :span="20">
                            <span>查看更多手机</span>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :xs="8" :sm="10" :md="5" :lg="2" :xl="1">&nbsp;</el-col>
                        <el-col :md="14" :lg="18">
                            <span>{{product.product_description}}</span>
                        </el-col>
                    </el-row>
                </el-row>
            </el-col>

        </el-row>
        <div class="footer">
            <IndexFooter></IndexFooter>
        </div>
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
export default {
  components: {
    IndexHeader: IndexHeader,
    IndexSearch: IndexSearch,
    IndexFooter: IndexFooter
  },
  created() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      img_src: require("./../../../../public/img/product3.jpg"),
      select_num: 1,
      buy_color: "",
      stock: "none",
      product: {
        product_color: [
          { color: "红色" },
          { color: "黑色" },
          { color: "黄色" },
          { color: "蓝色" }
        ],
        product_name: "IPHONE X 64G 全网通4G智能手机",
        product_brand: "APPLE/苹果",
        product_sell: 11,
        product_description:"iPhone 上最大的超视网膜显示屏，性能出类拔萃的 A12 仿生，安全性更进一步的面容 ID，以及支持景深控制的突破性双镜头系统。",
        buy_limit:5
      }
    };
  },
  methods: {
    select_color() {
      this.stock = "block";
    }
  }
};
</script>
