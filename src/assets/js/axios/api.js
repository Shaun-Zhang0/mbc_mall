/**
 * api接口统一管理
 */
import { get, post } from "./../../../plugins/axios";
import axios from "./../../../plugins/axios";
import QS from "qs"; // 引入qs模块，用来序列化post类型的数据，后面会提到

/**
 * 厂商管理登录api
 *
 */
export const apiLogin = params => {
  return post("api/adminLogin/login", QS.stringify(params));
};


/**
 * 获取厂商信息api
 */
export const apiSearchInfo = params => {
  return post("api/adminLogin/getAdminTo", params);
};

/**
 * 发布商品信息api
 *
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
  return post("api/product/product/findByCondition",params);
}

/**
 * 商品列表跳转页面api
 */
export const apiCurrentChange = params => {
  return post("api/product/product/findByCondition",params);
}

/**
 * 编辑商品api
 */
export const apiEditProduct = params => {
  return post("api/product/product/update",params);
}
