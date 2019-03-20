/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-02-25 16:15:05 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-03-17 16:06:53
 */

<template>
    <el-row>

        <el-dialog width="300px" title="登录" :visible.sync="dialogForLogin" :lock-scroll=false>
            <el-form :rules="rules" :model="form" :ref="form">
                <el-form-item label="登录邮箱" prop="name">
                    <el-input v-model="form.name" placeholder="请输入登录邮箱"></el-input>
                </el-form-item>
                <el-form-item label="登录密码" prop="password">
                    <el-input v-model="form.password" type="password" placeholder="请输入登录密码"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button class="login_button" type="primary" @click="submitForm(form)">确 定</el-button>
            </div>
        </el-dialog>

    </el-row>
</template>
<style scoped>
.login_button {
  width: 100%;
}
.el-dialog__wrapper {
  z-index: 555555 !important;
}
</style>
<script>
import { apiMallLogin } from "../../../assets/js/axios/api.js";
export default {
  data() {
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
    return {
      dialogForLogin: false,
      form: {
        name: "",
        password: ""
      },

      rules: {
        name: [
          { validator: checkEmail, required: true, trigger: "blur" } //邮箱的验证规则
        ],
        password: [
          { required: true, message: "登录密码不得为空", trigger: "blur" } //密码的验证规则
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          apiMallLogin({
            email: this.form.name,
            password: this.form.password
          }).then(res => {
            console.log();
            if (res.data.msg == "请求成功") {
              this.axios({
                method: "POST",
                url: "api/login/adminLogin/getAdminTo",
                headers: {
                  token: res.data.data.token
                }
              }).then(rese => {
                this.$emit("storeName", rese.data.data.name);
                this.Cookie.setCookie("storeName", rese.data.data.name);
                this.Cookie.setCookie("storeToken", res.data.data.token);
              });
            } else if (res.data.msg == "邮箱或密码错误") {
              this.$message({
                message: "邮箱或密码错误",
                type: "warning"
              });
            }
          });
        } else {
          console.log("error submit!!");
          // return false;
        }
      });
    }
  }
};
</script>   
