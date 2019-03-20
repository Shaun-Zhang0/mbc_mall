/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-03-20 14:53:21 
 * @Last Modified by:   Shaun.Zhang 
 * @Last Modified time: 2019-03-20 14:53:21 
 */

export const formatTime = time =>{
    var times = new Date(+new Date(time) + 8 * 3600 * 1000)
    .toISOString()
    .replace(/T/g, " ")
    .replace(/\.[\d]{3}Z/, "");
 return times;
}
