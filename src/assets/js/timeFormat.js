export const formatTime = time =>{
    var times = new Date(+new Date(time) + 8 * 3600 * 1000)
    .toISOString()
    .replace(/T/g, " ")
    .replace(/\.[\d]{3}Z/, "");
 return times;
}
