<template>
    <div class="main">
        <el-row class="title">跨境平台—厂商管理系统</el-row>
        <el-row class="input_area">
            <el-form>
                <el-row>
                    <el-col :span="4" :offset="10">
                        <el-form-item label="邮箱" v-model="login_email">
                            <el-input placeholder="请输入登录邮箱"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="4" :offset="10">
                        <el-form-item label="密码" v-model="login_pwd">
                            <el-input type="password" placeholder="请输入登录密码"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="4" :offset="10">
                        验证
                        <el-slider v-model="check_num"></el-slider>
                        <span style="color:#D7E1EB">请将滑块移动到 {{verify}}</span>

                    </el-col>
                </el-row>
                <el-row style="color:#D7E1EB">
                    <el-col :span="4" :offset="10">
                        目前 {{check_num}} {{verify_check}}
                        <span v-if="verify_status" class="el-icon-circle-check-outline" style="padding-left:10px;color:#D7E1EB">匹配</span>
                    </el-col>
                </el-row>
                <el-row style="padding-top:20px;text-align:right;font-size:12px;cursor: pointer">
                    <el-col :span="4" :offset="10">
                        忘记密码?
                    </el-col>
                </el-row>
                <el-row style="padding-top:20px;text-align:right;font-size:12px;cursor: pointer">
                    <el-col :span="4" :offset="10">
                        还没有账号？赶紧申请一个吧
                    </el-col>
                </el-row>

                <el-row style="padding-top:20px;">
                    <el-col :span="3" :offset="11">
                        <el-form-item>
                            <el-button type="primary">登录</el-button>
                            <el-button>清空</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </el-row>
    </div>
</template>
<style scoped>
body {
  padding: 0;
  margin: 0;
}
.el-form-item__label {
  color: white;
}
.title {
  padding-top: 100px;
  font-size: 40px;
  text-align: center;
}
.input_area {
  padding-top: 50px;
}
</style>
<script>
export default {
  data() {
    return {
      verify_status: false,
      verify_num: null,
      check_num: null,
      login_email: "",
      login_pwd: "",
      note: {}
    };
  },
  computed: {
    verify() {
      var i = Math.random();
      this.verify_num = parseInt(i * 100) + 1;
      return this.verify_num;
    },
    verify_check() {
      if (this.check_num == this.verify_num) {
        this.verify_status = true;
      } else {
        this.verify_status = false;
      }
    }
  },
  methods: {},
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#0BC9C9");
  },
  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  }
};
</script>
