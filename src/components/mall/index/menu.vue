/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-02-15 21:42:49 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-02-20 23:04:48
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

        <el-row @mouseenter.native="expand = true" v-show="show" class="menu_item" v-for="item in menu_items">
          <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="1">&nbsp;</el-col>
          <el-col :xs="23" :sm="23" :lg="23" :xl="10" :span="23">
            <span :class="item.icon"></span>
            <span class="item_word">{{item.name}}</span>
          </el-col>
        </el-row>
      </el-col>

      <el-col v-show="expand" class="menu_show" :xs="17" :sm="18" :md="18" :lg="12" :xl="12">
        <div v-for="kind in menu_show">
          <el-row class="subkind">
            <el-col :xs="0" :sm="0" :md="1" :lg="1" :xl="1">&nbsp;</el-col>
            <el-col :xs="24" :sm="4" :lg="4" :span="3" style="margin-top:5px;">{{kind.total}} ></el-col>
            <el-col :xs="24" :sm="18" :md="20" :lg="19">
              <el-row style="font-size:13px;">
                <el-col v-for="name in kind.subkind" style="padding-top:5px;padding-bottom:5px;" :xs="7" :lg="4" :span="4">
                  <span class="subkind_item">{{name.name}}</span>
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
export default {
  data() {
    return {
      expand: false,
      show: true,
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
      ],
      menu_show: [
        {
          total: "大型电器",
          subkind: [
            { name: "平板电视" },
            { name: "空调" },
            { name: "家庭影院" },
            { name: "DVD播放器" },
            { name: "迷你音响" },
            { name: "烟机灶具" },
            { name: "热水器" },
            { name: "消毒柜 " },
            { name: "洗碗机 " },
            { name: "酒柜冷柜" },
            { name: "热水器" },
            { name: "冰箱" },
            { name: "洗衣机" },
            { name: "家电配件" },
            { name: "家电下乡" }
          ]
        },
        {
          total: "生活电器",
          subkind: [
            { name: "电风扇" },
            { name: "冷风扇" },
            { name: "净化器" },
            { name: "饮水器" },
            { name: "挂烫机/熨斗" },
            { name: "吸尘器" },
            { name: "电话机" },
            { name: "插座 " },
            { name: "收音/录机 " },
            { name: "清洁机" },
            { name: "加湿机" },
            { name: "取暖机" },
            { name: "扫地机器人" },
            { name: "干衣机" },
            { name: "电器配件" },
            { name: "其他生活电器" }
          ]
        },
        {
          total: "厨房电器",
          subkind: [
            { name: "料理/榨汁机" },
            { name: "豆浆机" },
            { name: "电饭煲" },
            { name: "电压力锅" },
            { name: "面包机" },
            { name: "咖啡机" },
            { name: "微波炉" },
            { name: "电烤箱" },
            { name: "电磁炉" },
            { name: "电饼铛/烧烤盘" },
            { name: "煮蛋器" },
            { name: "酸奶机" },
            { name: "电炖锅" },
            { name: "电水壶/热水壶" },
            { name: "多用途锅" },
            { name: "果蔬解毒机" },
            { name: "其他厨房电器" }
          ]
        },
        {
          total: "个护健康",
          subkind: [
            { name: "剃须刀" },
            { name: "剃毛/脱毛器" },
            { name: "口腔护理" },
            { name: "电吹风" },
            { name: "美容器" },
            { name: "按摩椅" },
            { name: "足浴盆" },
            { name: "血压计" },
            { name: "健康秤/厨房秤" },
            { name: "血糖仪" },
            { name: "体温计" },
            { name: "计步/脂肪检测仪" },
            { name: "其他健康电器" }
          ]
        },
        {
          total: "五金家装",
          subkind: [
            { name: "电动工具" },
            { name: "手动工具" },
            { name: "仪器仪表" },
            { name: "浴霸/排气扇" },
            { name: "灯具" },
            { name: "LED灯" },
            { name: "洁身器" },
            { name: "水槽" },
            { name: "龙头" },
            { name: "淋浴花洒" },
            { name: "厨卫五金" },
            { name: "家具五金" },
            { name: "门铃" },
            { name: "电气开关" },
            { name: "插座" },
            { name: "电工电料" },
            { name: "监控安防" },
            { name: "电线/线缆" }
          ]
        }
      ]
    };
  }
};
</script>
