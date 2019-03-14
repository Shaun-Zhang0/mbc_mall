/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-02-14 16:30:00 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-03-14 14:50:41
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
    <div>
      <indexFooter></indexFooter>
    </div>
    <indexTotop></indexTotop>
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
import indexFooter from "./../index/footer.vue";
import indexTotop from "./../index/to_top.vue";
export default {
  components: {
    indexHeader: indexHeader,
    indexCarousel: indexCarousel,
    indexSearch: indexSearch,
    indexMenu: indexMenu,
    indexProductline: indexProductline,
    indexFooter: indexFooter,
    indexTotop: indexTotop
  },
  created() {
    window.scrollTo(0, 0);
  }
};
</script>
