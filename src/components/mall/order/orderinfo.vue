/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-03-20 14:57:28 
 * @Last Modified by:   Shaun.Zhang 
 * @Last Modified time: 2019-03-20 14:57:28 
 */

<template>
  <div>
    <index-header></index-header>
    <index-search></index-search>
    <div style="height:350px;border:2px solid #ccc;margin:2%;border-radius:10px;">
      <el-row style="background-color: #eee;font-size:22px;border-radius:10px 10px 0px 0px;height:50px;line-height:50px;">
        <el-col :span="20" :offset="2">订单号： 16451324548 </el-col>
      </el-row>
      <el-row style="margin: 3% 0% 3%; ">
        <el-col :span="24">
          <el-steps :active="2" align-center>
            <el-step title="订单创建" description="2018-12-30 12:20:16"></el-step>
            <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
          </el-steps>
        </el-col>
      </el-row>

    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import IndexHeader from "./../index/header";
import IndexSearch from "./../index/search";

export default {
  components: {
    IndexHeader: IndexHeader,
    IndexSearch: IndexSearch
  }
};
</script>
