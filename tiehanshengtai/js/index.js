/**
 * Created by Administrator on 2016/9/19 0019.
 */
var $currEl = $("#loading");
//$currEl = $("#page3")
var timer = 0
var mytimer = setInterval(function(){
    timer=parseInt(timer+Math.random()*10);
    if(timer>100){
        clearTimeout(mytimer);
        enterPageTwo();
        return;
    }

    $(".timer").html(timer);
},100);

function enterPageTwo(){
    if($currEl.attr("id") == 'app'){
        $(".bottom-text").addClass("zoom");
    }
    $currEl.fadeOut(3000);
    $currEl.next().fadeIn(3000);
    //最后一步
    $currEl=$currEl.next();
    if($currEl.attr("id") == 'page3'){
        setTimeout(function(){
            $("#page3 .title").css("margin-left","0")

        },2000)
        setTimeout(function(){
            $(".page3Img").addClass("myAnimated")
        },3000)
        return;
    }
    if($currEl.attr("id") == 'page1'){
        var num = 100;
        setTimeout(function(){
            $("#page1 .text img:nth-child(15)").css("left","0%")
        },num)
        setTimeout(function(){
            $("#page1 .text img:nth-child(14)").css("left","0%")
        },num*2)
        setTimeout(function(){
            $("#page1 .text img:nth-child(13)").css("left","0%")
        },num*3)
        setTimeout(function(){
            $("#page1 .topImg").addClass("bounceInDown");
            $("#page1 .text img:nth-child(12)").css("left","0%")
        },num*4)
        setTimeout(function(){
            $("#page1 .text img:nth-child(11)").css("left","0%")
        },num*5)
        setTimeout(function(){
            $("#page1 .text img:nth-child(10)").css("left","0%")
        },num*6)
        setTimeout(function(){
            $("#page1 .text img:nth-child(9)").css("left","0%")
        },num*7)
        setTimeout(function(){
            $("#page1 .text img:nth-child(8)").css("left","0%")
        },num*8)
        setTimeout(function(){
            $("#page1 .text img:nth-child(7)").css("left","0%")
        },num*9)
        setTimeout(function(){
            $("#page1 .text img:nth-child(6)").css("left","0%")
        },num*10)
        setTimeout(function(){
            $("#page1 .text img:nth-child(5)").css("left","0%")
        },num*11)
        setTimeout(function(){
            $("#page1 .text img:nth-child(4)").css("left","0%")
        },num*12)
        setTimeout(function(){
            $("#page1 .text img:nth-child(3)").css("left","0%")
        },num*13)
        setTimeout(function(){
            $("#page1 .text img:nth-child(2)").css("left","0%")
        },num*14)
        setTimeout(function(){
            $("#page1 .text img:nth-child(1)").css("left","0%")
        },num*15)
        return;
    }
    if($currEl.attr("id") == 'page2'){
        setTimeout(function(){
            $("#page2 .right").css("margin-left","0")
        },1500)
        setTimeout(function(){
            $("#page2 .left").css("margin-left","0")
        },3000)

    }
    if($currEl.attr("id") == 'page5'){
        setTimeout(function(){
            $('#page5 .center-text').fadeIn(1000)
        },500);
        setTimeout(function(){
            $('#page5 .top-text').fadeIn(1000)
            $("#page5 .text-content").fadeIn(1500)
        },1500);
        setTimeout(function(){
           $("#page5 .temp").addClass("jump-text")
        },3000);
        return
    }
    if($currEl.attr("id") == 'page6'){
        setTimeout(function(){
            $('#page6 .center-text').fadeIn(1000)
        },1000);
        setTimeout(function(){
            $('#page6 .top-text').fadeIn(1000)
            $("#page6 .text-content").fadeIn(1500)
        },2000);
        setTimeout(function(){
            $("#page6 .temp").addClass("jump-text")
        },3500);
        return
    }
    if($currEl.attr("id") == 'page7'){
        setTimeout(function(){
            $('#page7 .center-text').fadeIn(1000)
        },1000);
        setTimeout(function(){
            $('#page7 .top-text').fadeIn(1000)
            $("#page7 .text-content").fadeIn(1500)
        },2000);
        setTimeout(function(){
            $("#page7 .temp").addClass("jump-text")
        },3500);
        return
    }
    if($currEl.attr("id") == 'page8'){
        setTimeout(function(){
            $('#page8 .center-text').fadeIn(1000)
        },1000);
        setTimeout(function(){
            $('#page8 .top-text').fadeIn(1000)
            $("#page8 .text-content").fadeIn(1500)
        },2000);
        setTimeout(function(){
            $("#page8 .temp").addClass("jump-text")
        },3500);
        return
    }
    if($currEl.attr("id") == 'page9'){

        setTimeout(function(){
            $('#page9 .center-text').fadeIn(1000)
        },1000);
        setTimeout(function(){
            $('#page9 .top-text').fadeIn(1000)
            $("#page9 .text-content").fadeIn(1500)
        },2000);
        setTimeout(function(){
            $("#page9 .temp").addClass("jump-text")
            $("#page9 .gezi").fadeOut(2000,function(){
                this.css("display","none");
            })

        },3500);


        return
    }

}