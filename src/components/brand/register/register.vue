/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-02-12 17:38:08 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-02-28 18:05:14
 */

<template>
    <div class="main">
        <el-row class="title">
            <el-col :span="6" :offset="9">
                跨境平台—厂商入驻
            </el-col>
        </el-row>

        <el-row class="input_area">
            <el-col style="background-color:white" class="form_border" :span="16" :offset="4">
                <el-col :span="18" style="border-right: 1px solid #ccc;margin-bottom:20px;">
                    <el-form :rules="rules" :model="register" ref="register">
                        <el-row>
                            <el-col :span="24">

                                <el-row>
                                    <el-col :span="14" :offset="5">
                                        <el-form-item label="厂商名称" prop="register_name">
                                            <el-input class="input-with-select" v-model="register.register_name" placeholder="请输入厂商名称" @keydown.enter.native="submitForm('register')">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="14" :offset="5">
                                        <el-form-item label="绑定邮箱" prop="register_email">
                                            <el-input class="input-with-select" v-model="register.register_email" placeholder="请输入绑定邮箱，用于登录的凭证" @keydown.enter.native="submitForm('register')">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="14" :offset="5">
                                        <el-form-item label="登录密码" prop="register_pwd">
                                            <el-input class="input-with-select" type="password" v-model="register.register_pwd" placeholder="请输入登录密码" @keydown.enter.native="submitForm('register')">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="14" :offset="5">
                                        <el-form-item label="确认登录密码" prop="register_checkpwd">
                                            <el-input class="input-with-select" type="password" v-model="register.register_checkpwd" placeholder="请再次输入登录密码" @keydown.enter.native="submitForm('register')">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-row>
                                    <el-col :span="14" :offset="5">
                                        <el-form-item label="法人" prop="register_lperson">
                                            <el-input class="input-with-select" v-model="register.register_lperson" placeholder="请输入厂商法人" @keydown.enter.native="submitForm('register')">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-row>
                                    <el-col :span="14" :offset="5">
                                        <el-form-item label="联系方式" prop="register_phone">
                                            <el-input v-model="register.register_phone " placeholder="请输入联系方式" @keydown.enter.native="submitForm('register')">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="14" :offset="5">
                                        <el-form-item label="主营范围" prop="register_brange">
                                            <el-input v-model="register.register_brange" placeholder="请输入主营范围" @keydown.enter.native="submitForm('register')">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="14" :offset="5">
                                        <el-form-item label="厂商地址" prop="register_address">
                                            <el-input v-model="register.register_address" placeholder="请输入厂商地址" @keydown.enter.native="submitForm('register')">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-row style="padding-top:10px;top:0">
                                    <el-col :span="12" :offset="6">
                                        <el-form-item>
                                            <el-button style="width:100%" type="primary" @click="submitForm('register')">注册</el-button>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                            </el-col>

                        </el-row>

                    </el-form>
                </el-col>
                <el-col :span="6" style="text-align:center;height: 300px;">
                    <el-row style="color:#999999;padding-top:30px;font-size:12px;">已有厂商账号，请直接登录</el-row>
                    <el-row style="padding-top: 30px;">
                        <el-col :span="20" :offset="2">
                            <router-link to="/brand/login" tag="span">
                                <el-button type="success" style="width: 100%;">登录</el-button>
                            </router-link>
                        </el-col>
                    </el-row>

                </el-col>
            </el-col>
        </el-row>

        <el-row class="footer">
            <el-col :span="6" :offset="6">Copyright：
                <span class="iconfont icon-banquan"></span>猿聚团队</el-col>
            <el-col :span="6">version 0.1.0</el-col>
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
  height: 100%;
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
  height: auto;
}
.form_border {
  background-color: white;
  -moz-box-shadow: 0px 0px 5px #333333;
  -webkit-box-shadow: 0px 0px 5px #333333;
  box-shadow: 0px 0px 5px #333333;
  padding-top: 30px;
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
    //电话格式验证
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("联系方式不得为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入正确的联系方式格式"));
        } else {
          callback();
        }
      }, 100);
    };
    var checkPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.register.register_pwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    // 数据返回
    return {
      show_close: false, //不显示对话框的关闭按钮
      verify_status: false, //展示验证成功
      verify_show: false, //验证框的显示
      check_num: null, //滑块的数值
      disabled: false, //登录验证
      register: {
        register_name: "", //厂商名称
        register_email: "", //邮箱绑定
        register_pwd: "", //登录密码
        register_brange: "", //营业范围
        register_address: "", //厂商地址
        register_phone: "", //联系方式
        register_lperson: "", //厂商法人
        register_checkpwd: ""
      },

      rules: {
        register_email: [
          { validator: checkEmail, required: true, trigger: "blur" } //邮箱的验证规则
        ],
        register_pwd: [
          { required: true, message: "登录密码不得为空", trigger: "blur" } //密码的验证规则
        ],
        register_checkpwd: [
          { required: true, validator: checkPwd, trigger: "blur" } //密码的验证规则
        ],
        register_name: [
          { required: true, message: "厂商名称不得为空", trigger: "blur" } //厂商名称的验证规则
        ],
        register_lperson: [
          { required: true, message: "法人不得为空", trigger: "blur" } //厂商名称的验证规则
        ],
        register_phone: [
          { required: true, validator: checkPhone, trigger: "blur" }
        ],
        register_brange: [
          { required: true, message: "主营范围不得为空", trigger: "blur" } //厂商名称的验证规则
        ],
        register_address: [
          { required: true, message: "厂商地址不得为空", trigger: "blur" } //厂商名称的验证规则
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
            this.$router.push({ path: "/" }); /**路由跳转到系统首页 */
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
