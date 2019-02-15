/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-02-15 21:42:49 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-02-15 22:52:32
 */
<template>
    <div>
        <el-row>
            <el-col class="menu_main" :span="3" :offset="3">
                <el-row class="menu_title">
                    <el-col :span="24">
                        <el-col :xs="0" :sm="11" :md="12" :lg="1" :xl="13">&nbsp;</el-col>
                        <span class="iconfont icon-daohang"></span>
                        商品分类</el-col>
                </el-row>
                <el-row class="menu_item" v-for="(item,index) in menu_items">
                    <el-col :xs="0" :sm="11" :md="12" :lg="1" :xl="13">&nbsp;</el-col>
                    <el-col :span="23">
                        <span :class="item.icon"></span>
                        <span class="item_word">{{item.name}}</span>
                    </el-col>
                </el-row>

            </el-col>
        </el-row>
    </div>
</template>
<style scoped>
.menu_title {
  background-color: #ff0036;
  font-size: 18px;
  line-height: 35px;
  height: 35px;
  color: whitesmoke;
}
.iconfont {
  padding-right: 10px;
}
.menu_item {
  padding-top: 4px;
  padding-bottom: 4px;
}
.menu_item:hover {
  background-color: white;
  color: #ff0036;
}
.menu_main {
  background-color: grey;
  color: white;
  height: 535px;
}
.item_word{
    cursor: pointer;
}
</style>
<script>
export default {
  data() {
    return {
      menu_items: [
        { icon: "iconfont icon-weibiaoti2fuzhi09", name: "家用电器" },
        { icon: "iconfont icon-diannao", name: "电脑 办公" },
        { icon: "iconfont icon-gehuhuazhuang", name: "个护化妆" },
        { icon: "iconfont icon-tubiao", name: "钟表" },
        { icon: "iconfont icon-shipinyinliao", name: "食品饮料 保健食品" },
        { icon: "iconfont icon-qicheyongpin", name: "汽车用品" },
        { icon: "iconfont icon-wanju", name: "玩具乐器" },
        { icon: "iconfont icon-shouji", name: "手机" },
        { icon: "iconfont icon-shuma", name: "数码" },
        { icon: "iconfont icon-jiaju", name: "家居家装" },
        { icon: "iconfont icon-chuju", name: "厨具" },
        { icon: "iconfont icon-fushi", name: "服饰内衣" },
        { icon: "iconfont icon-lipinxiangbao", name: "礼品箱包" },
        { icon: "iconfont icon-35", name: "珠宝" },
        { icon: "iconfont icon-yundongjiankangzhuanhuan01", name: "运动健康" },
        { icon: "iconfont icon-tushu", name: "图书 音像" },
        { icon: "iconfont icon-lvxing", name: "旅行 充值 票务" }
      ]
    };
  }
};
</script>
