//$(document).ready(function () {

//    //生成菜单

//    $("#head_menu").html(
//                "<div class=\"menu_bg\">" +
//                    "<div class=\" menu_left fl\"></div>"+
//                   " <div class=\"menu\"><a href=\"#\">网站首页</a></div>"+
//                    "<div class=\"menu\"><a href=\"#\"> 复兴概况</a></div>"+
//                    "<div class=\"menu\"><a href=\"#\"> 复兴德育</a></div>"+
//                    "<div class=\"menu\"><a href=\"#\">复兴教学</a></div>"+
//                    "<div class=\"menu\"><a href=\"#\">复兴科研</a></div>"+
//                    "<div class=\"menu\"><a href=\"#\">复兴党建</a></div>"+
//                    "<div class=\"menu\"><a href=\"#\">复兴校友</a></div>"+
//                    "<div class=\"menu\"><a href=\"#\">国际部</a></div>"+
//                    "<div class=\"menu\"><a href=\"#\">信息公开</a></div>"+
//                    "<div class=\"menu\"><a href=\"#\">联系我们</a></div>"+
//               "</div>"
//        );
//});

//function Menu() {
//    $("#head_menu").html(
//              "<div class=\"menu_bg\">" +
//                  "<div class=\" menu_left fl\"></div>" +
//                " <div class=\"menu\">"+
//                    "<div class=\"_menu\"><a href=\"#\">网站首页</a></div>" +
//                "</div>" +
//                "<div class=\"menu\">" +
//                    "<div class=\"_menu\"><a href=\"#\"> 复兴概况</a></div>" +
//                    "<div class=\"_menu_list\"><dl><dd><a href=\"#\">校史沿革</a></dd><dd><a href=\"#\">办学特色</a></dd><dd><a href=\"#\">机构设置</a></dd><dd><a href=\"#\">学校领导</a></dd><dd><a href=\"#\">漫步校园</a></dd><dd><a href=\"#\">学校荣誉</a></dd></dl></div>" +
//                "</div>" +
//               "<div class=\"menu\">" +
//                    "<div class=\"_menu\"><a href=\"#\"> 复兴德育</a></div>" +
//                     "<div class=\"_menu_list\"><dl><dd><a href=\"#\">德育概况</a></dd><dd><a href=\"#\">管理保障</a></dd><dd><a href=\"#\">品格养成</a></dd><dd><a href=\"#\">教师垂范</a></dd><dd><a href=\"#\">校园文化</a></dd><dd><a href=\"#\">学生天地</a></dd><dd><a href=\"#\">心理健康</a></dd><dd><a href=\"#\">民族教育</a></dd><dd><a href=\"#\">评选奖励</a></a></dd><dd><a href=\"#\">德育科研</a></dd></dl></div>" +
//                "</div>" +
//              "<div class=\"menu\">" +
//                    "<div class=\"_menu\"><a href=\"#\">复兴教学</a></div>" +
//                    "<div class=\"_menu_list\"><dl><dd><a href=\"#\">创新实验</a></dd><dd><a href=\"#\">课程设置</a></dd><dd><a href=\"#\">师资队伍</a></dd><dd><a href=\"#\">升学招生</a></dd><dd><a href=\"#\">学科竞赛</a></dd><dd><a href=\"#\">教师荣誉</a></dd></dl></div>" +
//                "</div>" +
//                "<div class=\"menu\">" +
//                    "<div class=\"_menu\"><a href=\"#\">复兴科研</a></div>" +
//                     "<div class=\"_menu_list\"><dl><dd><a href=\"#\">科研信息</a></dd><dd><a href=\"#\">科研计划</a></dd><dd><a href=\"#\">科研成果</a></dd></dl></div>" +
//                 "</div>" +
//                  "<div class=\"menu\"><div class=\"_menu\"><a href=\"#\">复兴党建</a></div></div>" +
//                "<div class=\"menu\">" +
//                    "<div class=\"_menu\"><a href=\"#\">复兴校友</a></div>" +
//                     "<div class=\"_menu_list\"><dl><dd><a href=\"#\">校友会信息</a></dd><dd><a href=\"#\">校友风采</a></dd><dd><a href=\"#\">校友通讯</a></dd><dd><a href=\"#\">校友留言</a></dd><dd><a href=\"#\">校友信箱</a></dd></dl></div>" +
//                "</div>" +
//                "<div class=\"menu\">" +
//                    "<div class=\"_menu\"><a href=\"#\">国际部</a></div>" +
//                     "<div class=\"_menu_list\"><dl><dd><a href=\"#\">关于我们</a></dd><dd><a href=\"#\">课程学制</a></dd><dd><a href=\"#\">公告信息</a></dd><dd><a href=\"#\">招生报名</a></dd><dd><a href=\"#\">升学资讯</a></dd><dd><a href=\"#\">师资团队</a></dd><dd><a href=\"#\">外籍学生</a></dd><dd><a href=\"#\">交流活动</a></dd></dl></div>" +
//                "</div>" +
//                  "<div class=\"menu\"><div class=\"_menu\"><a href=\"#\">信息公开</a></div></div>" +
//                  "<div class=\"menu\"><div class=\"_menu\"><a href=\"#\">联系我们</a></div></div>" +
//             "</div>"
//      ); 
//}


