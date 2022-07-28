if (self != top) { top.location = self.location; } 

window.defaultStatus=" ";
function IsOver(e) {window.status=" ";return true;}
function IsClick(e) {setTimeout('window.status=" "',10);
  if (navigator.appName == 'Netscape' && (e.which == 3 || e.which == 2))
    {return false;}
  else if (navigator.appName == 'Microsoft Internet Explorer' && (event.button == 2 || event.button == 3))
    {return false;}
  return true;}
if (document.layers) window.captureEvents(Event.MOUSEDOWN | Event.MOUSEOVER);
document.onmousedown=IsClick;
window.onmousedown=IsClick;
document.onmouseover=IsOver;
window.onmouseover=IsOver;

function click() {if (event.button==2) {alert('绿色象征着高科技……你喜欢吗？')}}document.onmousedown=click

function w(theURL)
{ 
var a
window.open(theURL,'','scrollbars=no,width=502,height=440,resizable=no ');
}

function ww(theURL)
{ 
var a
window.open(theURL,'','scrollbars=yes,width=700,height=500');
}