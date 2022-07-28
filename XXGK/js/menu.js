

/* 动态添加Tab */
function AddTable(tabpage,tabid,url){

          var unp = document.getElementById(tabpage)
          //alert('text');
          var  ele=document.createElement("<li></li>")   
          ele.innerHTML="已解决" + "<img src='' width=10 height=10 alt='关闭' onclick=\"RemoveTab('"+ tabpage +"','"+ tabid  +"')\" />";   
		  //ele.onclick = function(){javascript:alert('asdf');};
		  ele.onclick =function()
		  { 
		    //javascript:alert('asdf');
		     switchTab(tabpage,tabid,url);
		  };
		  ele.title = "已解决";
		  ele.id = tabid;
		  ele.className="Selected";
          unp.appendChild(ele); 
          switchTab(tabpage,tabid,url);
          //alert(unp.innerHTML);
}
/* 动态删除 Tab */
function RemoveTab(tabpage,tabid)
{
    var unp = document.getElementById(tabpage);
          //alert('text');
    var  ele=document.getElementById(tabid);
    var cssname = ele.className;  
    unp.removeChild(ele);
    if(cssname == "Selected")
    {
        var oItem = document.getElementById(tabpage).getElementsByTagName("li"); 
        for(var i=0; i<oItem.length; i++){
            var x = oItem[i];    
            x.className = "";
        }
        for(var i=oItem.length -1; i>=oItem.length -1; i--){
            var x = oItem[i];    
            x.className = "Selected";
            x.click();
        }
    }
}


/* 动态切换 */
function switchTab2(tabpage,tabid){
var oItem = document.getElementById(tabpage).getElementsByTagName("li"); 
    for(var i=0; i<oItem.length; i++){
        var x = oItem[i];    
        x.className = "";
}
	document.getElementById(tabid).className = "Selected";
	var dvs=document.getElementById("cnt2").getElementsByTagName("div");
	for (var i=0;i<dvs.length;i++){
	  if (dvs[i].id==('d'+tabid))
	  {
	    dvs[i].style.display='';
	  
	  }
	  else if(dvs[i].id.substring(0,3) == "dLi")
	  {
  	    dvs[i].style.display='none';
  	  }
	}
}
/* 上方菜单 */
function switchTab(tabpage,tabid,url){

var oItem = document.getElementById(tabpage).getElementsByTagName("li"); 
    for(var i=0; i<oItem.length; i++){
        var x = oItem[i];    
        x.className = "";
}
	document.getElementById(tabid).className = "Selected";
	var dvs=document.getElementById("main" + tabpage);
	dvs.src = url;
	
}

