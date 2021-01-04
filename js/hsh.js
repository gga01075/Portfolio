$(document).ready(function(){
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
});

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