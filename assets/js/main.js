$(document).ready(function(){
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); //뷰포트넓이
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);  //뷰포트높이
    // console.log(w, h);

    /* 인트로 */
    var conceptImg = 0;
    var num = 1;
    conceptImg = setInterval(function(){
        if(num == 13){
            clearInterval(conceptImg);
            $('#conceptImg').hide();
        }
        num++;
        // console.log(num);
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
    $('#mainWrap').stop().animate(
        {left:'350%'},
        {
            duration: 8000,
            easing: 'easeInCirc',
            progress: function(animation, progress) {
                if (progress > 0.71) {
                    // console.log(progress);
                    $('#clock>div').fadeIn();
                }
            }
       }
    );

    $('#aboutWrap').stop().animate({left:0},8000,'easeInCirc');
    $('#about img').addClass('bright'); 
    setTimeout(function(){
        $('#move_about').addClass('opa0');
    },7500);
});

// #about의 그림과 텍스트에 번호메기기
var stepElems = document.querySelectorAll('#about .step');
var graphicElems = document.querySelectorAll('#about .graphic-item');
// console.log(stepElems, graphicElems);
var currentItem = graphicElems[0]; /* 현재 활성화된(visible클래스가 붙은) .graphic-item을 지정 */
var ioIndex;

const io = new IntersectionObserver((entries, observer) =>{
    console.log(entries);
    ioIndex = entries[0].target.dataset.index*1;
    console.log(ioIndex);
});

for(var i=0;i<stepElems.length;i++){
    io.observe(stepElems[i]);
    stepElems[i].dataset.index = i;
    graphicElems[i].dataset.index = i;
}

function activate(){
    currentItem.classList.add('visible');
}
function inactivate(){
    currentItem.classList.remove('visible');
}
/* about에서 스크롤이벤트 */
$(window).on('scroll',function(){
    var step;
    var boundingRect;

    for(var i=ioIndex-1;i<ioIndex+2;i++){
        step = stepElems[i];
        if(!step) continue;
        boundingRect = step.getBoundingClientRect();
        // console.log(boundingRect.top,$(window).innerHeight() * 0.1); 
        if( boundingRect.top > $(window).innerHeight() * 0.1 && boundingRect.top < $(window).innerHeight() * 0.8){
            // console.log(step.dataset.index);          
            inactivate();
            currentItem =  graphicElems[step.dataset.index];
            activate();
            
        }
    }
});

});