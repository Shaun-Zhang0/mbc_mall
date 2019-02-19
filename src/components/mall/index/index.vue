/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-02-14 16:30:00 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-02-16 16:32:16
 */
<template>
  <div>
    <indexHeader></indexHeader>
    <indexSearch></indexSearch>
    <div>
      <indexCarousel></indexCarousel>
    </div>
    <div>
      <index-productline></index-productline>
    </div>
  </div>
</template>
<style scoped>

</style>
<script>
import indexHeader from "./../index/header";
import indexCarousel from "./../index/carousel";
import indexSearch from "./../index/search";
import indexMenu from "./../index/menu";
import indexProductline from "./../index/product_line";
export default {
  components: {
    indexHeader: indexHeader,
    indexCarousel: indexCarousel,
    indexSearch: indexSearch,
    indexMenu: indexMenu,
    indexProductline: indexProductline
  }
};
</script>
