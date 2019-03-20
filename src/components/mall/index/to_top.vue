/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-03-20 14:57:18 
 * @Last Modified by:   Shaun.Zhang 
 * @Last Modified time: 2019-03-20 14:57:18 
 */

<template>
  <el-tooltip  effect="dark" content="返回顶部" placement="bottom-start">
    <el-button class="top" icon="el-icon-arrow-up" :style="{visibility : display}" @click="action_top" circle></el-button>
    
  </el-tooltip>
  
</template>
<style>
.top {
  position: fixed;
  bottom: 20%;
  right: 10px;
  z-index: 20000;
  visibility: hidden;
  
}

</style>
<script>
export default {
  data() {
    return {
      top_height: null,
      display: ""
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); // 离开页面 关闭监听 不然会报错
  },
  methods: {
    // 获取滚动条高度
    handleScroll() {
      this.top_height = window.scrollY;
      if (this.top_height <= 400) {
        this.display = "hidden";
      } else {
        this.display = "visible";
      }
    },
    action_top() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>
