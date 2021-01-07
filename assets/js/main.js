$(document).ready(function(){

    /* 인트로 */
    var conceptImg = 0;
    var num = 1;
    conceptImg = setInterval(function(){
        if(num == 13){
            clearInterval(conceptImg);
            $('#conceptImg').hide();
        }
        num++;
        console.log(num);
        $('#conceptImg img').eq(num).show().siblings().hide();
    },300);


setTimeout(function(){
    $('#conceptTxt').addClass('scale');
},3600);

setTimeout(function(){
    $('#conceptTxt .left_txt').addClass('flip');
},4600);

setTimeout(function(){
    $('#conceptTxt').animate({left:'-50%'});
},5900);

setTimeout(function(){
    $('#home #rightText').addClass('scale');
    $('#conceptTxt').animate({left:'-100%'},function(){
        $('#intro').hide();
        $('#home #leftText').addClass('scale');
    });
},7000);

/* main - 비디오텍스트 */
var _home = $('#home');
var left_txt_pos = parseInt(_home.find('#leftText').css('left'));
var right_txt_pos = parseInt(_home.find('#rightText').css('left'));

/* about버튼 hover 이벤트 */
_home.find('#leftText').on({
    'mouseenter focus':function(){
    $(this).stop().animate({left:left_txt_pos-60,top:60},'fast');
    },
    'mouseleave blur':function(){
    $(this).stop().animate({left:left_txt_pos,top:120},100);  
    }
});
/* 포트폴리오 버튼 hover이벤트 */
_home.find('#rightText').on({
    'mouseenter focus':function(){
    $(this).stop().animate({left:right_txt_pos+60,top:150},'fast');
    },
    'mouseleave blur':function(){
    $(this).stop().animate({left:right_txt_pos,top:190},100);  
    }
});

/* about버튼 클릭이벤트 */
_home.find('#leftText').on('click',function(){
    $('#mainWrap').stop().animate({left:'350%'},8000,'easeInExpo');
    $('#aboutWrap').stop().animate({left:0},8000,'easeInExpo');
    $('#about img').addClass('bright');
    setTimeout(function(){
        $('#move_about').addClass('opa0');
    },7500);
});



});