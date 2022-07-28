
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="https://www.w3.org/1999/xhtml">
<head>
    <title>XTCMS网站内容管理系统</title>
    <meta name="Generator" content="EditPlus" />
    <meta name="Author" content="" />
    <meta name="Description" content="" />
    <script type="text/javascript">
        //设置frame 的路径    
        function SetFrameUrl(FrameName,Url)
        {
            window.document.getElementById(FrameName).src = Url;
        }
        function SetFrameCols(FrameName,Cols)
        {
            document.getElementById(FrameName).cols = Cols;
        }
        function SetFrameRows(FrameName,Rows)
        {
            document.getElementById(FrameName).rows = Rows;
        }
    </script>   

</head>
<frameset rows="117,*" id="MainFrame" border="1"  style="width:expression(this.parentNode.clientWidth<=1024?'1024px':'auto');min-width:1024px;" framespacing="0" topmargin="0" leftmargin="0" marginheight="0" marginwidth="0">
	<frame name="framheader" src="top.aspx" scrolling="no" border="0" frameborder="0" noresize topmargin="0" leftmargin="0" marginheight="0" marginwidth="0"></frame>
	<frameset id="frammain" name="frammain" cols="200,7,*" border="6" frameborder="1" framespacing="1"  topmargin="0"  leftmargin="0" marginheight="0" marginwidth="0" >
        <frame id="framleft" name="framleft" src="" topmargin="0" leftmargin="0" marginheight="0" marginwidth="0" frameborder="0"  border="0"></frame>
        <frame name="ControlFrame" src="control.htm" frameBorder="no" scrolling="no" noresize></frame>
	    <frame id="framright" name="framright" src="" frameborder="0" bordercolor="#c6c6c4"></frame>
    </frameset>
</frameset>
</html>
