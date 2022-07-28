// JavaScript Document

<!--//--><![CDATA[//><!--

function initDataGridBg()
{  
	if (document.getElementById("datagrid")) {
		rows = document.getElementById("datagrid").rows;
		if(rows.length > 1) {
			for(i=1; i<rows.length-1; i++) {
				if (i%2 == 0)
					rows[i].style.background = "#E7F2FD";
				else
					rows[i].style.background = "#FFFFFF";
			}            
		}
	}
	if (document.getElementById("index_datagrid")) {
		rows = document.getElementById("index_datagrid").rows;
		if(rows.length > 1) {
			for(i=0; i<rows.length-1; i++) {
				if (i%2 == 0)
					rows[i].style.background = "#FFFFFF";
				else
					rows[i].style.background = "#E7F2FD";
			}            
		}
	}
}

init = function() {
		
	initDataGridBg();	
		
	//if (document.all&&document.getElementById) {
		navRoot = document.getElementById("nav");
		for (i=0; i<navRoot.childNodes.length; i++) {
			node = navRoot.childNodes[i];
			if (node.nodeName=="LI") {
				node.onmouseover=function() {
					this.style.backgroundColor="black";
					this.className+=" over";
					this.childNodes[0].style.color="gold";
				}
				node.onmouseout=function() {
					this.style.backgroundColor="transparent";
					this.className=this.className.replace(" over", "");
					this.childNodes[0].style.color="white";
				}
				for (j=0; j<node.childNodes.length; j++) {
					ulnode = node.childNodes[j];
					if (ulnode.nodeName=="UL") {
						for (k=0; k<ulnode.childNodes.length; k++) {
							subnode = ulnode.childNodes[k];
							if (subnode.nodeName=="LI") {
								subnode.onmouseover=function() {
									this.style.backgroundColor="#069";
								}
								subnode.onmouseout=function() {
									this.style.backgroundColor="black";
								}
							}
						}
					} 
				}
			}
		}
	//}
}
window.onload = init;

function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}

<!-- chenzg -->
function DrawImage(ImgD,width, height){
   var image=new Image();
   image.src=ImgD.src;
   if(image.width>0 && image.height>0){
	   if(image.width/image.height>= width/height){
		     if(image.width>width){  
			     ImgD.width=width;
			     ImgD.height=(image.height*width)/image.width;
		     }else{
			     ImgD.width=image.width;  
			     ImgD.height=image.height;
		     }
	     	ImgD.alt=image.width+"*"+image.height;
	     }
	    else{
		     if(image.height>height){  
			     ImgD.height=height;
			     ImgD.width=(image.width*height)/image.height;     
		     }else{
			     ImgD.width=image.width;  
			     ImgD.height=image.height;
		     }
		     ImgD.alt=image.width+"*"+image.height;
	     }
    }
   
} 

function checkEmpty()
{
	if(document.getElementById("article_title").value==""){
		alert("???????!");
		return false;
	}else if (document.getElementById("article_date").value==""){
		alert("???????!");
		return false;
	}else{
		return true;
	}
	
}

function confirm(message) {
	if (confirm(message)) return true;
	else return false;
}

<!-- chenzg -->

//--><!]]>