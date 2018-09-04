"use strict";
	$(function(){//初始化banner切换插件
     $(".html5zoo-nav-0").hide();
     $(".html5zoo-watermark-0").hide();
     $(".html5zoo-text-wrapper-0").hide();
     $(".html5zoo-text-0").hide();
});

//导航焦点标志随页面滚动切换
$(document).on("scroll",function(){
	var BoxEq =Math.floor($(this).scrollTop()/1000);
	$("#testWin").text(BoxEq);
		switch (BoxEq) {
			case 0:
				$(".l_focus").removeClass("l_focus");
				$(".header").find("p").eq(0).addClass("l_focus");
				break;
			case 1:
				$(".l_focus").removeClass("l_focus");
				$(".header").find("p").eq(1).addClass("l_focus");
				break;
			case 2:
				$(".l_focus").removeClass("l_focus");
				$(".header").find("p").eq(2).addClass("l_focus");
				break;
			case 3:
				$(".l_focus").removeClass("l_focus");
				$(".header").find("p").eq(3).addClass("l_focus");
				break;
			case 4:
						$(".l_focus").removeClass("l_focus");
						$(".header").find("p").eq(4).addClass("l_focus");
				break;
			case 5:
						$(".l_focus").removeClass("l_focus");
						$(".header").find("p").eq(5).addClass("l_focus");
				break;
			default:

		}
})

