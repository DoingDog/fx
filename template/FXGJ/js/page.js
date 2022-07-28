        $(document).ready(bdtabs);//绑定tabs
        $(document).ready(checklogin);//判断是否登录
        $(document).ready(bdlogin); //页面加载绑定登录功能
        $(function () {
            //menu
            $("#menu2 li").live("mouseover",function(){
                $(this).find("div").show();
            });
            $("#menu2 li").live("mouseout",function(){
                $(this).find("div").hide();
            });
            
            $(".replace").each(function (i) {
                var vh = $(this).html();
                var reg1 = new RegExp("【", "g");
                var reg2 = new RegExp("】", "g");
                var r1 = vh.replace(reg1, "[");
                $(this).html(r1.replace(reg2, "] "));
            });
            //漂浮广告
            $(".adstylefloat").each(function () {
                var vp = $(this).parent();
                vp.css("top", "0px");
                var vx = $(window).width() - $(this).width();
                var vy = $(window).height() - $(this).height();
                switch (vp.attr("ptype")) {
                    case "l1":
                        $(".guanggao.left1").css({ position: "static" });
                        $(this).imgFloat({ speed: 30, xPos: 0, yPos: 0 });
                        break;
                    case "l2":
                        $(".guanggao.left2").css({ position: "static" });
                        $(this).imgFloat({ speed: 30, xPos: vy / 2, yPos: 0 });
                        break;
                    case "l3":
                        $(".guanggao.left3").css({ position: "static" });
                        $(this).imgFloat({ speed: 30, xPos: vy, yPos: 0 });
                        break;
                    case "r1":
                        $(".guanggao.right1").css({ right: "auto", left: "0px", position: "static" });
                        $(this).imgFloat({ speed: 30, xPos: vx, yPos: 0 });
                        break;
                    case "r2":
                        $(".guanggao.right2").css({ right: "auto", left: "0px", position: "static" });
                        $(this).imgFloat({ speed: 30, xPos: vy / 2, yPos: vx });
                        break;
                    case "r3":
                        $(".guanggao.right3").css({ right: "auto", left: "0px", position: "static" });
                        $(this).imgFloat({ speed: 30, xPos: vy, yPos: vx });
                        break;
                }
            });

//	        $("#menu2 li").prepend("<span></span>"); //Throws an empty span tag right before the a tag
//	        $("#menu2 li").each(function() { //For each list item...
//		        var linkText = $(this).find("a").html(); //Find the text inside of the a tag
//		        $(this).find("span").show().html(linkText); //Add the text in the span tag
//	        }); 
//	        $("#menu2 li").hover(function() {	//On hover...
//		        $(this).find("span").stop().animate({ 
//			        marginTop: "-40" //Find the span tag and move it up 40 pixels
//		        }, 250);
//	        } , function() { //On hover out...
//		        $(this).find("span").stop().animate({
//			        marginTop: "0" //Move the span back to its original state (0px)
//		        }, 250);
//	        });
        });
        
        function afterlogin(msg){
            if(msg.errstr!=""){
                if(msg.errstr!="未登录"){
                    $("#tslogin").text(msg.errstr);
                }else{}
            }else{
                var retstr="<p>欢迎您 "+msg.name+"！&nbsp;</p>"+
                           "<p><a class=\"xxwh\" >进入平台</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href=\"loginout.aspx\">安全退出</a><p>";
                $("#beforelogins").hide();
                $("#txtpassword").blur();
                $("#afterlogins").show();
                $("#afterlogins").html(retstr);
                $("#afterlogins .xxwh").click(function () {
                    var schinfourl="schInfo/passport/" + msg.url + ".aspx?UserName=" + msg.rqname + "&Password=" + msg.rpw;
                    window.open(schinfourl);
                });
                $("#afterlogins .xxwh").css("cursor", "pointer");
            }
        }
        function afterloginblank(msg){
            var schinfourl="";
            if(msg.errstr!=""){
                if(msg.errstr!="未登录"){
                    $("#tslogin").text(msg.errstr);
                }else{}
            }else{
                var retstr="<p>欢迎您 "+msg.name+"！&nbsp;</p>"+
                           "<p><a class=\"xxwh\" >进入平台</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href=\"loginout.aspx\">安全退出</a><p>";
                $("#beforelogins").hide();
                $("#txtpassword").blur();
                $("#afterlogins").show();
                $("#afterlogins").html(retstr);
                schinfourl="schInfo/passport/" + msg.url + ".aspx?UserName=" + msg.rqname + "&Password=" + msg.rpw;
                $("#afterlogins .xxwh").click(function () {
                    window.open(schinfourl);
                });
                $("#afterlogins .xxwh").css("cursor", "pointer");
                window.open(schinfourl);
            }
        }
        function checklogin(){
            $.ajax({
                type:"POST",
                url:"manage/login/login.aspx",
                data:"qtype=checklogin",
                dataType:"json",
                success: afterlogin
            }); 
        }
        function bdlogin(){
            $("#btnlogin").click(function(){
               var username = $("#txtusername").val().replace(/(^\s*)|(\s*$)/g, "");
               var password = $("#txtpassword").val();
               if(username==""){
                    $("#tslogin").text("请输入用户名！");
                    return;
               }
               else if(password==""){
                    $("#tslogin").text("请输入密码！");
                    return;
               }
               else{
                   $.ajax({
                        type:"POST",
                        url:"manage/login/login.aspx",
                        data:"qtype=login&username="+username+"&password="+password,
                        dataType:"json",
                        success: afterloginblank
                    }); 
               }
            });
            $("#txtpassword").keydown(function(event){
                if(event.keyCode=="13"){
                    $("#btnlogin").click();
                }
            });
        }
        function bdtabs(){
            var vhds = $(".hd");
            vhds.each(function (i) {
                var tabs = $(this).find(".hdtitles .tab");
                var mores = $(this).find(".more");
                var cons = $(this).find(".hdcon");
                tabs.live("mouseover", function () {
                    tabs.removeClass("on");
                    $(this).addClass("on");
                    var vicon = $(this).attr("icon");
                    cons.removeClass("on");
                    cons.eq(vicon).addClass("on");
                    if (mores.size() != 0) {
                        mores.removeClass("on");
                        mores.eq(vicon).addClass("on");
                    }
                    tabs.addClass("line1");//做tab 中的线的效果
                    var lindex = vicon - 1 < 0 ? 0 : vicon - 1;
                    tabs.eq(lindex).removeClass("line1");
                    tabs.eq(tabs.size() - 1).removeClass("line1");
                });
            });
        }