function GetUrl(url)
{
    var dvs=document.getElementById("mainframe");
	dvs.src = url;
}
/* 左侧菜单 */
function border_left(tabpage,left_tabid){
var oItem = document.getElementById(tabpage).getElementsByTagName("li"); 
    for(var i=0; i<oItem.length; i++){
        var x = oItem[i];    
        x.className = "";
}
	document.getElementById(left_tabid).className = "Selected";
	var dvs=document.getElementById("left_menu_cnt").getElementsByTagName("ul");
	for (var i=0;i<dvs.length;i++){
	  if (dvs[i].id==('d'+left_tabid))
	    dvs[i].style.display='block';
	  else
  	  dvs[i].style.display='none';
	}
}
/* 左侧菜单active */
function dleft_tab_active(tabpage,activeid){
var obj=activeid
var oItem = document.getElementById(tabpage).getElementsByTagName("a"); 
    for(var i=0; i<oItem.length; i++){
        var x = oItem[i];    
        x.className = "";
}
	obj.className = "Selected";
}
/* 上方菜单当前操作 */
function Tab_now(tabpage,nowid){
var oItem = document.getElementById(tabpage).getElementsByTagName("span"); 
    for(var i=0; i<oItem.length; i++){
        var x = oItem[i];    
        x.className = "";
}
	document.getElementById(nowid).className = "Selected";
	var dvs=document.getElementById("Tab_now").getElementsByTagName("span");
	for (var i=0;i<dvs.length;i++){
	  if (dvs[i].id==('d'+nowid))
	    dvs[i].style.display='block';
	  else
  	  dvs[i].style.display='none';
	}
}
function menu(tab){
if(tab.style.display=='block')tab.style.display='block';
else tab.style.display='block';
}
/* 发表页面弹出窗口 */
function doMenu(MenuName){
 var arrMenus = new Array("swin1","swin2","swin3","swin4","swin5");
  var IfrRef = document.getElementById('DivShim');
 for (var i=0; i<arrMenus.length; i++){
  if (MenuName == arrMenus[i]) {
   if(document.getElementById(MenuName).style.display == "block"){
    document.getElementById(arrMenus[i]).style.display = "none";
	IfrRef.style.display = "none";
   }else{
    document.getElementById(MenuName).style.display = "block"; 
	IfrRef.style.width = document.getElementById(MenuName).offsetWidth;
    IfrRef.style.height = document.getElementById(MenuName).offsetHeight;
    IfrRef.style.top = document.getElementById(MenuName).style.top;
    IfrRef.style.left = document.getElementById(MenuName).style.left;
    IfrRef.style.zIndex = document.getElementById(MenuName).style.zIndex - 1;
    IfrRef.style.display = "block";
	
   }
  }else{
   document.getElementById(arrMenus[i]).style.display = "none";
  }
 }
}
/* 页面弹出窗口框架内嵌，无刷 */
function doMenu1(MenuName,URL){
	document.getElementById("chgClass").src=URL;
	document.getElementById(MenuName).style.display = "block";
}
/* 点击选中表单li */
function chk_iddiv(id){
	var objc=document.all["c"+id]; //多选框
	var obju=document.all["u"+id];//ul
	if (objc.checked==''){
		objc.checked='checked';
		obju.style.backgroundColor="#ffb";
	}else{
		objc.checked='';
		obju.style.backgroundColor="#fff";
	}
}

/* 点击选中表单checkbox */
function chk_id(id){
	var objc=document.all["c"+id]; //多选框
	var obju=document.all["u"+id];//ul
	if (obju.style.backgroundColor=="#ffb"){
		obju.style.backgroundColor="#fff";
	}else{
		obju.style.backgroundColor="#ffb";
	}
}

/* 点击选中表单chk_idAll */
function chk_idAll(form,iValue)
{
  
  for (var i=0;i < form.elements.length;i++)
    {
    var e = form.elements[i];
    if (e.name == "id"){
       e.checked = iValue;
		}
	}
	//批量着色
	var dvs=document.getElementById("content_li").getElementsByTagName("ul");
	for (var i=0;i<dvs.length;i++){
	  if (iValue==1)
	    dvs[i].style.backgroundColor="#ffb";  
	  else
  	  dvs[i].style.backgroundColor="#fff";  
	}
}

/**/
function chk_idBatch(form,askString){
	var bCheck;
	bCheck=false;
	for (var i=0;i < form.elements.length;i++)
    {
    var e = form.elements[i];
    if (e.name == "id"){
       if (e.checked ==1){
       		bCheck=true;
       		break;
       	}
		}
	}
	
	if (bCheck==false){
		alert("请选择要操作的内容!")
		return false;
		}
	else{
		return confirm('确认要'+askString+"?");
		}
	}

function obAlert(arrobj){
	if (arrobj){
		var oDialog = new dialog();
		oDialog.init();
		oDialog.set('src',arrobj[1]);
		oDialog.event(arrobj[0],'');
		oDialog.button('dialogOk',"document.getElementById('ssnbotton').disabled=''");
	}	
	}

/**********************************************************************/

/* 鼠标悬停背景变色 */
function fSetBg(obj){
	obj.style.backgroundColor = '#ffc';
}
function fReBg(obj){
	obj.style.backgroundColor = '#fff';
}

selects = document.getElementsByTagName('select');
for(i = 0; i < selects.length; i++) {
       selects[i].style.visibility = visibility;
}



/************************我是无比华丽地分割线！***********************/
/* 鼠标事件，当鼠标悬停在文字上是显示文字内容。 */
document.write('<SCRIPT src="style/boxover.js"><\/script>');