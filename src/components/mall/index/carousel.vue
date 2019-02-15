/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-02-14 14:31:00 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-02-14 22:47:48
 */
<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="slide in slides">
                    <img class="swiper_img" :src="slide.img_url" />
                </div>

            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<style scoped>
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper-container {
  border-top: 3px solid rgb(253, 40, 40);
  width: 100%;
  margin-top: 50px;
}
.swiper_img {
  cursor: pointer;
  width: 100%;
  max-height: 100%;
}
.swiper-slide {
  background: gold;
  height: 500px;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      slides: [
        { id: 1, img_url: require("../../../../public/img/cover1.jpg") },
        { id: 2, img_url: require("../../../../public/img/cover2.jpg") },
        { id: 3, img_url: require("../../../../public/img/cover3.jpg") },
        { id: 4, img_url: require("../../../../public/img/cover4.jpg") }
      ]
    };
  },
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: false,
        clickable: true,
        renderBullet: function(index, className) {
          return (
            '<li style="height:5px; width:25px; border-radius: 0%;" class="' +
            className +
            '">' +
            "</li>"
          );
        }
      }
    });
  }
};
</script>
