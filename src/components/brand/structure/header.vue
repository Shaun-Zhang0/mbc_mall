/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-01-25 16:41:34 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-03-24 14:26:49
 */

<template>
  <header>
    <el-header style="height: 80px;">
      <div style="width: 100%">
        <div style="float: left;list-style: none">
          <router-link to="/brand" tag="li">
            <span style="color: rgb(240, 238, 238);font-size: 14px;cursor: pointer">厂商管理后台</span>
          </router-link>
        </div>
        <!-- 查找 -->
        <span class="el-icon-search"></span>
        <input class="search" type="text" style="height: 30px;border: none;outline:none;
                                          padding-left: 20px;background-color:rgb(0, 128, 128);
                                            color:white;
                                          " placeholder="请输入要查找的内容">
        <!-- 导航栏头像区 -->
        <div style="float: right;margin-right: 1px;line-height: 80px;">
          <span style="cursor: pointer">
            <el-dropdown style="height: 100%;vertical-align: middle;cursor: pointer">
              <span class="el-dropdown-link">
                <div class="el-dropdown-link" style="width:46px;height:46px;border-radius:50px;overflow: hidden;
                                            display: inline-block;vertical-align: middle">
                  <img :src="imgurl" alt="" style="width: 100%;height: 100%">
                </div>
                <div style="display: inline-block;color:rgb(240, 238, 238);padding-left: 20px;">
                  <span>{{name}}</span>
                  <span class="el-icon-caret-bottom" style="color: white"></span>
                </div>
              </span>
              <el-dropdown-menu slot="dropdown">
                <!-- <el-dropdown-item>切换用户</el-dropdown-item> -->
                <span @click="quit">
                  <el-dropdown-item>注销账号</el-dropdown-item>
                </span>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
          <span class="el-icon-message top-menu">
            <el-badge is-dot class="item" style="margin-left: -5px;margin-top: -10px;"></el-badge>
          </span>
          <span class="el-icon-bell top-menu">
            <el-badge is-dot class="item" style="margin-left: -5px;margin-top: -10px;"></el-badge>
          </span>
          <span class="el-icon-rank top-menu" @click="full_screen"></span>
        </div>

      </div>
    </el-header>
  </header>
</template>
<style >
.top-menu {
  cursor: pointer;
  font-size: 20px;
  margin-left: 20px;
  vertical-align: middle;
  color: white;
}
input::-webkit-input-placeholder {
  color: white;
}
.el-header {
  background-color: rgb(0, 128, 128);

  color: rgb(240, 238, 238);
  text-align: center;
  line-height: 80px;
}
</style>

<script>
import { apiSearchInfo } from "./../../../assets/js/axios/api.js";
export default {
  data() {
    return {
      name: "",
      imgurl: require("../../../../public/img/2.jpg")
    };
  },
  mounted() {
    if (this.Cookie.getCookie("brandtoken")) {
      apiSearchInfo(
        {},
        {
          headers: { token: this.Cookie.getCookie("brandtoken") }
        }
      )
        .then(res => {
          this.name = res.data.data.name;
          this.Cookie.setCookie("brandid", res.data.data.brandId);
        })
        .catch(error => {});
    } else {
      console.log("未登录");
    }
  },
  methods: {
    full_screen() {
      var isFullscreen =
        document.fullScreenElement || //W3C
        document.msFullscreenElement || //IE11
        document.mozFullScreenElement || //火狐
        document.webkitFullscreenElement || //谷歌
        false;
      if (!isFullscreen) {
        var el = document.documentElement;
        if (el.requestFullscreen) {
          el.requestFullscreen();
        } else if (el.mozRequestFullScreen) {
          el.mozRequestFullScreen();
        } else if (el.webkitRequestFullscreen) {
          el.webkitRequestFullscreen();
        } else if (el.msRequestFullscreen) {
          el.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    quit() {
      this.$confirm("是否确认直销该账号?", "注销", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.Cookie.delCookie("brandtoken");
          this.Cookie.delCookie("brandid");

          if (
            this.Cookie.getCookie("brandtoken") == null &&
            this.Cookie.getCookie("brandid") == null
          ) {
            this.$message({
              type: "success",
              message: "注销成功!"
            });
            setTimeout(() => {
              this.$router.push("/brand/login");
            }, 1000);
          }
        })
        .catch(error => {
          this.$message({
            type: "info",
            message: "取消注销操作!"
          });
        });
    }
  }
};
</script>