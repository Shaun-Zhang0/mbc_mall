/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-02-28 17:55:13 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-03-27 00:19:33
 */

<template>
  <div>
    <el-row style="z-index:1;" v-for="products in product_list">
      <el-row class="product_title">
        <el-col :xs="15" :sm="8" :md="6" :lg="5" :offset="1" style="font-size:20px;">{{products.name}}</el-col>
        <el-col :xs="1" :sm="0" :md="0" :lg="3" :xl="4">&nbsp;</el-col>
        <el-col :xs="6" :sm="3" :md="6" :lg="3">
          <span class="line_title_more" style="font-size:12px;">更多>></span>
        </el-col>
      </el-row>

      <el-row style="height:100%;margin-top:15px;margin-bottom:15px">
        <object v-for="lists in products.productInfoList">
          <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6" style="height:100%;">

            <div style="position: relative;height:300px;">
              <el-col :span="24" class="card">
                <div align="center">
                  <img :src="lists.productPicture" class="image">
                </div>
                <div style="padding: 14px;">
                  <span>{{lists.productName}}</span>
                  <div style="font-size:12px;color:grey">
                    {{lists.brand}}
                  </div>
                  <div style="text-align:center; color: rgb(253, 40, 40);">
                    ￥{{lists.productPrice}}
                  </div>
                </div>
              </el-col>

              <el-col class="show">
                <el-row style="top:80%;">
                  <el-col :span="2" :offset="6">
                    <el-button class="buttonline iconfont icon-gouwuche" type="primary" title="添加购物车" circle></el-button>
                  </el-col>
                  <el-col :span="2" :offset="3">
                    <el-button class="buttonline iconfont icon-xihuan" type="danger" title="标记为喜欢" circle></el-button>
                  </el-col>
                  <el-col :span="2" :offset="3">
                    <router-link :to="'/mall/product/'+lists.id"  tag="span">
                      <!-- <router-link :to="'/mall/product/'+lists.id" tag="span"> -->
                      <el-button class="buttonline iconfont icon-xiangqing" type="success" title="查看详情" circle></el-button>
                    </router-link>
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
  /* margin-top: 100px; */
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
              img: require("../../../../public/img/product1.jpg"),
              id: "1"
            },
            {
              product_name: "荣耀 V10",
              price: "3000",
              brand: "华为荣耀厂商",
              img: require("../../../../public/img/product2.jpg"),
              id: "2"
            },
            {
              product_name: "Apple/苹果 iPhone X",
              price: "6300",
              brand: "苹果厂商",
              img: require("../../../../public/img/product3.jpg"),
              id: "3"
            },

            {
              product_name: "Newsmy纽曼移动硬盘500G",
              price: "150",
              brand: "纽曼厂商",
              img: require("../../../../public/img/product4.jpg"),
              id: "4"
            },
            {
              product_name: "Samsung/三星 Galaxy S9+ SM-G9650/DS",
              price: "6400",
              brand: "三星厂商",
              img: require("../../../../public/img/product5.jpg"),
              id: "5"
            },
            {
              product_name: "Apple/苹果 iPhone 8",
              price: "4058",
              brand: "苹果厂商",
              img: require("../../../../public/img/product6.jpg"),
              id: "6"
            },
            {
              product_name: "vivo Z1青春版",
              price: "949",
              brand: "vivo厂商",
              img: require("../../../../public/img/product7.jpg"),
              id: "7"
            },
            {
              product_name: "荣耀手机",
              price: "1500",
              brand: "华为荣耀",
              img: require("../../../../public/img/product8.jpg"),
              id: "8"
            }
          ]
        },
        {
          title: "居家生活 HOME",
          list: [
            {
              product_name:
                "荣事达磨粉机家用小型打粉机五谷杂粮研磨机电动干磨机药材粉碎机 ",
              price: "159",
              brand: "荣事达厂商",
              img: require("../../../../public/img/product2-1.jpg"),
              id: "9"
            },
            {
              product_name: "苏泊尔电热水壶 SW-17D618 双层不锈钢防烫保温1.7L升",
              price: "109",
              brand: "苏泊尔厂商",
              img: require("../../../../public/img/product2-2.jpg"),
              id: "10"
            },
            {
              product_name:
                "小熊煎蛋器JDQ-C3011 电煎锅迷你自动断电煮蒸蛋羹宿舍煎蛋机",
              price: "78",
              brand: "小熊厂商",
              img: require("../../../../public/img/product2-3.jpg"),
              id: "11"
            },

            {
              product_name:
                "净水器家用直饮厨房自来水过滤器前置五级除垢超滤净水机",
              price: "200",
              brand: "志高厂商",
              img: require("../../../../public/img/product2-4.jpg"),
              id: "12"
            },
            {
              product_name:
                "美的饮水机设备MT-3 865CB MC-3 865CB净水桶过滤芯耗材配件滤网",
              price: "61",
              brand: "美的厂商",
              img: require("../../../../public/img/product2-5.jpg"),
              id: "13"
            },
            {
              product_name:
                "奥克斯绞肉机家用电动小型绞馅机切菜打肉机蒜泥蒜蓉碎菜碎肉机",
              price: "119",
              brand: "奥克斯厂商",
              img: require("../../../../public/img/product2-6.jpg"),
              id: "14"
            },
            {
              product_name:
                "海尔商用净水机HZR400-2W智能反渗透饮水机加热型商务净饮机办公",
              price: "17200",
              brand: "海尔厂商",
              img: require("../../../../public/img/product2-7.jpg"),
               id: "15"
            },
            {
              product_name: "美的净水器家用直饮自来水过滤器反渗透RO净水机",
              price: "1898",
              brand: "华为荣耀",
              img: require("../../../../public/img/product2-8.jpg"),
               id: ""
            }
          ]
        }
      ]
    };
  },
  methods: {},
  mounted () {
      this.axios({
        method:"POST",
        url:"api/product/product/findProductToIndex",
        data:[25,26]
        
      })
      .then(res => {
        console.log(res.data);
        this.product_list = res.data.data;
      })
  }
};
</script>
