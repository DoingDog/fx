

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="https://www.w3.org/1999/xhtml">
<head><title>
	用户登录
</title><link href="css/Base.css" rel="stylesheet" type="text/css" /><link href="template/FXGJ/css/index.css" rel="stylesheet" type="text/css" />
    <style type="text/css">
        .btnsubmit
        {
margin-top:5px;
margin-left:2px;
            border-right: 0px;
            border-top: 0px;
            background: url(/images/login/index_16.gif) no-repeat;
            border-left: 0px;
            border-bottom: 0px;
            height: 25px;
width:60px
        }
    </style>

    <script src="js/XtScript.js" type="text/javascript"></script>

</head>
<body >
   
      <form name="form1" method="post" action="/Login.aspx" id="form1">
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUKMTE5NzQ1MDUwNA8WAh4KSXNWYWxpRGF0ZQUEbm9uZWRkc/kry+0uroxfA37+xqTx4k9g/6o=" />

                       <table width="100%" cellpadding="2" cellspacing="1" style="background:white; height:70px; overflow:hidden; color:#1A7CA9"">
                         <tr>
                           <td width="140px" align="right"> 用户  <input name="TxtName" type="text" id="TxtName" class="myinput" /></td>
                           <td rowspan="2"><input type="submit" name="btnsub" value="" onclick="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;btnsub&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, false))" id="btnsub" class="mybtn" /></td>
                         </tr>
                         <tr>
                            <td  align="right"> 密码 <input name="TxtPwd" type="password" id="TxtPwd" class="myinput" /></td>
                         </tr>
                       </table>
                         <span id="lbltip"><font color="Red"></font></span>
    
    
                  
<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="/wEWBAKao++BAQKkjISFCwL7koHvAgL9grudDhvmW+myNn+89w4LaA8S1+xT3hka" /></form>
</body>
</html>
