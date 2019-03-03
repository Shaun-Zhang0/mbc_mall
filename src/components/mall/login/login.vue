/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-02-25 16:15:05 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-03-02 19:42:13
 */

<template>
    <el-row>

        <el-dialog width="300px" title="登录" :visible.sync="dialogForLogin" :lock-scroll=false>
            <el-form :model="form">
                <el-form-item label="登录账号">
                    <el-input v-model="form.name" placeholder="请输入登录账号"></el-input>
                </el-form-item>
                <el-form-item label="登录密码">
                    <el-input v-model="form.password" type="password" placeholder="请输入登录密码"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button class="login_button" type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>

    </el-row>
</template>
<style scoped>
.login_button {
  width: 100%;
}
</style>
<script>
export default {
  data() {
    return {
      dialogForLogin: false,
      form: {
        name: "",
        password: ""
      }
    };
  }
};
</script>   