var t;
   $(document).ready(function(){
        $("#pre_pic .pre_i").live("mouseover",function(){
            $("#pre_pic .pre_i").removeClass("on");
            $("#pic_text .txt_i").removeClass("on");
            clearauto();
            var pn =$(this).attr("pn");
            var i =$(this).attr("i");
            $("#pic_text .txt_i").eq(i).addClass("on");
            $(this).addClass("on");
            $("#pic_list").stop(true);
            movepic(pn);
        });
        $("#pre_pic .pre_i").live("mouseout",function(){startauto();});
        $("#focus_pic .pic_i").live("mouseover",function(){clearauto();});
        $("#focus_pic .pic_i").live("mouseout",function(){startauto();});
        $("#pic_text .txt_i").live("mouseover",function(){clearauto();});
        $("#pic_text .txt_i").live("mouseout",function(){startauto();});
        startauto();
    });
    function autompic(){
        var next = $("#pre_pic .on").next();
        
        if(next.size()!=0){
            $("#pre_pic .pre_i").removeClass("on");
            $("#pic_text .txt_i").removeClass("on");
            var i =next.attr("i");
            $("#pic_text .txt_i").eq(i).addClass("on");
            next.addClass("on");
            var pn =next.attr("pn");
            movepic(pn);
        }
        else{
            $("#pre_pic .pre_i").removeClass("on");
            var nnext= $("#pre_pic div:first").addClass("on");
            var i =nnext.attr("i");
            $("#pic_text .txt_i").eq(i).addClass("on");
            movepic(0);
        }
    }
    
    function startauto(){
        t = setInterval('autompic()',3000);
    }
    function clearauto(){
        clearInterval(t);
    }
    function movepic(pn){
       $("#pic_list").animate({top: '-'+pn+'px'}, "slow");
}

function Flash(_url, _id, _width, _height, _wmode, _bgcolor, _quality) {
    var url = _url;
    var id = _id;
    var width = _width;
    var height = _height;
    var wmode = _wmode || false
    wmode ? wmode = "transparent" : wmode = "opaque";
    var bgcolor = _bgcolor || "#869ca7";
    var quality = _quality || "high";
    var varialbe = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" id=" + id + " width=" + width + " height=" + height + " codebase=\"https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab\">\ <param name=\"movie\" value=" + url + " />\   <param name=\"quality\" value=" + quality + " />\    <param name=\"bgcolor\" value=" + bgcolor + " />\     <param name=\"wmode\" value=" + wmode + " />\    <param name=\"allowScriptAccess\" value=\"sameDomain\" />\    <embed src=" + url + " quality=" + quality + " bgcolor=" + bgcolor + "\    width=" + width + " height=" + height + " wmode=" + wmode + " name=" + id + " align=\"middle\"\    play=\"true\" loop=\"false\" quality=" + quality + " allowScriptAccess=\"sameDomain\"\    type=\"application/x-shockwave-flash\"\     pluginspage=\"https://www.macromedia.com/go/getflashplayer\">\    </embed>\    <\/object>";
    this.add = function (_parent) {
        var parent = document.getElementById(_parent);
        if (parent == null) {
            return document.body.innerHTML = varialbe;
        } else {
            return parent.innerHTML = varialbe;
        }
    }
}   