/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-03-20 14:57:48 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-03-27 13:43:10
 */

<template>
    <div>
        <div>
            <index-header></index-header>
        </div>
        <div>
            <index-search></index-search>
        </div>
        <div>
            <el-row class="orderlist_title">
                <el-col style="font-size:2.5vh;color:#626262" :span="12" :offset="2">
                    搜索商品 {{search_condition}} 结果如下
                </el-col>
            </el-row>
        </div>
        <el-row style="height:100%;margin-top:5px;margin-bottom:15px">
            <object v-for="lists in products">
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
                            <el-row style="top:80%;">
                                <el-col :span="2" :offset="6">
                                    <el-button class="buttonline iconfont icon-gouwuche" type="primary" title="添加购物车" circle></el-button>
                                </el-col>
                                <el-col :span="2" :offset="3">
                                    <el-button class="buttonline iconfont icon-xihuan" type="danger" title="标记为喜欢" circle></el-button>
                                </el-col>
                                <el-col :span="2" :offset="3">
                                    <router-link :to="'/mall/product/'+lists.id" tag="span">
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
        <el-row style="text-align:center;margin-bottom:20px;">

            <el-pagination  @current-change="handleCurrentChange" :current-page.sync="pageNum" :page-size="100" layout="total, prev, pager, next" :total="400">
            </el-pagination>
            </el-pagination>

        </el-row>
    </div>
</template>
<style scoped>
.orderlist_title {
  border-radius: 10px 10px 10px 10px;
  /* border-bottom: 2px solid #ccc; */
  height: 35px;
  line-height: 35px;
  background-color: #f3f3f3;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06);
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
import IndexHeader from "./../index/header.vue";
import IndexSearch from "./../index/search.vue";

export default {
  components: {
    IndexHeader: IndexHeader,
    IndexSearch: IndexSearch
  },
  created () {
    console.log(this.$route.query.product_name);  
    this.search_condition = this.$route.query.product_name;
    // this.axios({
    //   method:"POST",
    //   url:"api/product/product/findProductByCondition",
    //   data:this.search_condition
    // }).then(res => {
    //   console.log(res.data);
    // })
  },
  data() {
    return {
        pageNum:1,
        search_condition: "手机",
      products: [
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
          product_name: "荣耀 V10",
          price: "3000",
          brand: "华为荣耀厂商",
          img: require("../../../../public/img/product2.jpg"),
          id: "2"
        },
        {
          product_name: "荣耀 V10",
          price: "3000",
          brand: "华为荣耀厂商",
          img: require("../../../../public/img/product2.jpg"),
          id: "2"
        },
        {
          product_name: "荣耀 V10",
          price: "3000",
          brand: "华为荣耀厂商",
          img: require("../../../../public/img/product2.jpg"),
          id: "2"
        },
        {
          product_name: "荣耀 V10",
          price: "3000",
          brand: "华为荣耀厂商",
          img: require("../../../../public/img/product2.jpg"),
          id: "2"
        },
        {
          product_name: "荣耀 V10",
          price: "3000",
          brand: "华为荣耀厂商",
          img: require("../../../../public/img/product2.jpg"),
          id: "2"
        },
        {
          product_name: "荣耀 V10",
          price: "3000",
          brand: "华为荣耀厂商",
          img: require("../../../../public/img/product2.jpg"),
          id: "2"
        },
        {
          product_name: "荣耀 V10",
          price: "3000",
          brand: "华为荣耀厂商",
          img: require("../../../../public/img/product2.jpg"),
          id: "2"
        },
        {
          product_name: "荣耀 V10",
          price: "3000",
          brand: "华为荣耀厂商",
          img: require("../../../../public/img/product2.jpg"),
          id: "2"
        },
        {
          product_name: "荣耀 V10",
          price: "3000",
          brand: "华为荣耀厂商",
          img: require("../../../../public/img/product2.jpg"),
          id: "2"
        },
        {
          product_name: "荣耀 V10",
          price: "3000",
          brand: "华为荣耀厂商",
          img: require("../../../../public/img/product2.jpg"),
          id: "2"
        }
      ]
    };
  },
  methods: {
    handleCurrentChange() {}
  },
};
</script>
