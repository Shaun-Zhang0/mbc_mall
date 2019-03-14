const setCookie = function setCookie(name,value) 
{ 
    // var Days = 30; 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + 120*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
} 

//读取cookies 
const getCookie = function getCookie(name) 
{ 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
 
        return unescape(arr[2]); 
    else 
        return null; 
} 

//删除cookies 
const delCookie = function delCookie(name) 
{ 
    var exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    var cval=getCookie(name); 
    if(cval!=null) 
        document.cookie= name + "="+cval+";expires="+exp.toGMTString() + ";path=/brand"; 
        document.cookie= name + "="+cval+";expires="+exp.toGMTString() + ";path=/   "; 

} 
export default{
    setCookie,getCookie,delCookie
}
//使用示例 
// setCookie("name","hayden"); 
// alert(getCookie("name")); 
