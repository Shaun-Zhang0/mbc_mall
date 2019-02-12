/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-01-25 16:41:27 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-02-12 17:54:38
 */

<template>
    
         <el-aside width="18%">
                    <el-menu default-active="2" class="el-menu-vertical-demo" style="text-align: left;border-right:none" :unique-opened="true">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="iconfont icon-team2" style="font-size: 18px;margin-right: 10px;"></i>
                                <span>账号管理</span>
                            </template>
                            <el-menu-item-group>
                               
                                    <router-link to="/brand/update_info" tag="li"><el-menu-item index="1-1">更改账号信息</el-menu-item></router-link>
                       
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="2">
                                <template slot="title">
                                    <i class="iconfont icon-shangpin" style="font-size: 18px;margin-right: 10px;"></i>
                                    <span>商品管理</span>
                                </template>
                                <el-menu-item-group>
                                        <router-link to="/brand/release_product" tag="li"> <el-menu-item index="2-1">商品发布</el-menu-item></router-link>
                                        <router-link to="/brand/productlist" tag="li"> <el-menu-item index="2-2">商品列表</el-menu-item></router-link>
                                  
                                </el-menu-item-group>
                            </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">
                                <i class="iconfont icon-dingdan" style="font-size: 18px;margin-right: 10px;"></i>
                                <span>订单管理</span>
                            </template>
                          
                            <el-menu-item-group>
                              
                                <router-link to="/brand/orderlist" tag="li"><el-menu-item index="3-1">用户订单列表</el-menu-item></router-link>
                                <router-link to="/brand/Chargerback" tag="li"><el-menu-item index="3-2">用户退单列表</el-menu-item></router-link>
                                
                            </el-menu-item-group>
                        
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title">
                                <i class="iconfont icon-comment" style="font-size: 18px;margin-right: 10px;"></i>
                                <span>评论管理</span>
                            </template>
                          
                            <el-menu-item-group>
                              
                                <router-link to="/brand/edit_order" tag="li"><el-menu-item index="4-1">用户订单列表</el-menu-item></router-link>
                                
                            </el-menu-item-group>
                        
                        </el-submenu>
                        <el-submenu index="5">
                            <template slot="title">
                                <i class="iconfont icon-wuliu2 " style="font-size: 18px;margin-right: 10px;"></i>
                                <span>物流管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="5-1">查询订单物流</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-menu-item index="6">
                                <i class="iconfont icon-cangku2" style="font-size: 18px;margin-right: 10px;"></i>
                                <span slot="title">仓库管理</span>
                            </el-menu-item>
                        <el-menu-item index="7">
                            <i class="iconfont icon-linechart2" style="font-size: 18px;margin-right: 10px;"></i>
                            <span slot="title">销售统计</span>
                        </el-menu-item>
                    </el-menu>
            </el-aside>
</template>
<style>

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height: 100%
  }

</style>
<script>
export default {
    
}
</script>