//鼠标滚动切换页面
$(document).ready(function(){
    var pageHeight1 = $(".l_p2Box").height();
    var height = $(window).height();
    var body;
        if(navigator.userAgent.indexOf("Firefox")>0 || navigator.userAgent.indexOf("MSIE")>0){
            body = document.documentElement;
        }else{
            body = document.body;
        }
    var isFinish = true;
    var scrollFunc = function(e){
            if(isFinish){
                var scrollTop = body.scrollTop;
                    e = e || window.event;
                if((e.wheelDelta<0|| e.detail>0)  ){
                    scroll(scrollTop,pageHeight1);
                }else if((e.wheelDelta>0 || e.detail<0) ){
                    scroll(scrollTop,-pageHeight1);
                }
            }
    };
    var scroll = function(scrTop,pageHeight1){
        isFinish = false;
        $(body).animate({scrollTop:scrTop+pageHeight1},800,"swing",function(){
            isFinish = true;
        });

    };

    if(navigator.userAgent.indexOf("Firefox")>0){
        if(document.addEventListener){
        document.addEventListener('DOMMouseScroll',scrollFunc,false);
        }
    }else{
        document.onmousewheel = scrollFunc;
    };


		//顶部导航功能
    $(".header p").bind("click",function(e) {
        e.stopPropagation();
        e.preventDefault();
        var body;
        if(navigator.userAgent.indexOf("Firefox")>0 || navigator.userAgent.indexOf("MSIE")>0){
        body = document.documentElement;
        }else{
        body = document.body;
        }
        var ind = $(this).index(),
            pageHeight = $(".l_p2Box").height();
        $(".l_focus").removeClass("l_focus");
        $(this).addClass("l_focus");
        $(body).animate({scrollTop:pageHeight*ind},600,'swing');
    });
    $(".Close").bind("click",function(e) {
        e.stopPropagation();
        e.preventDefault();
        $(".mask").hide();
        $(".l_allWin").hide();
        $("#main").css("overflow","auto");
        isFinish = true;
    });
    $(".l_pic").bind("click",function(e) {
        e.stopPropagation();
        e.preventDefault();
        $(".mask").show();
        $(".l_p2win").show();
        $("#main").css("overflow","hidden");
        isFinish = false;
    });
    $(".l_newsL").bind("click",function(e) {
        e.stopPropagation();
        e.preventDefault();
        $(".mask").show();
        $(".l_p3win").show();
        $("#main").css("overflow","hidden");
        isFinish = false;
    });
    $(".l_cont img").bind("click",function(e) {
        e.stopPropagation();
        e.preventDefault();
				var imgurl = $(this).attr("src").replace(/306/,856).replace(/222/,618);
        $(".mask").show();
        $(".l_p4win").css({"background":"url("+imgurl+") 50% 50% no-repeat","background-size":" cover"}).slideDown();
        $("#main").css("overflow","hidden");
        isFinish = false;
    });
    $(".l_p5Box button").bind("click",function(e) {
        e.stopPropagation();
        e.preventDefault();
        $(".mask").show();
        $(".l_p5win").show();
        $("#main").css("overflow","hidden");
        isFinish = false;
    });
    $("#downArrow").bind("click",function(e) {
        e.stopPropagation();
        e.preventDefault();
        var p6top = parseInt($(".l_listBox").css("top")),
            p6leg = $(".l_jusCont ul li").length,
            p6Hig = $(".l_jusCont ul li").outerHeight(true);

        if (p6top !=(-$(".l_listBox").outerHeight(true)+p6Hig+30)) {
             $(".l_listBox").animate({top:p6top-p6Hig},600,'swing');
        };
    });
    $("#upArrow").bind("click",function(e) {
        e.stopPropagation();
        e.preventDefault();
        var p6top = parseInt($(".l_listBox").css("top")),
            p6leg = $(".l_jusCont ul li").length,
            p6Hig = $(".l_jusCont ul li").outerHeight(true);
        if (p6top !=30 ) {
            $(".l_listBox").animate({top:p6top+p6Hig},600,'swing');
        };
    });
    $("#rightArrow").bind("click",function(e) {
        e.stopPropagation();
        e.preventDefault();
        var p2left = parseInt($(".l_p2win ul").css("left")),
            p2leg = $(".l_p2win ul li").length,
            p2Wid = $(".l_p2win ul li").width();
        if (p2left !=(-$(".l_p2win ul").width()+p2Wid)) {
            $("#listNum").text((-p2left/p2Wid-2+p2leg)+"/"+p2leg)
             $(".l_p2win ul").animate({left:p2left-p2Wid},600,'swing');
        };
    });
    $("#leftArrow").bind("click",function(e) {
        e.stopPropagation();
        e.preventDefault();
        var p2left = parseInt($(".l_p2win ul").css("left")),
            p2leg = $(".l_p2win ul li").length,
            p2Wid = $(".l_p2win ul li").width();
        if (p2left !=0 ) {
            $("#listNum").text((-p2left/p2Wid)+"/"+p2leg)
            $(".l_p2win ul").animate({left:p2left+p2Wid},600,'swing');
        };
    });
//新增产品展示方法 by刘淼20161104
		$(".l_cont section").each(function () {
			var imgWid = $(".l_titShow img").outerWidth(true),
					imgleg = $(this).children("img").length;
			$(this).width(imgWid*imgleg);
		})

		$(".l_proTitleRA").bind("click",function () {
			var imgleg = $(".l_proTitle").children("img").length;
			if ($(".l_proTitle .l_titShow").index()!=imgleg-1) {
				$(".l_proTitle .l_titShow").removeClass("l_titShow").next().addClass("l_titShow");
			}else{
				$(".l_proTitle .l_titShow").removeClass("l_titShow");
				$(".l_proTitle").children("img").eq(0).addClass("l_titShow")
			}
			$(".l_cont section").removeClass("l_titShow").css("left",0);
			$("#"+$('.l_titShow').attr('data-title')).addClass("l_titShow");
		})
		$(".l_proTitleLA").bind("click",function () {
			var imgleg = $(".l_proTitle").children("img").length;
			if ($(".l_proTitle .l_titShow").index()!=0) {
				$(".l_proTitle .l_titShow").removeClass("l_titShow").prev().addClass("l_titShow");
			}else{
				$(".l_proTitle .l_titShow").removeClass("l_titShow");
				$(".l_proTitle").children("img").last().addClass("l_titShow")
			}
			$(".l_cont section").removeClass("l_titShow").css("left",0);
			$("#"+$('.l_titShow').attr('data-title')).addClass("l_titShow");
		})

    $("#p4right").bind("click",function p4right(e) {
			$("#p4right").unbind("click");
        e.stopPropagation();
        e.preventDefault();
        var p2left = parseInt($(".l_cont .l_titShow").css("left")),
            p2leg = $(".l_cont .l_titShow img").length,
            p2Wid = $(".l_cont .l_titShow img").outerWidth(true);
        if (p2left >(-$(".l_cont .l_titShow").width()+p2Wid*3)) {
             $(".l_cont .l_titShow").animate({left:p2left-p2Wid},600,'swing' );
        };
				setTimeout(function () { $("#p4right").bind("click",p4right)},700);
    });

    $("#p4left").bind("click",function p4left(e) {
        e.stopPropagation();
        e.preventDefault();
				$("#p4left").unbind("click");
        var p2left = parseInt($(".l_cont .l_titShow").css("left")),
            p2leg = $(".l_cont .l_titShow img").length,
            p2Wid = $(".l_cont .l_titShow img").outerWidth(true);

        if (p2left !=0 ) {
            $(".l_cont .l_titShow").animate({left:p2left+p2Wid},600,'swing');

        };
				setTimeout(function () { $("#p4left").bind("click",p4left)},700);
    });
//新增产品展示方法结束


    $(".l_jusCont ul li p").hover(function(e){
        e.stopPropagation();
        e.preventDefault();
        isFinish = false;
        $("#main").css("overflow","hidden");
    },function(e){
        e.stopPropagation();
        e.preventDefault();
        isFinish = true;
        $("#main").css("overflow","auto");
    });

		//新闻页面分页功能
    function pages(pc){
      $(".tcdPageCode").createPage({
          pageCount:pc,
          current:1,
          backFn:function(p){
              console.log(p);//此处回传点击的页码，然后执行加载页面方法
              $(".tcdPageCode").css("margin-left",-$(".tcdPageCode").width()/2)
          }
      });
    };
    pages(22);//此处创建分页标签，传入总页数值
    $(".tcdPageCode").css("margin-left",-$(".tcdPageCode").width()/2);
});
