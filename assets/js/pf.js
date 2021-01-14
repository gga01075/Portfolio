$(document).ready(function(){
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
            $('.pc_web .screen img').attr({'src':'../assets/images/portfolio/jaws_screen.JPG','alt':'죠스떡볶이 메인화면'});
        }else{
            $('.pc_web .screen img').attr({'src':'../assets/images/portfolio/pubg_screen.png','alt':'PUBG 메인화면'});
        }
    },10);
});

/* pf3 title 위치조정 */
var pointHei = $('#pf3 .pf_point').css('height');
console.log(pointHei);
$('#pf3 .pf_tit').css({bottom:378});
});