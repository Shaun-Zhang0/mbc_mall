/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-01-25 16:40:38 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-02-12 18:15:38
 */

<template>
    <div id="container" style="width: 100%;height:100%;">
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right" style="line-height:50px;">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>账号管理</el-breadcrumb-item>
                <el-breadcrumb-item>修改个人信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="border">
            <el-row class="info_title">用户个人信息</el-row>
            <el-form :rules="rules" ref="form" :model="form" label-width="80px">
                <el-row>
                    <el-col :span="6" :offset="5">
                        <el-form-item label="厂商id">
                            {{form.id}}
                        </el-form-item>
                    </el-col>

                    <el-col :span="6">
                        <el-form-item label="厂商状态">
                            <span>{{form.status}}</span>
                        </el-form-item>
                    </el-col>

                </el-row>
                <el-row>
                    <el-col :span="12" :offset="5">
                        <el-form-item label="绑定邮箱">
                            <!-- <el-input class="input-with-select" v-model="form.email" placeholder="请输入绑定邮箱，用于登录的凭证" @keydown.enter.native="submitForm('register')">
                            </el-input> -->
                            {{form.email}}
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12" :offset="5">
                        <el-form-item label="厂商名称" prop="name">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="6" :offset="5">
                        <el-form-item label="法人" prop="legal_person">
                            <el-input v-model="form.legal_person"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="联系方式" prop="lperson_phone">
                            <el-input v-model="form.lperson_phone"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <!-- <el-row>
                    <el-col :span="12" :offset="5">
                        <el-form-item label="主营范围" prop="business_range">
                            <el-input v-model="form.business_range"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row> -->
                <el-row>
                    <el-col :span="12" :offset="5">
                        <el-form-item label="厂商地址" prop="address">
                            <el-input v-model="form.address"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row style="margin-top: 50px;">
                    <el-col :span="6" :offset="9">
                        <el-form-item>
                            <el-button type="primary" @click="edit('form')">确认修改</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </div>
</template>
<style scoped>
.border {
  border: 2px solid #ccc;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 5px;
  -moz-box-shadow: 5px 5px 5px #888888;
  box-shadow: 10px 10px 5px #888888;
  height: 100%;
}
.info_title {
  font-size: 28px;
  text-align: center;
  margin-bottom: 100px;
  margin-top: 20px;
}
</style>
<script>
export default {
  data() {
    return {
      show_emali: false,
      emali_status: false,
      token:"",
      form: {
        id: "123", //厂商id
        name: "养鸡场", //厂商名称
        business_range: "卖各种鸡", //经营范围
        address: "广东省广州市虐塘路 09号 谎小区 111号楼 7单元 616室", //厂商地址
        legal_person: "郑扬志", //法人或者联系人
        lperson_phone: "1234579845", //联系方式
        email: "472184137@qq.com",
        status: "正常"
      },
      rules: {
        name: [
          { message: "厂商名称不能为空", required: true, trigger: "blur" } //厂商名称的验证规则
        ],
        legal_person: [
          { message: "法人不能为空", required: true, trigger: "blur" } //法人的验证规则
        ],
        lperson_phone: [
          { message: "联系方式不能为空", required: true, trigger: "blur" } //联系方式的验证规则
        ],
        business_range: [
          { message: "经营范围不能为空", required: true, trigger: "blur" } //经营范围的验证规则
        ],
        address: [
          { message: "厂商地址不能为空", required: true, trigger: "blur" } //厂商的验证规则
        ]
      }
    };
  },
  mounted () {
      this.token = this.Cookie.getCookie("token");
      console.log(this.token);
    this.$axios({
      method: "post",
      url: "http://localhost:9000/api/adminLogin/getAdminTo",
      headers: {
        token: this.token
      }
    })
      .then(res => {
        console.log(res.data);
        this.form.name = res.data.data.name;
        this.form.id = res.data.data.adminId;
        this.form.address = res.data.data.address;
        this.form.legal_person = res.data.data.username;
        if(res.data.data.state == 1){
            this.form.status = "正常"
        }else{
            this.form.status = "冻结"
        };
        this.form.email = res.data.data.email;
        this.form.lperson_phone = res.data.data.phone;


      })
      .catch(error => {
        // console.info(error.request.status);
       
     });  
  },
  methods: {
    edit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$confirm("此操作将会修改您的个人信息, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          })
            .then(() => {
              this.$axios({
                method: "post",
                url: "",
                data: {
                  id: this.form.id,
                  name: this.form.name,
                  phone: this.form.lperson_phone,
                  address: this.form.address
                  //   business_range: this.form.business_range //   厂商经营范围
                }
              }).then(res => {
                {
                  this.$message({
                    type: "success",
                    message: "个人信息修改成功!"
                  });
                  this.$router.push({ path: "/brand" });
                } /**路由跳转到系统首页 */
              });
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "已取消修改"
              });
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
