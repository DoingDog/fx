 
getid = function(obj) { return document.getElementById(obj) }

tabli = function(obj, navtab) {
    var oItem = getid(navtab).getElementsByTagName("li");
    for (var i = 0; i < oItem.length; i++) {
        var x = oItem[i];
        x.className = "";
    }
    obj.className = "curritem";
}
function setCookie(ph) {

    document.cookie = 'itemsyle= curritem;path=' + ph;

}
function getCookie() {
    var date = new Date();
    //将date设置为过去的时间
    date.setTime(date.getTime() - (86400 * 1000 * 1));
    //将userId这个cookie删除
    document.cookie = "userId=828;expire=" + date.toGMTString();
    var strCookie = document.cookie;
    var ck = strCookie.split('=');
    alert(ck[1]);


}