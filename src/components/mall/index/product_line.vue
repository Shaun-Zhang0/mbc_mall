<template>
  <div>
    <el-row style="z-index:1;" v-for="products in product_list">
      <el-row class="product_title">
        <el-col :xs="24" :sm="8" :md="6" :lg="5" :offset="1" style="font-size:20px;">{{products.title}}</el-col>
        <el-col :xs="1" :sm="0" :md="0" :lg="3" :xl="4">&nbsp;</el-col>
        <el-col :xs="6" :sm="3" :md="6" :lg="3">
          <span class="line_title_more" style="font-size:12px;">更多>></span>
        </el-col>
      </el-row>

      <el-row style="height:100%;margin-top:15px;margin-bottom:15px">

        <object v-for="lists in products.list">
          <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6" style="height:100%;">

            <div style="position: relative;height:300px;">
              <el-col :span="24" class="card">
                <div align="center">
                  <img :src="lists.img" class="image">
                </div>
                <div style="padding: 14px;">
                  <span>{{lists.product_name}}</span>
                  <div style="font-size:12px;color:grey">
                    {{lists.brand}}
                  </div>
                  <div style="text-align:center; color: rgb(253, 40, 40);">
                    ￥{{lists.price}}
                  </div>
                </div>
              </el-col>

              <el-col class="show">
                <el-row style="top:50%;">
                  <el-col :span="2" :offset="6">
                    <el-button class="buttonline iconfont icon-gouwuche" type="primary" title="添加购物车" circle></el-button>
                  </el-col>
                  <el-col :span="2" :offset="3">
                    <el-button class="buttonline iconfont icon-xihuan" type="danger" title="标记为喜欢" circle></el-button>
                  </el-col>
                  <el-col :span="2" :offset="3">
                    <el-button class="buttonline iconfont icon-xiangqing" type="success" title="查看详情" circle></el-button>
                  </el-col>
                </el-row>
              </el-col>

            </div>
          </el-col>
        </object>
      </el-row>
    </el-row>
  </div>
</template>
<style scoped>
.product_title {
  /* background-color: aquamarine; */
  border-bottom: 2px solid rgb(253, 40, 40);
  height: auto;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 50px;
}
.line_title_more {
  cursor: pointer;
}
.line_title_more:hover {
  color: rgb(253, 40, 40);
}
.image {
  width: 185px;
  height: 185px;
  display: block;
}
.show {
  position: absolute;
  z-index: 0;

  height: 100%;
  width: 100%;
  pointer-events: auto;
  /* visibility: visible; */
}
.show:hover {
  position: absolute;
  z-index: 100;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  /* background-color: black; */
  /* opacity: 0.3; */
}
.card {
  border: 1px solid #ebeef5;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height: 300px;
  position: absolute;
  z-index: 1;
  pointer-events: none;
}
</style>
<script>
export default {
  data() {
    return {
      show: false,
      display: false,
      product_list: [
        {
          title: "潮电酷玩 ELECTRONICS",
          list: [
            {
              product_name: "Newsmy纽曼移动硬盘500G",
              price: "150",
              brand: "纽曼厂商",
              img: require("../../../../public/img/product1.jpg")
            },
            {
              product_name: "荣耀 V10",
              price: "3000",
              brand: "华为荣耀厂商",
              img: require("../../../../public/img/product2.jpg")
            },
            {
              product_name: "Apple/苹果 iPhone X",
              price: "6300",
              brand: "苹果厂商",
              img: require("../../../../public/img/product3.jpg")
            },

            {
              product_name: "Newsmy纽曼移动硬盘500G",
              price: "150",
              brand: "纽曼厂商",
              img: require("../../../../public/img/product4.jpg")
            },
            {
              product_name: "Samsung/三星 Galaxy S9+ SM-G9650/DS",
              price: "6400",
              brand: "三星厂商",
              img: require("../../../../public/img/product5.jpg")
            },
            {
              product_name: "Apple/苹果 iPhone 8",
              price: "4058",
              brand: "苹果厂商",
              img: require("../../../../public/img/product6.jpg")
            },
            {
              product_name: "vivo Z1青春版",
              price: "949",
              brand: "vivo厂商",
              img: require("../../../../public/img/product7.jpg")
            },
            {
              product_name: "荣耀手机",
              price: "1500",
              brand: "华为荣耀",
              img: require("../../../../public/img/product8.jpg")
            }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>
