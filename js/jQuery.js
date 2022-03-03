$(function(){
    // alert('웹페이지로 제작하였으며 1180px 이상의 size에서 봐주시는걸 권장합니다.');
    scroll_page();
    nav_active()
    typingText();
    img_hover();
    video_active();
    shop_slide();
});

function scroll_page(){
    $('html,body').animate({
        scrollTop : 0
    })

    $('[data-page="scroll_wrap"]').on('mousewheel DOMMouseScroll',function(e){
        e.preventDefault();
        var deltaX = e.originalEvent.wheelDelta;
        if($('html').is(':animated')){
            return;
        }
        if(deltaX > 0){
            if($(this).prev().attr('data-page') == 'scroll_wrap'){
                $('html').stop().animate({
                    scrollTop : $(this).prev().offset().top
                })
            }
        }else{
            if($(this).next().attr('data-page') == 'scroll_wrap'){
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
            $('nav div ol').css('background-color','rgba(255, 255, 255, 0.3)');
        }else if($('section:nth-of-type(1)').offset().top == $(window).scrollTop()){
            $('nav div').addClass('scroll');
            $('nav div').eq(0).find('span').css('border','3px solid #8DCEEF');
            $('nav div').eq(1).find('span').css('background-color','#8DCEEF');
            $('nav div ol').css('background-color','#8DCEEF');
        }else if($('section:nth-of-type(2)').offset().top == $(window).scrollTop()){
            $('nav div').addClass('scroll');
            $('nav div').eq(0).find('span').css('border','3px solid white');
            $('nav div').eq(1).find('span').css('background-color','white');
            $('nav div ol').css('background-color','rgba(255, 255, 255, 0.3)');
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
        }else if($('footer').offset().top == $(window).scrollTop()){
            $('nav div').addClass('scroll');
            $('nav div').eq(0).find('span').css('border','3px solid #8DCEEF');
            $('nav div').eq(1).find('span').css('background-color','white');
            $('nav div ol').css('background-color','#8DCEEF');
        }else{
            $('nav div').removeClass('scroll');
            $('nav div ol').css('background-color','rgba(255, 255, 255, 0)');
        }
    });

    $('.wrap > ul li').click(function(){
        $('.wrap > ul li').removeClass('active');
        $(this).addClass('active');
        $('html').animate({
            scrollTop : $('[data-page="scroll_wrap"]').eq($('.wrap > ul li.active').index()).offset().top
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
        let act_location_before = $('section:nth-of-type(3) ul li.active').index();
        ul_list.removeClass('active');
        ol_list.removeClass('active');
        $(this).addClass('active');
        let act_location_after = $('section:nth-of-type(3) ul li.active').index();
        $('section:nth-of-type(3) ol').eq(act_location_after).addClass('active');
        $(this).find('li').addClass('active');
        $('section:nth-of-type(3) ol').removeClass('active')
        $('section:nth-of-type(3) ol').eq(act_location_after).addClass('active');
        $('section:nth-of-type(3) ol').eq(act_location_after).children().addClass('active');

        $('#marker').css({
            'z-index' : '-1',
            'height' : '33px',
            'left' : e.target.offsetLeft,
            'top' : '-7px',
            'border-radius' : '5px',
            'background-color' : $('section:nth-of-type(3) ul li.active').attr('data-color'),
            'width' : e.target.offsetWidth
        })

        if(act_location_before < act_location_after){
            $('section:nth-of-type(3) ol').eq(act_location_before).children('li').css('transform','translateX(-70px)')
        }else{
            $('section:nth-of-type(3) ol').eq(act_location_before).children('li').css('transform','translateX(70px)')
        }
    })
}

function shop_slide(){
    $('section:nth-of-type(4) ul li').addClass('active');
    $('section:nth-of-type(4) ol li').eq(0).addClass('active');
    $('section:nth-of-type(4) div:nth-of-type(2) span').eq(0).addClass('active');
    $('section:nth-of-type(4) ul').addClass('active');

    function ul_act(){
        if($('section:nth-of-type(4) ul li.active').length == 1){
            $('section:nth-of-type(4) ul.active li').addClass('active');
            $('section:nth-of-type(4) ul').addClass('active');
        }else if($('section:nth-of-type(4) ul li.active').length == 6){
            $('section:nth-of-type(4) ul.active li').removeClass('active');
            $('section:nth-of-type(4) ul.active li').eq(5).addClass('active');
            $('section:nth-of-type(4) ul').addClass('active');
        }else{
            $('section:nth-of-type(4) ul').removeClass('active');
        }
    }

    $('section:nth-of-type(4) div:nth-of-type(2) span').eq(0).on('click',function(){
        $('section:nth-of-type(4) ul li.active').prev().addClass('active');
        ul_act();
    })
    $('section:nth-of-type(4) div:nth-of-type(2) span').eq(1).on('click',function(){
        if($('section:nth-of-type(4) ul li.active').length > 1){
            $('section:nth-of-type(4) ul li.active').eq(0).removeClass('active');
        }
        ul_act();
    })

    $('section:nth-of-type(4) div:nth-of-type(2) span').on('click',function(){
        let ol_act = $('section:nth-of-type(4) ul li').length - $('section:nth-of-type(4) ul li.active').length
        $('section:nth-of-type(4) ol li').removeClass('active');
        $('section:nth-of-type(4) ol li').eq(ol_act).addClass('active');
    })

    $('section:nth-of-type(4) ol li').on('click',function(){
        $('section:nth-of-type(4) ol li').removeClass('active');
        $(this).addClass('active');
        $('section:nth-of-type(4) ul li').addClass('active');
        let ol_act = $('section:nth-of-type(4) ol li.active').index();
        for(i=0; i<ol_act; i++){
            $('section:nth-of-type(4) ul li').eq(i).removeClass('active');
        }
    })
}