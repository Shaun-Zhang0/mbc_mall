/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-02-13 14:57:50 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-02-23 15:00:59
 */
<template>
    <div>
        <el-row class="header">
            <el-col :xs="0" :sm="2" :md="1" :lg="2" :xl="2">&nbsp;</el-col>
            <el-col :xs="8" :sm="4" :md="4" :lg="2" :xl="2">
                <router-link to="/mall/index" tag="span">
                    <span class="header_items">欢迎光临跨境商城</span>
                </router-link>
            </el-col>
            <el-col :xs="0" :sm="11" :md="12" :lg="15" :xl="13">&nbsp;</el-col>
            <el-col :xs="4" :sm="2" :md="2" :lg="1" :xl="2">
                <span class="header_items">请登录</span>
            </el-col>
            <el-col :xs="4" :sm="2" :md="2" :lg="1" :xl="2">
                <span class="header_items">免费注册</span>
            </el-col>
            <el-col :xs="8" :sm="3" :md="3" :lg="2" :xl="2">
                &nbsp;
                <span class="iconfont icon-daohang header_items" style="font-size:12px;" @click="expand = !expand" @mouseenter="expand = true">网站导航 &nbsp;
                    <span v-if="expand" class=" el-icon-arrow-up" style="font-size:12px;"></span>
                    <span v-else class=" el-icon-arrow-down" style="font-size:12px;"></span>
                </span>

            </el-col>
        </el-row>
        <!-- menu -->
        <el-row class="menu_expand" v-show="expand">
            <el-col>

                <el-col @mouseleave.native="expand = false" class="header_menu" :offset="1" :span="22">

                    <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1">&nbsp;</el-col>
                    <!-- 行业市场 -->
                    <el-col :xs="23" :sm="23" :md="23" :lg="8" style="margin-bottom:30px;margin-top: 30px;;height: 100%;border-right: 1px solid #e5e5e5;">
                        <el-row style="font-size: 20px;text-align:left;color: #409EFF">
                            行业市场 Market
                        </el-row>
                        <el-row style="padding-top: 20px; font-size: 14px;">
                            <el-col :xs="3" :sm="2" :md="2" :lg="2">
                                <span class="header_menu_item header_menu_market">电脑</span>
                            </el-col>
                            <el-col :xs="2" :sm="3" :md="3" :lg="3" :xl="3">&nbsp;</el-col>
                            <el-col :xs="3" :sm="2" :md="2" :lg="2">
                                <span class="header_menu_item header_menu_market">手机</span>
                            </el-col>
                            <el-col :xs="2" :sm="3" :md="3" :lg="3" :xl="3">&nbsp;</el-col>
                            <el-col :xs="3" :sm="2" :md="2" :lg="2">
                                <span class="header_menu_item header_menu_market">厨具</span>
                            </el-col>
                            <el-col :xs="2" :sm="3" :md="3" :lg="3" :xl="3">&nbsp;</el-col>
                            <el-col :xs="3" :sm="2" :md="2" :lg="2">
                                <span class="header_menu_item header_menu_market">珠宝</span>
                            </el-col>
                            <el-col :xs="2" :sm="3" :md="3" :lg="3" :xl="3">&nbsp;</el-col>
                            <el-col :xs="3" :sm="2" :md="2" :lg="2">
                                <span class="header_menu_item header_menu_market">男鞋</span>
                            </el-col>
                        </el-row>
                        <el-row style="padding-top: 20px; font-size: 14px;">
                            <el-col :xs="3" :sm="2" :md="2" :lg="2">
                                <span class="header_menu_item header_menu_market">图书</span>
                            </el-col>
                            <el-col :xs="2" :sm="3" :md="3" :lg="3" :xl="3">&nbsp;</el-col>
                            <el-col :xs="3" :sm="2" :md="2" :lg="2">
                                <span class="header_menu_item header_menu_market">内衣</span>
                            </el-col>
                            <el-col :xs="2" :sm="3" :md="3" :lg="3" :xl="3">&nbsp;</el-col>
                            <el-col :xs="3" :sm="2" :md="2" :lg="2">
                                <span class="header_menu_item header_menu_market">母婴</span>
                            </el-col>
                            <el-col :xs="2" :sm="3" :md="3" :lg="3" :xl="3">&nbsp;</el-col>
                            <el-col :xs="3" :sm="2" :md="2" :lg="2">
                                <span class="header_menu_item header_menu_market">运动</span>
                            </el-col>
                            <el-col :xs="2" :sm="3" :md="3" :lg="3" :xl="3">&nbsp;</el-col>
                            <el-col :xs="3" :sm="2" :md="2" :lg="2">
                                <span class="header_menu_item header_menu_market">化妆</span>
                            </el-col>
                        </el-row>
                        <el-row style="padding-top: 20px; font-size: 14px;padding-bottom:20px;">
                            <el-col :xs="3" :sm="2" :md="2" :lg="2">
                                <span class="header_menu_item header_menu_market">钟表</span>
                            </el-col>
                            <el-col :xs="2" :sm="3" :md="3" :lg="3" :xl="3">&nbsp;</el-col>
                            <el-col :xs="3" :sm="2" :md="2" :lg="2">
                                <span class="header_menu_item header_menu_market">箱包</span>
                            </el-col>
                            <el-col :xs="2" :sm="3" :md="3" :lg="3" :xl="3">&nbsp;</el-col>
                            <el-col :xs="3" :sm="2" :md="2" :lg="2">
                                <span class="header_menu_item header_menu_market">珠宝</span>
                            </el-col>
                            <el-col :xs="2" :sm="3" :md="3" :lg="3" :xl="3">&nbsp;</el-col>
                            <el-col :xs="3" :sm="2" :md="2" :lg="2">
                                <span class="header_menu_item header_menu_market">音像</span>
                            </el-col>
                            <el-col :xs="2" :sm="3" :md="3" :lg="3" :xl="3">&nbsp;</el-col>
                            <el-col :xs="3" :sm="2" :md="2" :lg="2">
                                <span class="header_menu_item header_menu_market">玩具</span>
                            </el-col>
                        </el-row>

                    </el-col>
                    <!-- 热门商品 -->
                    <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1">&nbsp;</el-col>
                    <el-col :xs="23" :sm="23" :md="23" :lg="5" style="margin-bottom:30px;margin-top: 30px;height: 100%;border-right: 1px solid #e5e5e5;">
                        <el-row style="font-size: 20px;text-align:left;color: #F97901">
                            热门推荐 Hot
                        </el-row>
                        <el-row style="padding-top: 20px; font-size: 14px;">
                            <el-col :xs="6" :sm="4" :md="5" :lg="6">
                                <span class="header_menu_item header_menu_hot">科技新品</span>
                            </el-col>
                            <el-col :xs="3" :sm="6" :md="5" :lg="2">&nbsp;</el-col>
                            <el-col :xs="6" :sm="4" :md="4" :lg="6">
                                <span class="header_menu_item header_menu_hot">运动新品</span>
                            </el-col>
                            <el-col :xs="3" :sm="6" :md="5" :lg="2">&nbsp;</el-col>
                            <el-col :xs="6" :sm="4" :md="5" :lg="6">
                                <span class="header_menu_item header_menu_hot">时尚男装</span>
                            </el-col>

                        </el-row>
                        <el-row style="padding-top: 20px; font-size: 14px;">
                            <el-col :xs="6" :sm="4" :md="5" :lg="6">
                                <span class="header_menu_item header_menu_hot">最新手机</span>
                            </el-col>
                            <el-col :xs="3" :sm="6" :md="5" :lg="2">&nbsp;</el-col>
                            <el-col :xs="6" :sm="4" :md="4" :lg="6">
                                <span class="header_menu_item header_menu_hot">嘴馋系列</span>
                            </el-col>
                            <el-col :xs="3" :sm="6" :md="5" :lg="2">&nbsp;</el-col>
                            <el-col :xs="6" :sm="4" :md="5" :lg="6">
                                <span class="header_menu_item header_menu_hot">实用厨具</span>
                            </el-col>
                        </el-row>
                        <el-row style="padding-top: 20px; font-size: 14px;padding-bottom:20px;">
                            <el-col :xs="6" :sm="4" :md="5" :lg="6">
                                <span class="header_menu_item header_menu_hot">辣妈专用</span>
                            </el-col>
                            <el-col :xs="3" :sm="6" :md="5" :lg="2">&nbsp;</el-col>
                            <el-col :xs="6" :sm="4" :md="4" :lg="6">
                                <span class="header_menu_item header_menu_hot">精致少女</span>
                            </el-col>
                            <el-col :xs="3" :sm="6" :md="5" :lg="2">&nbsp;</el-col>
                            <el-col :xs="6" :sm="4" :md="5" :lg="6">
                                <span class="header_menu_item header_menu_hot">酷玩</span>
                            </el-col>

                        </el-row>

                    </el-col>
                    <!-- 商家中心 -->
                    <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1">&nbsp;</el-col>
                    <el-col :xs="23" :sm="23" :md="23" :lg="4" style="margin-bottom:30px;margin-top: 30px;height: 100%;border-right: 1px solid #e5e5e5;">
                        <el-row style="font-size: 20px;text-align:left;color: #22E019">
                            商家中心 User
                        </el-row>
                        <el-row style="padding-top: 20px; font-size: 14px;">
                            <el-col :xs="6" :sm="4" :md="5" :lg="8">
                                <span class="header_menu_item header_menu_user">厂商入驻</span>
                            </el-col>
                            <el-col :xs="3" :sm="6" :md="5" :lg="4">&nbsp;</el-col>
                            <el-col :xs="6" :sm="4" :md="4" :lg="8">
                                <span class="header_menu_item header_menu_user">入驻须知</span>
                            </el-col>

                        </el-row>
                        <el-row style="padding-top: 20px; font-size: 14px;">
                            <el-col :xs="6" :sm="4" :md="5" :lg="8">
                                <span class="header_menu_item header_menu_user">分销商注册</span>
                            </el-col>
                            <el-col :xs="3" :sm="6" :md="5" :lg="4">&nbsp;</el-col>
                            <el-col :xs="6" :sm="4" :md="4" :lg="8">
                                <span class="header_menu_item header_menu_user">注册须知</span>
                            </el-col>

                        </el-row>
                        <el-row style="padding-top: 20px; font-size: 14px;padding-bottom:20px;">
                            <el-col :xs="6" :sm="4" :md="5" :lg="8">
                                <span class="header_menu_item header_menu_user">平台规则</span>
                            </el-col>
                            <el-col :xs="3" :sm="6" :md="5" :lg="4">&nbsp;</el-col>
                            <el-col :xs="6" :sm="4" :md="4" :lg="8">
                                <span class="header_menu_item header_menu_user">运营服务</span>
                            </el-col>

                        </el-row>

                    </el-col>
                    <!-- 帮助中心 -->
                    <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1">&nbsp;</el-col>
                    <el-col :xs="23" :sm="23" :md="23" :lg="3" style="margin-bottom:30px;margin-top: 30px;height: 100%;">
                        <el-row style="font-size: 20px;text-align:left;color: #999">
                            帮助中心 Help
                        </el-row>
                        <el-row style="padding-top: 20px; font-size: 14px;">
                            <el-col :xs="6" :sm="4" :md="5" :lg="8">
                                <span class="header_menu_item header_menu_help">帮助中心</span>
                            </el-col>

                        </el-row>
                        <el-row style="padding-top: 20px; font-size: 14px;">
                            <el-col :xs="6" :sm="4" :md="5" :lg="8">
                                <span class="header_menu_item header_menu_help">品质保证</span>
                            </el-col>

                        </el-row>

                    </el-col>
                </el-col>
            </el-col>
        </el-row>
    </div>
</template>
<style scoped>
.header {
  background-color: #f2f2f2;
  border-bottom: 1px solid #e5e5e5;
  width: 100%;
  height: 100%;
  font-size: 12px;
  line-height: 32px;
}
.header_items {
  cursor: pointer;
  color: #999;
  text-align: center;
}
.header_items:hover {
  color: rgb(247, 34, 34);
}
.header_menu {
  background-color: white;
  border-right: 1px solid #e5e5e5;
  border-left: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
}
.header_menu_item {
  cursor: pointer;
}
.header_menu_market:hover {
  color: #409eff;
}
.header_menu_hot:hover {
  color: #f97901;
}
.header_menu_user:hover {
  color: #22e019;
}
.header_menu_help:hover {
  color: #999;
}
.menu_expand {
  z-index: 99999;
  position: absolute;
  width: 100%;
}
</style>
<script>
export default {
  data() {
    return {
      expand: false
    };
  },
  methods: {
    menu_expand() {
      this.expand = !this.expand;
    }
  }
};
</script>
