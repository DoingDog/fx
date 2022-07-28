//对内容进行解析
function ParseContent(value,page){
	var TempStr="";
	var k;
	if (value.indexOf("[SplitPage]")==-1){
		value = value;
	}
	else
	{
		TempStr = value.split("[SplitPage]");
		PageCount = TempStr.length;
		value = TempStr[page-1];
	}
	return XTIRSUBB(value);
}

function NextPage()
{
	try
	{
		if (event.keyCode==37) location = getByID("_ctl0_PreLink").href;
		if (event.keyCode==39) location = getByID("_ctl0_NextLink").href;
	}
	catch(e){}
}

//内容分页跳转
function GoPage(PageNum){
	objContent.innerHTML=ParseContent(strContent,PageNum);
	objTitle.innerHTML=strTitle+"("+PageNum+")";
	//CurrentPage.innerText=PageNum;
	window.scroll(0,-360);	
}

//输出内容翻页
function PageList(){
	if (PageCount < 1) return "";
	var k;
	var TempStr="";
	for (k=1;k<=PageCount;k++){
		TempStr+="  [<a href='JavaScript:GoPage("+k+");' title='"+strTitle+"("+k+")'>"+k+"</a>]"
	}
	//return ("文章分页：<span style='color:red;font-weight:bold' id=CurrentPage>1</span>/<font style='color:red;font-weight:bold'>"+PageCount+"</font>页&nbsp;"+TempStr);
	return ("文章分页："+TempStr);
}

//上一页，SizeLabel
function PreNext(){
	var TempStr="";
	getByID('Pre').href = "PreNext.Aspx?ID="+ID+"&CID="+ClassID+"&Action=Previous";
	getByID('Next').href = "PreNext.Aspx?ID="+ID+"&CID="+ClassID+"&Action=Next";
}

//内容字体大小调整
function ChangeSize(size){
	var objSize=getByID('_ctl0_ContentLabel');
	objSize.style.fontSize=size+"px";
}

function Copyright(){
	var TempStr="";
	TempStr+="本站大部分作品来源于互联网，供网友学\n习或者娱乐之用，其版权归原作者所有！\n";
	TempStr+="如果所转载的作品侵犯了您的版权，请来\n信告知，我们会马上处理。\n\n";
	alert(TempStr)
}

