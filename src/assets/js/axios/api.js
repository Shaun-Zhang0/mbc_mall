/**
 * api接口统一管理
 */
import { post, get } from "./../../../plugins/axios";
import axios from "./../../../plugins/axios";
import QS from "qs"; // 引入qs模块，用来序列化post类型的数据，后面会提到

/**
 * 厂商管理登录api
 */
export const apiLogin = params => {
  return post("api/login/adminLogin/login", QS.stringify(params));
};

/**
 * 获取厂商信息api
 */
export const apiSearchInfo = params => {
  return post("api/login/adminLogin/getAdminTo", params);
};

/**
 * 发布商品信息api
 */
export const apiReleaseProduct = token => {
  return post("api/product/product/save", params);
};

/**
 * 商品搜索api
 */
export const apiSearchProduct = params => {
  return post("api/product/product/findByCondition", params);
};

/**
 * 商品列表初始化api
 */
export const apiproductInit = params => {
  return post("api/product/product/findByCondition", params);
};

/**
 * 展示商品条数api
 */
export const apiSizeChange = params => {
  return post("api/product/product/findByCondition", params);
};

/**
 * 商品列表跳转页面api
 */
export const apiCurrentChange = params => {
  return post("api/product/product/findByCondition", params);
};

/**
 * 编辑商品api
 */
export const apiEditProduct = params => {
  return post("api/product/product/update", params);
};

/**
 * 初始化订单列表api
 */
export const apiOrderinit = params => {
  return post("api/order/order/findOrderByCondition", params);
};

/**
 * 查看订单详情api
 * @param id [订单id]
 */
export const apiOrderDetails = id => {
  return get("api/order/order/findOne/" + id);
};

/**
 * 搜索订单api
 */
export const apiSearchOrder = params => {
  return post("api/order/order/findOrderByCondition", params);
};

/**
 * 订单页数跳转api
 */
export const apiPageNum = params => {
  return post("api/order/order/findOrderByCondition", params);
};
/**
 * 订单条数跳转api
 */
export const apiPageSize = params => {
  return post("api/order/order/findOrderByCondition", params);
};
/**
 * 厂商入驻验证邮箱是否可用api
 */
export const apibrandemail = params => {
  return post(
    "api/login/login/brand/email",
    QS.stringify(params)
  );
};
