/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-02-14 17:01:58 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-02-14 22:08:46
 */
<template>
    <div>
        <el-row class="row">
            <el-col :xs="8" :sm="10" :md="10" :lg="1" :xl="1">&nbsp;</el-col>
            <el-col :xs="16" :sm="14" :md="14" :lg="4" style="height:100%">
                <span style="font-size: 30px;">跨境平台</span>
            </el-col>
            <el-col :xs="2" :sm="7" :md="7" :lg="3" :xl="3">&nbsp;</el-col>
            <el-col :xs="20" :sm="10" :md="10" :lg="8" :xl="9" class="form">
                <el-row>
                    <el-input class="input">
                        <el-button type="success" class="el-icon-search" slot="append">搜索</el-button>
                    </el-input>
                </el-row>
                <el-row style="line-height:30px;">
                    <el-col :sm="4" :md="4" :lg="3" :xs="4" class="suggest" v-for="words in suggest_word">
                        <span class="suggest_item" style="">{{words.word}}</span>
                    </el-col>
                </el-row>
            </el-col>

        </el-row>
    </div>
</template>
<style scoped>
.row {
  max-height: 150px;
  line-height: 100px;
  width: 100%;
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
.suggest_item {
  cursor: pointer;
}
.suggest_item:hover {
  color: #ccc;
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
