var MyServer="/";
var LoginService="PlugIns/LoginService.asmx"

function AutoLogin(){
	var MyUser=GetCookie("XUserSerID")
	if ((MyUser!="")&&(MyUser!="undefined")){
		member_login.username.value=MyUser;
		member_login.password.value=MyPass;
		if (confirm("您已经登录，自动登录吗"))
		ChkLogin(MyUser,MyPass);
	}
}

function ChkLogin(_user,_pass){
    if(_user == '')
    {
        alert('请输入用户名称！');
        return ;
    }
    if(_pass == '')
    {
        alert('请输入密码！');
        return ;
    }
    if ($("funcid").value==0){
	    formlogin.userid.value=_user;
	    formlogin.userpassword.value=_pass;
	    formlogin.submit();
    }
    if ($("funcid").value==1 || $("funcid").value==2)
    {
	    var username=_user;
	    var password=_pass;
	    //alert(MyServer+LoginService+"?WSDL");
	    //第一个参数是webservice的url，后面是名称
	    myjson.useService(MyServer+LoginService+"?WSDL","LoginService");
	    //设置一个回调函数，service返回结果的时候回调；第一个参数是回调函数的名称，后面的是webservice的参数
	    intCallID=myjson.LoginService.callService(CheckDone,"UserLogin",username,password); 
    }
}
function CheckDone(res)
{
    var TempStr = res.value;
    if(TempStr.indexOf("UserSerID:") > -1)
    {
        var UID = TempStr.replace("UserSerID:","");
        SetCookie("XUserSerID",UID);
        if($("funcid").value == 1)
        {
             document.location.href = 'manage/maindefault.aspx';
        }
        else
        {
            document.location.href = 'qlogin.aspx';
        }
    }
    else
    {
        alert(TempStr.replace("Error:",""));
    }
}
function GetUserName(UserSerID)
{
    myjson.useService(MyServer+LoginService+"?WSDL","LoginService");
	//设置一个回调函数，service返回结果的时候回调；第一个参数是回调函数的名称，后面的是webservice的参数
	intCallID=myjson.LoginService.callService(GetUserNameRes,"GetUserName",UserSerID); 
}

function GetUserNameRes(res)
{
    $("spanname").innerHTML = res.value;
}