/**
 * Created by Administrator on 2016/11/22.
 */
window.onload=function () {
$('#header .xiala>a').hover(function () {
    $('#header .xiala ul').show()
});
$('#header').mouseleave(function () {
    $('#header .xiala ul').hide()

});
    var a=0;
    var timera=0;
$('#lunbo .next').click(function () {
    a++;
    if(a>8){a=0}
    $('#lunbo li').eq(a).fadeIn().siblings().fadeOut()
});
    $('#lunbo .prev').click(function () {
        a--;
        if(a<0){a=8}
        $('#lunbo li').eq(a).fadeIn().siblings().fadeOut()
    });
 $('#lunbo').hover(function () {
     $('#lunbo .prev').show();
     $('#lunbo .next').show();
     clearInterval(timera)
 },function () {
     $('#lunbo .prev').hide();
     $('#lunbo .next').hide();
     clearInterval(timera);
     timera=setInterval(
         function () {
             a--;
             if(a<0){a=8}
             $('#lunbo li').eq(a).fadeIn().siblings().fadeOut()
         },1000
     )
 }).trigger('mouseleave');

    function  movea(box,btn,time) {
        var times = null;
        var a = 0;
        var obox=box.find('li');
        var obtn=btn.find('li');
        box.hover(function () {
            clearInterval(times)
        }, function () {
            clearInterval(times);
            times = setInterval(
                function move() {
                    a++;
                    if (a > 1) {
                        a = 0
                    }
                    obox.eq(a).fadeIn().siblings().fadeOut(1000);
                    obtn.eq(a).css('background','black').siblings().css('background','gray')
                }
                , time)
        }).trigger('mouseleave')
    }
   movea($('.zvyj1 .bd'),$('.zvyj1 .hd'),2000);
    movea($('.zvyj2 .bd'),$('.zvyj2 .hd'),3000);
    movea($('.zvyj3 .bd'),$('.zvyj3 .hd'),2000);
    movea($('.zvyj4 .bd'),$('.zvyj4 .hd'),2000);
    movea($('.zvyj5 .bd'),$('.zvyj5 .hd'),3000);
    movea($('.zvyj6 .bd'),$('.zvyj6 .hd'),2000);
    function  moveb(box,btn,prev,next,hide,time) {
        var times = null;
        var a = 0;
        var obox=box.children('li');
        var obtn=btn.children('li');
        var prev=prev;
        var next=next;
        var len=obox.length;
        var hide=hide

        obtn.hover(function () {
            clearInterval(times);
            obox.eq($(this).index()).fadeIn().siblings('li').fadeOut();
            $(this).css('background','black').siblings('li').css('background','gray');
            hide.hide();
            prev.hide();
            next.hide();
            a=$(this).index()
        });
        prev.click(function () {
            a--;
            if(a<0){a=len-1}
            obox.eq(a).fadeIn().siblings('li').fadeOut(1000);
            obtn.eq(a).css('background','black').siblings().css('background','gray')
        });
       next.click(function () {
            a++;
            if(a>len-1){a=0}
            obox.eq(a).fadeIn().siblings('li').fadeOut(1000);
            obtn.eq(a).css('background','black').siblings().css('background','gray')
        });
        prev.hover(function () {
            hide.fadeOut()
        },function () {
            hide.fadeIn()
        });
        next.hover(function () {
            hide.fadeOut()
        },function () {
            hide.fadeIn()
        });
        box.hover(function () {
            hide.fadeIn();
            prev.fadeIn();
            next.fadeIn();
            clearInterval(times)
        }, function () {
            hide.fadeOut();
            prev.fadeOut();
            next.fadeOut();
            clearInterval(times);
            times = setInterval( function move() {
                a++;
                if (a > len-1) {
                    a = 0
                }
                obox.eq(a).fadeIn().siblings('li').fadeOut(1000)
                obtn.eq(a).css('background','black').siblings('li').css('background','gray')
            }, time)
        }).trigger('mouseleave')
    }
    $('.col-bottom .bd').hover(function () {
        $('.col-bottom .hide').fadeIn()
    },function () {
        $('.col-bottom .hide').fadeOut()
    })
    $('.zvsh .col-row5 .bd').hover(function () {
        $('.zvsh .col-row5 .hide1').fadeIn()
    },function () {
        $('.zvsh .col-row5 .hide1').fadeOut()
    })
    $('#content .zvsh .bd_find').hover(function () {
          $('#content .zvsh .hide2 a').animate({top:'120px',opacity:'1'})
    },function () {
        $('#content .zvsh .hide2 a').animate({top:'0',opacity:'0'})
    })
  moveb($('.col-row1 .bd'),$('.col-row1 .hd'),$('.col-row1 .prev'),$('.col-row1 .next'),$('.col-row1 .hide'),2000)
    moveb($('.col-row2 .bd'),$('.col-row2 .hd'),$('.col-row1 .prev'),$('.col-row1 .next'),$('.col-row2 .hide'),1500)
    moveb($('.col-row3 .bd'),$('.col-row3 .hd'),$('.col-row3 .prev'),$('.col-row3 .next'),$('.col-row3 .hide'),1800)
    moveb($('.zvyi .col-row1 .bd'),$('.col-row1 .hd'),$('.zvyi  .col-row1 .prev'),$('.zvyi  .col-row1 .next'),$('.zvyi  .col-row1 .hide'),1800)
    moveb($('.znms .col-row1 .bd'),$(' .znms .col-row1 .hd'),$('.znms  .col-row1 .prev'),$('.znms  .col-row1 .next'),$('.znms  .col-row1 .hide'),2000)
    moveb($('.znms .col-row2 .bd'),$(' .znms .col-row2 .hd'),$('.znms  .col-row2 .prev'),$('.znms  .col-row2 .next'),$('.znms  .col-row2 .hide'),2000)
    moveb($('.zvfw .col-row1 .bd'),$(' .zvfw .col-row1 .hd'),$('.zvfw  .col-row1 .prev'),$('.zvfw  .col-row1 .next'),$('.zvfw  .col-row1 .hide'),2000)
    moveb($('.zvsh .col-row1 .bd'),$(' .zvsh .col-row1 .hd'),$('.zvsh  .col-row1 .prev'),$('.zvsh  .col-row1 .next'),$('.zvsh  .col-row1 .hide'),2000)

 $(window).scroll(function () {
     var top=$(window).scrollTop();
     var h2=$('#content>h2');
    var p=$('.side p');
     for (var i=0;i<h2.length;i++){
         var h2top=$(h2.eq(i)).offset().top;
         if(top>$(h2.eq(0)).offset().top){$('.side').show()}else {$('.side').hide()}
         if(top>0){$('#sideright').show()}else {$('#sideright').hide()}
         if(top>h2top-100){
             for(var j=0;j<p.length;j++){
                 $(p.eq(j)).hide()
             }
            $(p.eq(i)).show()
         }
     }
 });
    var b=0;
 setInterval(function () {
     b++;
     if(b>2){b=0; $('#linksFooter').css({marginTop:0})}
     movec()
 },2200);
    function movec() {
        var height=$('.foot2').height();
        $('#linksFooter').animate({marginTop:-height*b+'px'},500
        )}



};