function XTIRSUBB(str)
{
	var UpLoadFile;
	//修改上传目录路径
	var re = /(\{UpLoadDirectory})/ig;
	str = str.replace(re,UpLoadFile);

	//************************青岛时尚网自行加入*******************

	var re = /(\http:\/\/www.aoyoo.com\/haha)/ig;
	str = str.replace(re,UpLoadFile);

	var re = /(\http:\/\/www.qingdaofashion.com\/Dress)/ig;
	str = str.replace(re,UpLoadFile);

	//**********************青岛时尚网自行加入结束******************

	//远程FLASH
	var re=/(\[FLASH\])(http:\/\/.[^\[]*(.swf))(\[\/FLASH\])/ig;
	str = str.replace(re,"<DIV align=\"center\"><OBJECT codeBase=https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0 classid=clsid:D27CDB6E-AE6D-11cf-96B8-444553540000 width=500 height=400><PARAM NAME=movie VALUE=\"$2\"><PARAM NAME=quality VALUE=high><embed src=\"$2\" quality=high pluginspage=\"https://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash\" type=\"application/x-shockwave-flash\" width=500 height=400></embed></OBJECT></DIV>");

	//本地FLASH
	var re=/(\[FLASH\])([^\[]*(.swf))(\[\/FLASH\])/ig;
	str = str.replace(re,"<DIV align=\"center\" <OBJECT codeBase=https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0 classid=clsid:D27CDB6E-AE6D-11cf-96B8-444553540000 width=500 height=400><PARAM NAME=movie VALUE=\"" + UpLoadFile + "/$2\"><PARAM NAME=quality VALUE=high><embed src=\"" + UpLoadFile + "/$2\" quality=high pluginspage=\"https://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash\" type=\"application/x-shockwave-flash\" width=500 height=400></embed></OBJECT></DIV>");

	//上传
	var re=/(\[UPLOAD=(gif|jpg|jpeg|bmp|png)\])(.[^\[]*)(gif|jpg|jpeg|bmp|png)(\[\/UPLOAD\])/ig;
	str = str.replace(re,"<A HREF=\"" + UpLoadFile + "/$3$2\" TARGET=_blank><IMG SRC=\"" + UpLoadFile + "/$3$2\" border=0 alt=按此在新窗口浏览图片 onload=\"javascript:if(this.width>screen.width-333)this.width=screen.width-333\"></A>");

	//远程图片
	var re=/(\[IMG\])(http|https|ftp):\/\/(.[^\[]*)(\[\/IMG\])/ig;
	str = str.replace(re,"<a onfocus=this.blur() href=\"$2://$3\" target=_blank><IMG SRC=\"$2://$3\" border=0 alt=按此在新窗口浏览图片 onload=\"javascript:if(this.width>screen.width-333)this.width=screen.width-333\"></a>");

	//连接
	var re=/(\[URL\])((http|https|ftp|rtsp|mms):\/\/(.[^\[]*))(\[\/URL\])/ig;
	str = str.replace(re,"<A TARGET=_blank HREF=\"$2\">$2</A>");

	//字体颜色
	var re=/(\[COLOR=)(.[^.:;`\'\"=]*)(\])(.[^\[]*)(\[\/COLOR\])/ig;
	str = str.replace(re,"<FONT COLOR=\"$2\">$4<\/FONT>");

	//字体大小
	var re=/(\[face=)(.[^.:;`\'\"=]*)(\])(.[^\[]*)(\[\/face\])/ig;
	str = str.replace(re,"<FONT face=\"$2\">$4<\/FONT>");

	//字体大小
	var re=/(\[size=([1-4])\])(.[^\[]*)(\[\/size\])/ig;
	str = str.replace(re,"<font size=$2>$3</font>");

	//字体位置
	var re=/(\[align=(center|left|right)\])(.[^\[]*)(\[\/align\])/ig;
	str = str.replace(re,"<div align=$2>$3</div>");

	//阴影字
	var re=/(\[SHADOW=*([0-9]*),*(#*[a-z0-9]*),*([0-9]*)\])(.[^\[]*)(\[\/SHADOW\])/ig
	str = str.replace(re,"<table width=$2 ><tr><td style=\"filter:shadow(color=$3, strength=$4)\">$5</td></tr></table>");
	
	//发光字
	var re=/(\[GLOW=*([0-9]*),*(#*[a-z0-9]*),*([0-9]*)\])(.[^\[]*)(\[\/GLOW\])/ig
	str = str.replace(re,"<table width=$2 ><tr><td style=\"filter:glow(color=$3, strength=$4)\">$5</td></tr></table>");

	//粗体字
	var re=/(\[b\])(.[^\[]*)(\[\/b\])/ig;
	str = str.replace(re,"<b>$2<\/b>");

	//斜体字
	var re=/(\[i\])(.[^\[]*)(\[\/i\])/ig;
	str = str.replace(re,"<I>$2<\/I>");

	//下划线字
	var re=/(\[u\])(.[^\[]*)(\[\/u\])/ig
	str = str.replace(re,"<u>$2<\/u>");

	//多媒体部分UBB
	//Windows Media Player
	var re=/(\[MP=*([0-9]*),*([0-9]*)\])(.[^\[]*)(\[\/MP\])/ig
	str = str.replace(re,"<object align=middle classid=CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95 class=OBJECT id=MediaPlayer width=$2 height=$3 ><param name=ShowStatusBar value=-1><param name=Filename value=$4><embed type=application/x-oleobject codebase=https://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701 flename=mp src=$4 width=$2 height=$3></embed></object>");
	
	//Real Player
	var re=/(\[RM=*([0-9]*),*([0-9]*)\])(.[^\[]*)(\[\/RM\])/ig;
	str = str.replace(re,"<OBJECT classid=clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA class=OBJECT id=RAOCX width=$2 height=$3><PARAM NAME=SRC VALUE=$4><PARAM NAME=CONSOLE VALUE=Clip1><PARAM NAME=CONTROLS VALUE=imagewindow><PARAM NAME=AUTOSTART VALUE=true></OBJECT><br><OBJECT classid=CLSID:CFCDAA03-8BE4-11CF-B84B-0020AFBBCCFA height=32 id=video2 width=$2><PARAM NAME=SRC VALUE=$4><PARAM NAME=AUTOSTART VALUE=-1><PARAM NAME=CONTROLS VALUE=controlpanel><PARAM NAME=CONSOLE VALUE=Clip1></OBJECT>");

	return str;
}

var currentpos,timer; 
function initializeScroll()
{
	timer=setInterval("scrollwindow()",50);
} 

function scrollclear()
{
	clearInterval(timer);
}

function scrollwindow() 
{
	currentpos=document.body.scrollTop;window.scroll(0,++currentpos);
	if (currentpos != document.body.scrollTop) sc();
} 
document.onmousedown=scrollclear
document.ondblclick=initializeScroll