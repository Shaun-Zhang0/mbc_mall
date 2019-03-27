/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-02-15 21:42:49 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-03-26 01:59:31
 */
<template>
  <div style="width:100%">
    <el-row class="show" @mouseleave.native="expand = false">
      <el-col :xs="0" :sm="1" :md="1" :lg="3" :xl="4">&nbsp;</el-col>
      <el-col class="menu_main" :xs="9" :sm="5" :md="8" :lg="3" :xl="3">
        <el-row class="menu_title">
          <el-col :span="24">
            <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="1">&nbsp;</el-col>
            <span class="iconfont icon-daohang"></span>
            商品类目
          </el-col>
        </el-row>

        <el-row @mouseenter.native="showMenu(item)" v-show="show" class="menu_item" v-for="item in menu_items">
          <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="1">&nbsp;</el-col>
          <el-col :xs="23" :sm="23" :lg="23" :xl="10" :span="23">
            <span class="item_word">{{item.remark}}</span>
          </el-col>
        </el-row>
      </el-col>

      <el-col v-show="expand" class="menu_show" :xs="24" :sm="18" :md="18" :lg="12" :xl="12">
        <div v-for="kind in menu_show">
          <el-row class="subkind">
            <el-col :xs="0" :sm="0" :md="1" :lg="1" :xl="1">&nbsp;</el-col>
            <el-col :xs="24" :sm="4" :lg="4" :span="3" style="margin-top:5px;">{{kind.categoryName}} ></el-col>
            <el-col :xs="24" :sm="18" :md="20" :lg="19">
              <el-row style="font-size:13px;">
                <el-col v-for="name in kind.categoryList" style="padding-top:5px;padding-bottom:5px;" :xs="6" :lg="4" :span="4">
                  <span class="subkind_item">{{name.categoryName}}</span>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </el-col>

    </el-row>
  </div>
</template>
<style>
.show {
  z-index: 55555;
  position: absolute;
  padding-top: 3px;
  width: 100%;
  pointer-events: none;
  padding-bottom: 100px;
}
.menu_title {
  background-color: #ff0036;
  font-size: 18px;
  line-height: 35px;
  height: 35px;
  color: whitesmoke;
  cursor: pointer;
}
.iconfont {
  padding-right: 10px;
}
.menu_item {
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: grey;
  opacity: 0.8;
}
.menu_item:hover {
  background-color: white;
  color: #ff0036;
}
.menu_main {
  color: white;
  min-height: 0;
  max-height: 100%;
  pointer-events: auto;
}
.menu_show {
  background-color: white;
  /* opacity: 1; */
  height: 100%;
  width: auto;
  /* z-index: 1111; */
  pointer-events: auto;
  margin-top: 35px;
}
.item_word {
  cursor: pointer;
}
.subkind {
  padding-top: 5px;
  margin-left: 10px;
  margin-right: 10px;
  /* border-bottom: 1px dashed #999; */
}
.subkind_item {
  cursor: pointer;
}
.subkind_item:hover {
  color: #ff0036;
}
</style>
<script>
import { apiMallMenuShow } from "./../../../assets/js/axios/api.js";
import { apiMallGetScategory } from "./../../../assets/js/axios/api.js";
export default {
  mounted () {
    apiMallGetScategory().then(res => {
      console.log(res.data.data);
      this.menu_items = res.data.data;
    })
  },
  data() {
    return {
      expand: false,
      show: true,
      /**一级菜单 */
      menu_items: [
        {
          icon: "iconfont icon-weibiaoti2fuzhi09",
          name: "家用电器",
          id: 1
        },
        {
          icon: "iconfont icon-diannao",
          name: "电脑 办公",
          id: 2
        },
        {
          icon: "iconfont icon-gehuhuazhuang",
          name: "个护化妆",
          id: 3
        },
        {
          icon: "iconfont icon-tubiao",
          name: "钟表",
          id: 4
        },
        {
          icon: "iconfont icon-shipinyinliao",
          name: "食品饮料 保健食品",
          id: 5
        },
        {
          icon: "iconfont icon-qicheyongpin",
          name: "汽车用品",
          id: 6
        },
        {
          icon: "iconfont icon-wanju",
          name: "玩具乐器",
          id: 7
        },
        {
          icon: "iconfont icon-shouji",
          name: "手机",
          id: 8
        },
        {
          icon: "iconfont icon-shuma",
          name: "数码",
          id: 9
        },
        {
          icon: "iconfont icon-jiaju",
          name: "家居家装",
          id: 10
        },
        {
          icon: "iconfont icon-chuju",
          name: "厨具",
          id: 11
        },
        {
          icon: "iconfont icon-fushi",
          name: "服饰内衣",
          id: 12
        },
        {
          icon: "iconfont icon-lipinxiangbao",
          name: "礼品箱包",
          id: 13
        },
        {
          icon: "iconfont icon-35",
          name: "珠宝",
          id: 14
        },
        {
          icon: "iconfont icon-yundongjiankangzhuanhuan01",
          name: "运动健康",
          id: 15
        },
        {
          icon: "iconfont icon-tushu",
          name: "图书 音像",
          id: 16
        },
        {
          icon: "iconfont icon-lvxing",
          name: "旅行 充值 票务",
          id: 17
        }
      ],
      menu_show: []
     
    };
  },
  methods: {
    showMenu(val) {
      // console.log(val.id);
      this.expand = true;
      apiMallMenuShow(val.categoryId).then(res => {
        if (res.data.msg == "成功") {
          this.menu_show = res.data.data;
          // console.log(this.menu_show);
        }
      });
    }
  }
};
</script>
