/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-03-01 19:02:25 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-03-02 18:44:21
 */
<template>
    <el-row>
        <el-row style="height:300px;margin-top:10px;">
            <!-- <el-row style="font-size:2.5vh;height:50px;line-height:50px;margin: 0% 3% 0%;border-bottom:2px solid #ccc;">
                <el-col :span="12" :offset="2">
                    <span>购买成功 </span>
                </el-col>
            </el-row> -->
            <el-row style="border-radius:10px;border-top: 2px solid #ccc;border-bottom: 2px solid #ccc;height:50px;
                                       line-height:50px;background-color:#f3f3f3;
                                box-shadow:0 1px 7px rgba(0,0,0,.06)">
                <el-col style="font-size:2.5vh;color:#626262" :span="12" :offset="2">
                    支付
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="24" style="text-align:center;height:300px;line-height:300px;">
                    <el-row>
                        <!-- <span class="el-icon-circle-check-outline"></span> -->
                        <el-col :span="12" :offset="6" style="height:50px;font-size: 30px;color:#67c23a">
                            <span class="el-icon-circle-check-outline"></span>
                            购买成功</el-col>
                    </el-row>

                    <el-row>
                        <span>
                            <router-link to="/mall/index" tag="span">
                                <el-button type="primary">{{totalTime}} 秒后返回商城主页</el-button>
                            </router-link>
                        </span>
                    </el-row>
                </el-col>
            </el-row>

        </el-row>
    </el-row>
</template>
<style scoped>
</style>
<script>
export default {
  data() {
    return {
      totalTime: 5
    };
  },
  created() {
    let clock = window.setInterval(() => {
      this.totalTime--;
      if (this.totalTime == 0) {
        this.$router.push("/mall/index");
      }
    }, 1000);
  }
};
</script>
