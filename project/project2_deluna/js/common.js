$(document).ready(function () {

    
    
    
    


    //스크롤트리거
    $(window).scroll(function () {
        $('.ani_stop').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('ani_stop');
            }
            if (bottom_of_window < bottom_of_object) {
                $(this).addClass('ani_stop');
            }
        });
    });

    
    
    
    
    //main_visual
    $(".mv").bxSlider({
        auto: true,
        mode: 'fade',
        stop: 5000,
        speed: 1200,
        pager: false,
        controls: false,
    });



    
    
    //mobile_menu
    $(".m_menu").click(function(){
       $(".mgnb_wrap").animate({
           left:'0'
       });
    });
    
    $(".close").click(function(){
        $(".mgnb_wrap").animate({
           left:'100%' 
        });
    });
    
    
    
    
    //member slide
    
    
    $('#character .member').slick({
        autoplay: true,
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        autoPlay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                }
    }
  ]
    });





    //video slide    

    $('#video .vd_bg').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
        fade: true,
        asNavFor: '#video .vd_list',
          
    
    });
              
    $('#video .vd_list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#video .vd_bg',
        dots: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 10000,
        centerMode: true,
        focusOnSelect: true,
                       
    });




});
