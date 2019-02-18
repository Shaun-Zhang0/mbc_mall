<template>
    <div>

        <el-row class="product_title">
            <el-col :span="5" :offset="1" style="font-size:20px;">潮电酷玩 ELECTRONICS</el-col>
            <el-col :span="3">
                <span class="line_title_more" style="font-size:12px;">更多>></span>
            </el-col>
        </el-row>
        <el-row style="padding-top:25px;">
            <el-col :span="4" :offset="3">
                <div style="position: relative;">
                    <el-col :class="{'can':display}" @click.native="a_show" :span="24" class="card" @mouseenter.native="show = true " @mouseleave.native="show = false">
                        <img src="../../../../public/img/product1.jpg" class="image">
                        <div style="padding: 14px;">
                            <span>Newsmy纽曼移动硬盘500G</span>
                            <div class="bottom clearfix">
                                <time class="time"></time>
                            </div>
                            <div style="font-size:12px;color:grey">
                                纽曼厂商
                            </div>
                            <div style="text-align:center; color: rgb(253, 40, 40);">
                                ￥150
                            </div>
                        </div>
                    </el-col>
                    <el-col v-show="show" class="show">
                        <button @click="aaa" class="buttonline">sadsad</button>
                    </el-col>
                </div>
            </el-col>
        </el-row>

    </div>
</template>
<style scoped>
.buttonline {
  top: 50%;
  opacity: 100%;
  z-index: 555;
  position: absolute;
    pointer-events: auto;
}
.product_title {
  background-color: aquamarine;
  height: auto;
  padding-top: 5px;
  padding-bottom: 5px;
}
.line_title_more {
  cursor: pointer;
}
.line_title_more:hover {
  color: rgb(253, 40, 40);
}
.image {
  width: 100%;
}
.show {
  position: absolute;
  z-index: 100;
  background-color: #ebeef5;
  height: 350px;
  pointer-events: none;
}


.card {
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height: 350px;
  position: absolute;
  z-index: 1;
}
.card:hover {
  /* pointer-events: auto; */
}
.can{
     pointer-events: none;
}
</style>
<script>
export default {
  data() {
    return {
      show: false,
      display: false
    };
  },
  methods: {
    a_show(event) {
      event.stopPropagation();
    },
    aaa(event) {
      alert(2);
      event.preventDefault();
    }
  }
};
</script>
