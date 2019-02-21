<template>
    <div>
        <el-row class="footer_iconline">
            <el-col :xs="1" :sm="2" :md="1" :lg="1" :xl="1">&nbsp;</el-col>
            <el-col :xs="4" :sm="5" :md="4" :lg="5" :xl="4">
                <span class="footer_icon iconfont icon-num-1"></span> 品类齐全，轻松购物</el-col>
            <el-col :xs="2" :sm="1" :md="2" :lg="1" :xl="2">&nbsp;</el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="5" :xl="4">
                <span class="footer_icon iconfont icon-2"></span>多仓直发，极速配送</el-col>
            <el-col :xs="2" :sm="1" :md="2" :lg="1" :xl="2">&nbsp;</el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="5" :xl="4">
                <span class="footer_icon iconfont icon-3"></span>正品行货，精致服务</el-col>
            <el-col :xs="2" :sm="1" :md="2" :lg="1" :xl="2">&nbsp;</el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="5" :xl="4">
                <span class="footer_icon iconfont icon-icon-test1"></span>天天低价，畅选无忧</el-col>

        </el-row>

        <el-row class="footer">
            <el-col :xs="2" :sm="2" :md="2" :lg="3" :xl="2">&nbsp;</el-col>
            <el-col :xs="3" :sm="3" :md="4" :lg="3" :xl="3" class="col">
                <el-row>
                    <el-col :span="24" style="font-size:2.5vh;">购物指南</el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <ul class="footer_ul">
                            <li><span>购物流程</span></li>
                            <li><span>常见问题</span></li>
                            <li><span>免费注册</span></li>
                            <li><span>联系客服</span></li>
                        </ul>
                    </el-col>

                </el-row>

            </el-col>

            <el-col :xs="3" :sm="3" :md="2" :lg="2" :xl="3">&nbsp;</el-col>
            <el-col :xs="3" :sm="3" :md="4" :lg="3" :xl="3" class="col">
                <el-row>
                    <el-col :span="24" style="font-size:2.5vh;">支付方式</el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <ul class="footer_ul">
                            <li><span>货到付款</span></li>
                            <li><span>在线支付</span></li>
                            <li><span>分期付款</span></li>
                        </ul>
                    </el-col>

                </el-row>

            </el-col>
            <el-col :xs="3" :sm="3" :md="2" :lg="2" :xl="3">&nbsp;</el-col>
            <el-col :xs="3" :sm="3" :md="4" :lg="3" :xl="3" class="col">
                <el-row>
                    <el-col :span="24" style="font-size:2.5vh;">售后服务</el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <ul class="footer_ul">
                            <li><span>售后政策</span></li>
                            <li><span>退换货</span></li>
                            <li><span>退款说明</span></li>
                            <li><span>取消订单</span></li>
                        </ul>
                    </el-col>

                </el-row>

            </el-col>
            <el-col :xs="3" :sm="3" :md="2" :lg="2" :xl="3">&nbsp;</el-col>
            <el-col :sm="4" :xs="3" :md="4" :lg="3" :xl="3" class="col">
                <el-row>
                    <el-col :span="24" style="font-size:2.5vh;">商家服务</el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <ul class="footer_ul">
                            <li><span>商家中心</span></li>
                            <li><span>商家入驻</span></li>
                            <li><span>运营规则</span></li>
                            <li><span>联系客服</span></li>
                        </ul>
                    </el-col>

                </el-row>

            </el-col>

        </el-row>
        <el-row class="version">
            <el-col :xs="5" :sm="9" :md="1" :lg="6" :xl="6">&nbsp;</el-col>
            <el-col :xs="7" :sm="6" :lg="6" :xl="6">
                <span class="iconfont icon-banquan"></span>开发团队：猿聚</el-col>
            <el-col :xs="7" :sm="6" :lg="6" :xl="6">version: 0.1.0</el-col>
        </el-row>

    </div>
</template>
<style scoped>
.footer_iconline {
  padding-top: 5vh;
  padding-bottom: 5vh;
  font-size: 2.5vh;
}
.footer_icon {
  font-size: 4vh;
  color: #ff0036;
}
.footer {
  background-color: #f2f2f2;
  height: 100%;
}
.col {
  /* background-color: pink; */
  height: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  color: #999;
}
.footer_ul {
  list-style: none;
  padding-left: 0;
}
.footer_ul li {
  padding-top: 6px;
  font-size: 2vh;
}
.footer_ul li span{
    cursor: pointer;
}
.footer_ul li span:hover{
    color: #ff0036;
}
.version {
  /* padding-top: 20px; */
  background-color: #f2f2f2;
  height: 5vh;
  line-height: 5vh;
  color: #999;
  font-size: 2vh;
  border-top: 0.2vh solid #dedede;
  text-align: center;
}
.icon-banquan {
  font-size: 2vh;
}
</style>
<script>
export default {};
</script>
