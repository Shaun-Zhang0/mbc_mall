/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-02-14 16:30:00 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-02-14 21:58:13
 */
<template>
    <div>
        <indexHeader></indexHeader>
         <indexSearch></indexSearch>
        <indexCarousel></indexCarousel>
       
    </div>
</template>
<style scoped>

</style>
<script>
import indexHeader from "./../index/header";
import indexCarousel from "./../index/carousel";
import indexSearch from "./../index/search";
export default {
  components: {
    indexHeader: indexHeader,
    indexCarousel: indexCarousel,
    indexSearch: indexSearch

  }
};
</script>
