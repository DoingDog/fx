
<!DOCTYPE html>
<html xmlns="https://www.w3.org/1999/xhtml">
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>

</title>
    <script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
    <script type="text/javascript" src="login/js/login.js"></script>
    <link type="text/css" rel="stylesheet" href="login/Css/login.css" />
    <script>
        function TiaoZhuan() {
            window.location.href = "Register.aspx";
        }
        $(function () {
            $("#txtPwd").keypress(function (e) {
                if (e.keyCode == 13)
                    return CheckUserID('txtUserID');

            })

        })
    </script>
</head>
<body>
    <form method="post" action="login.aspx" id="form1">
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="TBWAyBldXxWX7QXDAyah8wEr3UZI0P/TTyjiG+wjdiQ79S8nLGdv8XkHnqEmzWqUWxYA/oZ+SVyK3BifB4bwZijfzAJyL9Z4bC3Zb7IMeXuBOUv9WEdwseGgNSU=" />

<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="715D329E" />
<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="qTlbNLpmd62w8pzxvcQNgM8fKhgsH5oYEZpht3xiN/kBIvYXpSRhjZ26ESCiGwqiKVI0760ZK0nHLGUXBSq2KGdmL3BMmBzT/j2c8d1bzyvxD5j8R6vjDorfUA4=" />
        <div class="divMain">
            <div class="divHead">
                <img src="login/images/index_02.png" alt=""  class="ImgLogo" />
            </div>
            <div class="divCentre">
                <div class="divCentreImg">
                    <div class="divLogin">
                        <div class="divLoginLeft">
                            <img src="login/images/name.jpg" alt="" />
                            &nbsp;&nbsp;<input name="txtUserID" type="text" id="txtUserID" class="InputTextName" />
                        </div>
                        <div class="divLoginCentre">
                            <img src="login/images/pwd.jpg" alt="" /><input name="txtPwd" type="password" id="txtPwd" name="txtPwd" class="InputTextPwd" />
                            &nbsp;&nbsp;
                            <img src="login/images/wangji.jpg"  style="cursor: pointer; margin-top: 5px;"   title="请联系班主任！"/>
                            <span id="Label1"><font color="Red" size="3"></font></span>
                        </div>
                        <div class="divLoginRight">
                            <img src="login/images/login.jpg" style="margin-top: 25px;cursor: pointer;" onclick="return CheckUserID(&#39;txtUserID&#39;)" />
                        </div>
                    </div>
                </div>
                <div class="divNoNumber">
                    <img src="login/images/3.jpg" alt="" /><img src="login/images/注册.jpg" alt="" style="cursor: pointer;" onclick="TiaoZhuan()" />
                </div>
            </div>

            <div class="divFoot">
                <div class="divFootWord">Copright &copy 上海市复兴高级中学 2011 All Rights Reserverd 上海心通信息技术有限公司 协作制作</div>
                <div class="divFootWord1">上海市复兴高级中学 联系地址：中国上海市车站南路28号 邮编：200434  电话：+86-021-65606715 邮箱：fx@fuxing.sh.cn</div>
            </div>
        </div>
    </form>
    
    
</body>
</html>
