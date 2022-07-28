
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<HTML>
	<HEAD>
		<title>数字校园管理平台</title>
		
<FONT face="宋体"></FONT>

		<meta name="GENERATOR" Content="Microsoft Visual Studio .NET 7.1">
		<meta name="CODE_LANGUAGE" Content="C#">
		<meta name="vs_defaultClientScript" content="JavaScript">
		<meta name="vs_targetSchema" content="https://schemas.microsoft.com/intellisense/ie5">
<style type="text/css">
td{font-size:9pt}
body {
background-image: url(img_login/bk.jpg);
}
.btn1,.btn2{width:66px; height:20px; background-image:url(img_login/loginbtn.gif); background-repeat:no-repeat;border:0px; float:left; margin-left:5px; cursor:pointer!important;cursor:hand; display:inline}
.btn1{ background-position:-0px -0px}
.btn2{ background-position:-69px -0px}
.login_text1_input{ width:120px;height:22px; border:#0a8fda 1px solid;  background-color:#e8fdff;font-family:Verdana, Arial, Helvetica, sans-serif; font-size:10.5pt;}
</style>
<script language="javascript">
    function fGetCode() {
        var gNow = new Date();
        document.getElementById('imgCount').src = "Random.aspx?x=" + gNow.getSeconds();
    }
function $( id ){return document.getElementById( id );}


	function fEvent(sType,oInput){
		switch (sType){
			case "focus" :
				oInput.isfocus = true;
			case "mouseover" :
				oInput.style.borderColor = '#9ecc00';
				break;
			case "blur" :
				oInput.isfocus = false;
			case "mouseout" :
				if(!oInput.isfocus){
					oInput.style.borderColor='#84a1bd';
				}
				break;
		}
	}
</script>
	<meta http-equiv="Content-Type" content="text/html; charset=gb2312"></HEAD>
	<body  bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0"  >
		<form method="post" action="/schinfo/passport/login.aspx" id="Form1" style="text-align:center;">
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUJNjAzNzYwMTQ2ZBgBBR5fX0NvbnRyb2xzUmVxdWlyZVBvc3RCYWNrS2V5X18WAQUKcmVtZW1iZXJtZcCVOF7yz/FPL5xUyvR2UrQboXYnTbkVofcqVhNnqE6E" />

<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="/wEWBgLA2oPEDwLr94HeAgL+kv37AgKcrc7aBgKX9Yz5AQKC3IeGDI4cygPXAJ0vX4hv/eL8AP2pvCKxca+ibHfjqfmvxnEp" />
			<!-- ImageReady Slices (管理系统2.psd) -->
<TABLE width=783 height="460" border=0 cellPadding=0 cellSpacing=0 background="img_login/login_bg.jpg" style="background-repeat:no-repeat; margin-top:50px;"  align="center">
                  <TBODY>
                    <TR>
                      <TD vAlign=bottom width=720>&nbsp;</TD>
                    </TR>
                    <TR>
                      <TD height="387">
                        <TABLE width=715 border=0 cellPadding=0 cellSpacing=0>
                          <TBODY>
                            <TR>
                              <TD width="287" height="171" vAlign=bottom>&nbsp;</TD>
                              <TD width="428" align=left valign="bottom"><TABLE height=101 cellSpacing=0 cellPadding=0 width=241 
                  border=0>
                                <TBODY>
                                  <TR>
                                    <TD></TD>
                                    <TD><SELECT id=KindSelect name=KindSelect style="width:100px;display:none">
                                        <OPTION 
                          value=0>学　生　</OPTION>
                                        <OPTION value=1 
                          selected>教　师　</OPTION>
                                        <OPTION value=2>管理员</OPTION>
                                        <OPTION value=3>家 长</OPTION>
                                    </SELECT></TD>
                                  </TR>
                                  <TR>
                                    <TD height=34>&nbsp;</TD>
                                    <TD><input name="userid" type="text" id="userid" class="login_text1_input" onMouseOver="fEvent(&#39;mouseover&#39;,this)" onFocus="fEvent(&#39;focus&#39;,this)" onBlur="fEvent(&#39;blur&#39;,this)" onMouseOut="fEvent(&#39;mouseout&#39;,this)" /></TD>
                                  </TR>
                                  <TR>
                                    <TD height=32>&nbsp;</TD>
                                    <TD><input name="passwd" type="password" id="passwd" class="login_text1_input" onMouseOver="fEvent(&#39;mouseover&#39;,this)" onFocus="fEvent(&#39;focus&#39;,this)" onBlur="fEvent(&#39;blur&#39;,this)" onMouseOut="fEvent(&#39;mouseout&#39;,this)" /></TD>
                                  </TR>
                                    <TR>
                                    <TD >&nbsp;</TD>
                                    <TD><input name="txtRandom" type="text" id="txtRandom" class="login_text1_input" onMouseOver="fEvent(&#39;mouseover&#39;,this)" onFocus="fEvent(&#39;focus&#39;,this)" onBlur="fEvent(&#39;blur&#39;,this)" onMouseOut="fEvent(&#39;mouseout&#39;,this)" />
                                        <img id="imgCount" style="margin: auto 5px; width: 62px; height: 24px" src="Random.aspx"
                                            align="absMiddle" name="imgCount">
                                         [<a href="javascript:fGetCode()">刷新</a>]
                                    </TD>
                                  </TR>
                                  <TR>
                                    <TD vAlign=top colSpan=3><TABLE cellSpacing=0 cellPadding=0 width=180 
                        border=0>
                                        <TBODY>
                                          <TR>
                                            <TD align="center" width="80"><span class="aspnetmaker"><input id="rememberme" type="checkbox" name="rememberme" /><label for="rememberme">记住我</label></span>
                                               </td><td align="left"><input type="submit" name="btnLogin" value="" id="btnLogin" class="btn2" OnMouseOver="btnLogin.className=&#39;btn1&#39;;" OnMouseOut="btnLogin.className=&#39;btn2&#39;;" />
                                                </TD>
                                          </TR>
                                        </TBODY>
                                    </TABLE></TD>
                                  </TR>
                                </TBODY>
                              </TABLE></TD>
                            </TR>
                            <TR>
                              <TD height="38" vAlign=bottom>&nbsp;</TD>
                              <TD align=left valign="bottom"><span id="lblMessage" class="aspnetmaker"><font color="Red"></font></span>
                                </TD>
                            </TR>
                          </TBODY>
                      </TABLE></TD>
                    </TR>
                  </TBODY>
			  </TABLE>

			<!-- End ImageReady Slices -->
		</form>
		<script language="javascript" type="text/javascript">
			document.getElementById("userid").focus();
		</script>
	</body>
</HTML>
