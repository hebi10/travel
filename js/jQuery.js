$(function(){
    fullpage();
    typingText();
    img_hover();
    // color_move();
});

function fullpage(){
    $('html').animate({
        scrollTop : 0
    })

    var pageindex = $('[data-scroll="fullpage"]').length;
    for (var i=1;i<=pageindex;i++){
        $('.wrap > ul').append('<li></li>');
    };
    $('ul li').eq(0).addClass('active');

    $('[data-scroll="fullpage"]').on('mousewheel DOMMouseScroll',function(e){
        e.preventDefault();
        var deltaX = e.originalEvent.wheelDelta;
        if($('html').is(':animated')){
            return;
        }
        if(deltaX > 0){
            if($(this).prev().attr('data-scroll') == 'fullpage'){
                $('html').stop().animate({
                    scrollTop : $(this).prev().offset().top
                })
            }
        }else{
            if($(this).next().attr('data-scroll') == 'fullpage'){
                $('html').stop().animate({
                    scrollTop : $(this).next().offset().top
                })
            }
        }
    })

    $('.wrap > ul li').click(function(){
        $('.wrap > ul li').removeClass('active');
        $(this).addClass('active');
        $('html').animate({
            scrollTop : $('[data-scroll="fullpage"]').eq($('.wrap > ul li.active').index()).offset().top
        })
    });
}

function typingText(){
    var typingBool = false; 
    var typingIdx=0; 
    var sct_name = $('section:nth-of-type(1)');
    var typingTxt = sct_name.find('div h2').text();
    var section01_Top = sct_name.offset().top;
    function scroll_active(){
        $('section:nth-of-type(1) div').addClass('active');
    }

    $(window).scroll(function(){
        if($(window).scrollTop() == section01_Top && sct_name.find('div p').text() == 0){
            setInterval(scroll_active,100);
            setTimeout(function(){
                typingTxt=typingTxt.split(''); 

                function typing(){ 
                    if(typingIdx<typingTxt.length){ 
                        sct_name.find('div p').append(typingTxt[typingIdx]);
                        typingIdx++; 
                    }else{ 
                        clearInterval(tyInt); 
                    } 
                } 
            
                if(typingBool==false){ 
                    typingBool=true;     
                    var tyInt = setInterval(typing,100);
                } 
            },600)
        }
    });
}

function img_hover(){
    $('section:nth-of-type(2) ul li').hover(function(){
        $('section:nth-of-type(2) ul li').removeClass('hover');
        $(this).addClass('hover');
    })
}

function color_move(){
    $('section:nth-of-type(3) ul').before('<span></span>');
}