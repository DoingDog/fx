﻿document.write('<div id="maintop">                                                                                ');
document.write('    <div class="top">                                                                               ');
document.write('    <div class="topdw">                                                                              ');
document.write('        <div class="date" id="menu_left">     ');
document.write("            <script type=\"text\/javascript\">");
document.write("            var vdate = new Date();var dstr= vdate.getFullYear()+'年'+(vdate.getMonth()+1)+'月'+vdate.getDate()+'日';");
document.write("            setTimeout(\"menu_left.innerHTML=dstr+\' 星期\'+\'日一二三四五六\'.charAt(new Date().getDay());\", 1000)");
document.write("            <\/script>");
document.write('        </div>                                                                        ');
document.write('        <div class="zndt"><a href="sitemap.aspx">站点地图</a></div><div class="weather"></div>                                                                       ');
document.write('    </div>                                                                            ');
document.write('    </div>                                                                              ');
document.write('    <div class="logo"></div>                                                                           ');
document.write('    <div id="pubmenu"></div>');
document.write('</div>');
document.write('<script src="\/template\/FXGJ\/menu.js" type="text\/javascript"><\/script>');