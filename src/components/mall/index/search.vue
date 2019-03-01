/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-02-14 17:01:58 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-02-28 17:55:15
 */
<template>
  <div>
    <el-row class="row">
      <el-col :xs="8" :sm="10" :md="10" :lg="1" :xl="1">&nbsp;</el-col>
      <el-col :xs="16" :sm="14" :md="14" :lg="4" style="height:100%">
        <router-link to="/mall/index" tag="span">
          <span style="font-size: 30px;color: rgb(253, 40, 40);cursor:pointer;">跨境商城</span>
        </router-link>
      </el-col>
      <el-col :xs="2" :sm="7" :md="7" :lg="3" :xl="3">&nbsp;</el-col>
      <el-col :xs="20" :sm="10" :md="10" :lg="8" :xl="9" class="form">
        <el-row>
          <el-input class="input search_input" placeholder="搜索 商品/厂商">
            <el-button class="el-icon-search" style="background-color:rgb(253, 40, 40);color:white;" slot="append">搜索</el-button>
          </el-input>
        </el-row>
        <el-row style="margin-top:-20px;">
          <el-col :xs="5" :sm="4" :md="4" :lg="3" :xl="3" class="suggest" v-for="words in suggest_word">
            <span class="suggest_item" style="">{{words.word}}</span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<style >
.row {
  max-height: 150px;
  line-height: 100px;
  width: 100%;
  margin-bottom: 80px;
}
.form {
  height: 100%;
  line-height: 90px;
}
.suggest {
  border-right: 1px solid #ccc;
  color: #999;
  text-align: center;
  display: inline-block;
  height: 12px;
  line-height: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 12px;
}
.el-input-group__append {
  background-color: rgb(253, 40, 40) !important ;
  border: none !important;
  border-radius: 0px;
}
.input {
  border: 1px solid rgb(253, 40, 40);
  border-radius: 4px;
}
.search_input .el-input__inner {
  border: none !important;
}
.suggest_item {
  cursor: pointer;
}
.suggest_item:hover {
  color: #ccc;
}
.search_button {
  background-color: rgb(253, 40, 40);
}
</style>
<script>
export default {
  data() {
    return {
      suggest_word: [
        { word: "苹果手机" },
        { word: "针织衫" },
        { word: "客厅灯" },
        { word: "口红" },
        { word: "摄像头" },
        { word: "运动鞋" }
      ]
    };
  }
};
</script>
