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
    $('#mainWrap').stop().animate({left:'350%'},9000,'easeInCubic');
    $('#aboutWrap').stop().animate({left:0},9000,'easeInCubic');
});


/* 포트폴리오 섹션 */
/* pc web 스크린 position변경 */
var scrollTimer = 0;
var pf1_pos = $('#pf1').offset().top;
var screenH = $('.pc_web .screen').outerHeight();
var screenTop = pf1_pos - screenH;
$(window).on('scroll',function(){
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function(){
        // console.log($(this).scrollTop());
        if($(this).scrollTop() < pf1_pos){
            $('.pc_web .screen').css({position:'absolute',top: screenTop});
        }else if($(this).scrollTop() < pf1_pos*2){
            $('.pc_web .screen').css({position:'fixed',top: screenTop});
        }else{
            $('.pc_web .screen').css({position:'absolute',top:pf1_pos + screenTop});
        }

        if($(this).scrollTop() < 1493){
            $('.pc_web .screen img').attr({'src':'assets/images/portfolio/jaws_screen.jpg','alt':'죠스떡볶이 메인화면'});
        }else{
            $('.pc_web .screen img').attr({'src':'assets/images/portfolio/pubg_screen.png','alt':'PUBG 메인화면'});
        }
    },10);
});

/* pf3 title 위치조정 */
var pointHei = $('#pf3 .pf_point').css('height');
console.log(pointHei);
$('#pf3 .pf_tit').css({bottom:378});



});