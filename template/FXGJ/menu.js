var menujson = [{ a: "首   页", b: "/default.aspx" },
                { a: "复兴概况", b: "/List.aspx?ClassID=102",
                    c: [{ a: "校史沿革", b: "/List.aspx?ClassID=109" },
                        { a: "办学特色", b: "/List.aspx?ClassID=110" },
                        { a: "机构设置", b: "/List.aspx?ClassID=111" },
                        { a: "学校领导", b: "/List.aspx?ClassID=112" },
                        { a: "漫步校园", b: "/List.aspx?ClassID=113" },
                        { a: "学校荣誉", b: "/List.aspx?ClassID=114" }
                    ]
                },
                { a: "复兴德育", b: "/List.aspx?ClassID=103",
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
                { a: "复兴教学", b: "/List.aspx?ClassID=104",
                    c: [{ a: "创新实验", b: "/List.aspx?ClassID=660" },
                        { a: "课程设置", b: "/List.aspx?ClassID=120" },
                        { a: "师资队伍", b: "/List.aspx?ClassID=121" },
                        { a: "升学招生", b: "/List.aspx?ClassID=122" }/*,
                        { a: "学科竞赛", b: "/List.aspx?ClassID=123" },
                        { a: "教师荣誉", b: "/List.aspx?ClassID=124" }*/
                    ]
                },
                { a: "复兴科研", b: "/List.aspx?ClassID=105",
                    c: [{ a: "科研信息", b: "/List.aspx?ClassID=661" },
                        { a: "科研计划", b: "/List.aspx?ClassID=662" },
                        { a: "科研成果", b: "/List.aspx?ClassID=125" }
                    ]
                },
                { a: "复兴党建", b: "/channel.aspx?channelid=2", d: "_blank"
                },
                { a: "复兴校友", b: "/List.aspx?ClassID=106",
                    c: [{ a: "校友会信息", b: "/List.aspx?ClassID=127" },
                        { a: "校友风采", b: "/List.aspx?ClassID=131" },
                        { a: "校友通讯", b: "/List.aspx?ClassID=129" },
                        { a: "校友留言", b: "/List.aspx?ClassID=130" },
                        { a: "校友信箱", b: "/List.aspx?ClassID=663" }
                    ]
                },
                { a: "美国AP班", b:"/List.aspx?ClassID=107"
			,
                    c: [{ a: "关于我们", b: "/List.aspx?ClassID=712" },
                        { a: "课程学制", b: "/List.aspx?ClassID=713" },
                        { a: "公告信息", b: "/List.aspx?ClassID=717" },
						{ a: "招生报名", b: "/List.aspx?ClassID=715" },
                        { a: "升学资讯", b: "/List.aspx?ClassID=716" },
				        { a: "师资团队", b: "/List.aspx?ClassID=714" },		
                        { a: "外籍学生", b: "/List.aspx?ClassID=604" },
                        { a: "交流活动", b: "/List.aspx?ClassID=605" }
                    ]
                },
                { a: "信息公开", b: "/List.aspx?ClassID=619"
                },
                { a: "联系我们", b: "/List.aspx?ClassID=108"
                }
];
var menustr = "<div class=\"navitem\"><div id=\"menu2\" class=\"nav\"><ul>";
for (var i = 0; i < menujson.length; i++) {
    var submenustr = "";
    if (menujson[i].c != undefined) {
        submenustr = "<div>";
        for (var j = 0; j < menujson[i].c.length; j++) {
            submenustr += "<a href=\"" + menujson[i].c[j].b + "\">" + menujson[i].c[j].a + "</a>";
        }
        submenustr += "</div>";
    }
    menustr += "<li><a href=\"" + menujson[i].b + "\">" + menujson[i].a + "</a>" + submenustr + "</li>";
}
menustr += "<li class=\"menuznss\"><a href=\"/searchResult.aspx?stype=1\">搜索</a></li>";
menustr += "</ul></div></div>";
$("#pubmenu").html(menustr);
