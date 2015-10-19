$(document).ready(function () {

    $(".popup-close").click(function(e){
        e.preventDefault();
        $(this).closest('.popup').hide();
    })
    $('.popup .popup-container').click(function(e) {
        e.stopPropagation();
    });
    $('.popup').click(function(e) {
        e.stopPropagation();
        $(this).hide();
    });

    $('.menu-btn').click(function(e) {
        e.preventDefault();
        $('.big-menu').show();
    });
    $('.close-big-menu').click(function(e) {
        e.preventDefault();
        $('.big-menu').hide();
    });

    $('.header .phone').click(function(e) {
        e.preventDefault();
        if( $(this).hasClass('act')){
            $(this).removeClass('act');
            $('.call-popup').hide();
        }else{
            $(this).addClass('act');
            $('.call-popup').show();
        }        
    });

    $('.auth-btn').click(function(e) {
        e.preventDefault();
        $('.auth-popup').show();
    });


    $(".slider-main-item.item-anim")
        .mousemove(function(e) {
            var _thisW = $(this).width();
            var _coord = parseFloat(-((_thisW - e.clientX)/_thisW * 100 / 10)); 
            $(this).find(".bg-img").css('left',_coord+'%')
        })

    $(".needs-main-block")
        .mousemove(function(e) {
            var _thisW = $(this).width();
            var _coord = parseFloat(-((_thisW - e.clientX)/_thisW * 100 / 10)); 
            $(this).find(".bg-img").css('left',_coord+'%')
        })

    
   
    $(".main-slider-block").height($(window).height() - 160);
    $(".needs-main-block").height($(window).height() - 160);

    $(".slider-main .slider-main-item").height($(window).height() - 160);
    
    //setTimeout(function(){
    //    $(".key-advantage .container .text").each(function( i ) {
    //        var _parentH = $(this).parent().innerHeight();
    //        var _thisH = $(this).innerHeight();
    //
    //        var _padding = (_parentH - _thisH)/2;
    //        $(this).css("padding-top", _padding);
    //    });
    //},500)
    //
    //
    //$('.key-advantage .text').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
    //    if (isInView) {
    //        $(this).addClass('animated');
    //    }
    //});
    //$('.key-advantage .img').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
    //    if (isInView) {
    //        $(this).addClass('animated');
    //    }
    //});

    $('.slider-main').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
    });

    $('.spec-offer-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
    });

    $('.scroll-top').click(function() {
        $('body,html').animate({
            scrollTop : 0
        }, 1000, function() {
            productScroll = 0
        });
    });

    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();

        if (windowpos > $(window).height()) {
            $('.scroll-top').show();
        }else {
            $('.scroll-top').hide();
        }
    })
});