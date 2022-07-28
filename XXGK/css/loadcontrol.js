function LoadFlash(url,wmode,width,Height)
{  
  document.write(
    '<embed src="' + url + '" wmode=' + wmode +
    ' quality="high" pluginspage="https://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + width + 
    '" height="' + Height + '"></embed>');    
}