function Menu() {
    var menujson = [{ a: "首   页", b: "/default.aspx" },
                    {
                        a: "复兴概况", b: "/List.aspx?ClassID=102",
                        c: [{ a: "校史沿革", b: "/List.aspx?ClassID=109" },
                            { a: "办学特色", b: "/List.aspx?ClassID=110" },
                            { a: "机构设置", b: "/List.aspx?ClassID=111" },
                            { a: "学校领导", b: "/List.aspx?ClassID=112" },
                            { a: "漫步校园", b: "/List.aspx?ClassID=113" },
                            { a: "学校荣誉", b: "/List.aspx?ClassID=114" }
                        ]
                    },
                    {
                        a: "复兴德育", b: "/List.aspx?ClassID=103",
                        c: [{ a: "德育概况", b: "/List.aspx?ClassID=711" },
                            { a: "管理保障", b: "/List.aspx?ClassID=706" },
                            { a: "品格养成", b: "/List.aspx?ClassID=707" },
                            { a: "教师垂范", b: "/List.aspx?ClassID=708" },
                            { a: "校园文化", b: "/List.aspx?ClassID=115" },
                            { a: "学生天地", b: "/List.aspx?ClassID=116" },
                            { a: "心理健康", b: "/List.aspx?ClassID=117" },
                            { a: "民族教育", b: "/List.aspx?ClassID=118" },
                            { a: "评选奖励", b: "/List.aspx?ClassID=119" },
                            { a: "德育科研", b: "/List.aspx?ClassID=709" }
                        ]
                    },
                    {
                        a: "复兴教学", b: "/List.aspx?ClassID=104",
                        c: [{ a: "创新实验", b: "/List.aspx?ClassID=660" },
                            { a: "课程设置", b: "/List.aspx?ClassID=120" },
                            { a: "师资队伍", b: "/List.aspx?ClassID=121" },
                            { a: "升学招生", b: "/List.aspx?ClassID=122" }/*,
                            { a: "学科竞赛", b: "/List.aspx?ClassID=123" },
                            { a: "教师荣誉", b: "/List.aspx?ClassID=124" }*/
                        ]
                    },
                    {
                        a: "复兴科研", b: "/List.aspx?ClassID=105",
                        c: [{ a: "科研信息", b: "/List.aspx?ClassID=661" },
                            { a: "科研计划", b: "/List.aspx?ClassID=662" },
                            { a: "科研成果", b: "/List.aspx?ClassID=125" }
                        ]
                    },
                    {
                        a: "复兴党建", b: "https://fxdj.sinthonic.com", d: "_blank"
                    },
                    {
                        a: "复兴校友", b: "/List.aspx?ClassID=106",
                        c: [{ a: "校友会信息", b: "/List.aspx?ClassID=127" },
                            { a: "校友风采", b: "/List.aspx?ClassID=131" },
                            { a: "校友通讯", b: "/List.aspx?ClassID=129" },
                            { a: "校友留言", b: "/List.aspx?ClassID=130" },
                            { a: "校友信箱", b: "/List.aspx?ClassID=663" }
                        ]
                    },/* GY 2016-02-16 删除“美国AP班”
                    {
                        a: "美国AP班", b:"/List.aspx?ClassID=107",
                        c: [{ a: "关于我们", b: "/List.aspx?ClassID=712" },
                            { a: "课程学制", b: "/List.aspx?ClassID=713" },
                            { a: "公告信息", b: "/List.aspx?ClassID=717" },
                            { a: "招生报名", b: "/List.aspx?ClassID=715" },
                            { a: "升学资讯", b: "/List.aspx?ClassID=716" },
                    	    { a: "师资团队", b: "/List.aspx?ClassID=714" },
                            { a: "外籍学生", b: "/List.aspx?ClassID=604" },
                            { a: "交流活动", b: "/List.aspx?ClassID=605" }
                        ]
                    },*/
                    {
                        a: "信息公开", b: "/List.aspx?ClassID=619"
                    },
                    {
                        a: "联系我们", b: "/List.aspx?ClassID=108"
                    }
    ];
    var menustr = "<div class=\"menu_bg\"><div id=\"menu2\" class=\"nav\"><dl>";
    for (var i = 0; i < menujson.length; i++) {
        var submenustr = "";
        if (menujson[i].c != undefined) {
            submenustr = "<div class=\" dis_none\">";
            for (var j = 0; j < menujson[i].c.length; j++) {
                submenustr += "<a href=\"" + menujson[i].c[j].b + "\">" + menujson[i].c[j].a + "</a>";
            }
            submenustr += "</div>";
        }
        menustr += "<dd><a href=\"" + menujson[i].b + "\">" + menujson[i].a + "</a>" + submenustr + "</dd>";
    }
    menustr += "<dd class=\"menuznss\"><a href=\"/searchResult.aspx?stype=1\">搜索</a></dd>";
    menustr += "</dl></div></div>";
    $("#head_menu").html(menustr);
}

$(document).ready(function () {
    $("#menu2 dl dd").each(function () {
        $(this).mouseover(function () {
            $(this).find("div").removeClass("dis_none").addClass("dis_block");
        }).mouseout(function () {
            $(this).find("div").removeClass("dis_block").addClass("dis_none");
        });
    });
});