/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-01-25 16:40:38 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-01-27 11:54:09
 */

<template>
    <div id="abc" style="width: 100%;height:100%;">
        <div style="height: 50px;background-color: hsla(0, 0%, 50%, 0.1);padding-left: 10px;">
            <el-breadcrumb separator-class="el-icon-arrow-right" style="line-height:50px;">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>账号管理</el-breadcrumb-item>
                <el-breadcrumb-item>修改个人信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="border" style="
        ">
            <el-row style="font-size: 28px;text-align: center;  margin-bottom: 100px;margin-top: 20px;">用户个人信息</el-row>
            <el-form ref="form" :model="form" label-width="80px">
                <el-row>
                    <el-col :span="6" :offset="5">
                        <el-form-item label="厂商id">
                            {{form.id}}
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="厂商名称">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="6" :offset="5">
                        <el-form-item label="法人">
                            <el-input v-model="form.legal_person"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="联系方式">
                            <el-input v-model="form.lperson_phone"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12" :offset="5">
                        <el-form-item label="电子邮箱">
                            <el-input type="emali" v-model="form.emali"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12" :offset="5">
                        <el-form-item label="主营范围">
                            <el-input v-model="form.business_range"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12" :offset="5">
                        <el-form-item label="厂商地址">
                            <el-input v-model="form.address"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6" :offset="5">
                        <el-form-item label="厂商状态">
                            <span>{{form.status}}</span>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 50px;">
                    <el-col :span="6" :offset="9">
                        <el-form-item>
                            <el-button type="primary">修改</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </div>
</template>
<style >
.border {
  border: 2px solid #ccc;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 5px;
  -moz-box-shadow: 5px 5px 5px #888888;
  box-shadow: 10px 10px 5px #888888;
  height: 100%;
}
</style>
<script>
export default {
  data() {
    return {
      form: {
        id: "123", //厂商id
        name: "养鸡场", //厂商名称
        business_range: "卖各种鸡", //经营范围
        address: "广东省广州市虐塘路 09号 谎小区 111号楼 7单元 616室", //厂商地址
        legal_person: "郑扬志", //法人或者联系人
        lperson_phone: "1234579845", //联系方式
        emali: "472184137@qq.com",
        status: "正常"
      }
    };
  }
};
</script>
