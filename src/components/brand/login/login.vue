/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-02-12 17:38:19 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-02-28 18:04:46
 */

<template>
  <div class="main">
    <el-row class="title">跨境平台—厂商管理系统</el-row>
    <el-row class="input_area">

      <el-form :rules="rules" :model="login" ref="login">
        <el-row>
          <el-col class="form_border" :span="8" :offset="8">
            <el-row>
              <el-col :span="20" :offset="2">
                <el-form-item label="邮箱" prop="login_email">
                  <el-input class="input-with-select" v-model="login.login_email" placeholder="请输入登录邮箱" @keydown.enter.native="submitForm('login')">

                  </el-input>
                </el-form-item>

              </el-col>
            </el-row>

            <el-row>
              <el-col :span="20" :offset="2">
                <el-form-item label="密码" prop="login_pwd">
                  <el-input v-model="login.login_pwd" type="password" placeholder="请输入登录密码" @keydown.enter.native="submitForm('login')">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row style="text-align:right;font-size:12px;">
              <el-col :span="20" :offset="2">
                <span class="click_tips">
                  忘记密码?
                </span>
              </el-col>
            </el-row>
            <el-row style="padding-top:10px;">
              <el-col :span="20" :offset="2">
                <el-form-item>
                  <el-button style="width:100%" type="primary" @click="submitForm('login')">登录</el-button>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row style="text-align:right;font-size:12px;">

              <el-col :span="20" :offset="2" style="padding-bottom:50px;">
                <router-link to="/brand/register" tag="span">
                  <span class="click_tips">还没有账号？赶紧申请一个吧 </span>
                </router-link>
              </el-col>

            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </el-row>

    <el-row class="footer">
      <el-col :span="3" :offset="9">Copyright：
        <span class="iconfont icon-banquan"></span>猿聚团队</el-col>
      <el-col :span="3">version 0.1.0</el-col>
    </el-row>

    <el-dialog title="验证" top=35vh :show-close=show_close :close-on-click-modal=false :modal=false :visible.sync="verify_show" width="30%">
      <span>
        <el-row>
          <el-col :span="24">

            <el-slider v-model="check_num" :disabled="disabled"></el-slider>
            <span>请将滑块移动到 100</span>

          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            目前 {{check_num}} {{verify_check}}
            <br>
            <!-- <span v-if="verify_status" class="el-icon-circle-check-outline" style="color:#D7E1EB">匹配</span> -->
          </el-col>
        </el-row>
        <el-row style="text-align:right">
          <el-button @click="close_dialog">关 闭</el-button>
        </el-row>
      </span>
    </el-dialog>

  </div>

</template>
<style scoped>
body,
html {
  padding: 0;
  margin: 0;
}
.footer {
  width: 100%;
  height: 80px;
  margin-top: 80px;
  border-top: 2px solid #e9e9e9;
  background-color: #f8f8f8;
  text-align: center;
  line-height: 80px;
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
  height: 100%;
}
.form_border {
  background-color: white;
  -moz-box-shadow: 4px 4px 10px #333333;
  -webkit-box-shadow: 4px 4px 10px #333333;
  box-shadow: 4px 4px 10px #333333;
  padding-top: 30px;
}
.click_tips {
  cursor: pointer;
  color: rgb(153, 153, 153);
}
</style>
<script>
export default {
  data() {
    // 邮箱格式验证
    var checkEmail = (rule, value, callback) => {
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      if (!value) {
        return callback(new Error("登录邮箱不得为空"));
      }
      setTimeout(() => {
        if (mailReg.test(value)) {
          callback();
        } else {
          callback(new Error("请输入正确的邮箱格式"));
        }
      }, 100);
    };
    // 数据返回
    return {
      show_close: false, //不显示对话框的关闭按钮
      verify_status: false, //展示验证成功
      verify_show: false, //验证框的显示
      check_num: null, //滑块的数值
      disabled: false, //登录验证
      login: {
        login_email: "", //邮箱登录数据
        login_pwd: "" //登录密码数据
      },

      rules: {
        login_email: [
          { validator: checkEmail, required: true, trigger: "blur" } //邮箱的验证规则
        ],
        login_pwd: [
          { required: true, message: "登录密码不得为空", trigger: "blur" } //密码的验证规则
        ]
      }
    };
  },
  computed: {
    verify_check() {
      /**登录滑块验证  */
      if (this.check_num == 100) {
        this.verify_status = true;
        this.disabled = true;

        setTimeout(() => {
          this.$message({
            message: "验证成功,登陆ing",
            type: "success"
          });
          this.verify_show = false;
          this.check_num = 0;
          setTimeout(() => {
            this.$router.push({ path: "/brand" }); /**路由跳转到系统首页 */
          }, 1200);
        }, 1000);
        return;
      } else {
        this.verify_status = false;
        this.disabled = false;
        return;
      }
    }
  },
  methods: {
    close_dialog() {
      this.verify_show = false;
      this.check_num = 0;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.verify_show = true;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#efefef");
  },
  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  }
};
</script>
