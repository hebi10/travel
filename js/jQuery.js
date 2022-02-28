$(function(){
    fullpage();
    nav_active()
    typingText();
    img_hover();
    video_active();
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
    
    $('nav div').addClass('scroll');
    $(window).scroll(function(){
        if($('header').offset().top == $(window).scrollTop()){
            $('nav div').addClass('scroll');
            $('nav div').eq(0).find('span').css('border','3px solid white');
            $('nav div').eq(1).find('span').css('background-color','white');
            $('nav div ol').css('background-color','white');
        }else if($('section:nth-of-type(1)').offset().top == $(window).scrollTop()){
            $('nav div').addClass('scroll');
            $('nav div').eq(0).find('span').css('border','3px solid #8DCEEF');
            $('nav div').eq(1).find('span').css('background-color','#8DCEEF');
            $('nav div ol').css('background-color','#8DCEEF');
        }else if($('section:nth-of-type(2)').offset().top == $(window).scrollTop()){
            $('nav div').addClass('scroll');
            $('nav div').eq(0).find('span').css('border','3px solid white');
            $('nav div').eq(1).find('span').css('background-color','white');
            $('nav div ol').css('background-color','white');
        }else if($('section:nth-of-type(3)').offset().top == $(window).scrollTop()){
            $('nav div').addClass('scroll');
            $('nav div').eq(0).find('span').css('border','3px solid #8DCEEF');
            $('nav div').eq(1).find('span').css('background-color','#8DCEEF');
            $('nav div ol').css('background-color','#8DCEEF');
        }else if($('section:nth-of-type(4)').offset().top == $(window).scrollTop()){
            $('nav div').addClass('scroll');
            $('nav div').eq(0).find('span').css('border','3px solid #8DCEEF');
            $('nav div').eq(1).find('span').css('background-color','#8DCEEF');
            $('nav div ol').css('background-color','#8DCEEF');
        }else if($('section:nth-of-type(5)').offset().top == $(window).scrollTop()){
            $('nav div').addClass('scroll');
            $('nav div').eq(0).find('span').css('border','3px solid #8DCEEF');
            $('nav div').eq(1).find('span').css('background-color','#8DCEEF');
            $('nav div ol').css('background-color','#8DCEEF');
        }else{
            $('nav div').removeClass('scroll');
        }
    });

    $('.wrap > ul li').click(function(){
        $('.wrap > ul li').removeClass('active');
        $(this).addClass('active');
        $('html').animate({
            scrollTop : $('[data-scroll="fullpage"]').eq($('.wrap > ul li.active').index()).offset().top
        })
    });
}

function nav_active(){
    $('nav div:nth-child(2)').on('click', function(){
        $('nav div:nth-child(2)').toggleClass('active')
    })
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

function video_active(){
    let ul_list = $('section:nth-of-type(3) ul li');
    let ol_list = $('section:nth-of-type(3) ol li');
    ul_list.eq(0).addClass('active');
    $('section:nth-of-type(3) ol').eq(0).addClass('active');
    $('section:nth-of-type(3) ol.active li').addClass('active');

    $('#marker').css({
        'z-index' : '-1',
        'height' : '33px',
        'left' : ul_list.eq(0).offset().left,
        'top' : '-7px',
        'border-radius' : '5px',
        'width' : '196.42px'
    })
    
    ul_list.hover(function(e){
        ul_list.removeClass('active');
        ol_list.removeClass('active');
        $(this).addClass('active');
        let act_location = $('section:nth-of-type(3) ul li.active').index();
        $('section:nth-of-type(3) ol').eq(act_location).addClass('active');
        $(this).find('li').addClass('active');
        $('section:nth-of-type(3) ol').removeClass('active')
        $('section:nth-of-type(3) ol').eq(act_location).addClass('active');
        $('section:nth-of-type(3) ol').eq(act_location).children().addClass('active');


        $('#marker').css({
            'z-index' : '-1',
            'height' : '33px',
            'left' : e.target.offsetLeft,
            'top' : '-7px',
            'border-radius' : '5px',
            'background-color' : $('section:nth-of-type(3) ul li.active').attr('data-color'),
            'width' : e.target.offsetWidth
        })

    })

}