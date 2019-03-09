
/**
 * api接口统一管理
 */
import { get, post } from "./../../../plugins/axios";
import QS from "qs"; // 引入qs模块，用来序列化post类型的数据，后面会提到
/**
 * 厂商管理登录api
 *
 */
export const apiLogin = params => {
  return post("api/adminLogin/login",QS.stringify( params));
};

/**
 * 获取厂商名称api
 *
 */
export const apiSearchName = params => {
  return post("api/adminLogin/getAdminTo");
};

/**
 * 获取厂商信息api
 */
export const apiSearchInfo = params => {
  return post("api/adminLogin/getAdminTo");
};

/**
 * 发布商品信息api
 * 
 */
export const apiReleaseProduct = params => {
    return post("api/product/product/save", params);
}

