

<html>
<head>
	<title>复兴在线校友会 Fuxing Online Alumni</title>
	<script>
	// ------------------------------------------------------------------------
	// Opens the upload window and initiates the upload process
	// ------------------------------------------------------------------------
	function showUpload( userInnerId ) {
		openWindow( "upload.jsp?userInnerId=" + userInnerId + "&operation=UPLOAD", 400, 60, true );
	}

	// ------------------------------------------------------------------------
	// Opens another borwser window without toolbars
	// ------------------------------------------------------------------------
	function openWindow( filename, width, height, isLocked ) {
		var config = ( isLocked )?
					"toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=no":
					"toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,resizable=yes";

		config = config + ",top=" + (screen.height-height)/2 + ",left=" +(screen.width-width)/2;

		window.open(filename,"",config + ",scrollbars=yes,width=" + width + ",height=" + height);
	}
	</script>
</head>

<body marginwidth="0" marginheight="0" leftmargin="0" rightmargin="0" topmargin="0">

<center>
<script language='javascript' charset='utf-8' src='/web/flex-internal?action=history_js'></script>
<noscript>
<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,14,0' width='100%' height='100%'
id='Index.mxml.swf'
border='0'
>
  <param name='flashvars' value=''>
  <param name='src' value='/web/alumni/Index.mxml.swf'>
  <embed pluginspage='https://www.macromedia.com/go/getflashplayer' width='100%' height='100%'
    flashvars=''
    src='/web/alumni/Index.mxml.swf'
    name='Index.mxml.swf'
  />
</object>
</noscript>
<script language='javascript' charset='utf-8'>
document.write("<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,14,0' width='100%' height='100%'");
document.write("id='Index.mxml.swf'");
document.write("border='0'");
document.write(">");
document.write("  <param name='flashvars' value='historyUrl=%2Fweb%2Fflex%2Dinternal%3Faction%3Dhistory%5Fhtml&lconid=" + lc_id +"&'>");
document.write("  <param name='src' value='/web/alumni/Index.mxml.swf'>");
document.write("  <embed pluginspage='https://www.macromedia.com/go/getflashplayer' width='100%' height='100%'");
document.write("    flashvars='historyUrl=%2Fweb%2Fflex%2Dinternal%3Faction%3Dhistory%5Fhtml&lconid=" + lc_id +"&'");
document.write("    src='/web/alumni/Index.mxml.swf'");
document.write("    name='Index.mxml.swf'");
document.write("  />");
document.write("</object>");
</script>
<script language='javascript' charset='utf-8'>
document.write("<br><iframe src='/web/flex-internal?action=history_html' name='_history' frameborder='0' scrolling='no' width='22' height='0'></iframe></br>");
</script>

</center>

</body>
</html>