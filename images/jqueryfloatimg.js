/* 
*   jQuery Plugins imgFloat v1011 
* 使用说明： 
*   speed //元素移动速度 
*   xPos  //元素一开始左距离 
*   yPos  //元素一开始上距离 
*   $('#div1').imgFloat({speed:30,xPos:10,yPos:10});   
*   $('#div2').imgFloat();   //不给参数默认（speed:10,xPos:0,yPos:0）                      
*/

(function($) { 

    jQuery.fn.imgFloat = function(options) { 
        var own = this; 
        var xD = 0; 
        var yD = 0; 
        var i = 1; 
        var settings = { 
            speed: 10, 
            xPos: 0, 
            yPos: 0 
        }; 
        jQuery.extend(settings, options); 
        var ownTop = settings.xPos; 
        var ownLeft = settings.yPos; 
        own.css({ 
            position: "absolute", 
            cursor: "pointer" 
        }); 
        function imgPosition() { 
            var winWidth = $(window).width() - own.width(); 
            var winHeight = $(window).height() - own.height(); 
            if (xD == 0) { 
                ownLeft += i; 
                own.css({ 
                    left: ownLeft 
                }); 
                if (ownLeft >= winWidth) { 
                    ownLeft = winWidth; 
                    xD = 1; 
                } 
            } 
            if (xD == 1) { 
                ownLeft -= i; 
                own.css({ 
                    left: ownLeft 
                }); 
                if (ownLeft <= 0) xD = 0; 
            } 
            if (yD == 0) { 
                ownTop += i; 
                own.css({ 
                    top: ownTop 
                }); 
                if (ownTop >= winHeight) { 
                    ownTop = winHeight; 
                    yD = 1; 
                } 
            } 
            if (yD == 1) { 
                ownTop -= i; 
                own.css({ 
                    top: ownTop 
                }); 
                if (ownTop <= 0) yD = 0; 
            } 
        } 
        var imgHover = setInterval(imgPosition, settings.speed); 
        own.hover(function() { 
            clearInterval(imgHover); 
        }, 
        function() { 
            imgHover = setInterval(imgPosition, settings.speed); 
        }); 
    } 
})(jQuery);
