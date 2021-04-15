$(document).ready(function () {


    
            //util hover 메뉴
            $('.mypage,.lang').hide();
            $('.util>.util_lang').mouseenter(function(){
               $(this).children('.lang').fadeIn(); 
            });
    
            $('.util>.util_lang').mouseleave(function(){
               $(this).children('.lang').fadeOut(); 
            });
    
    
            //사이트 맵 영역 모달팝업
            $('#allmenu_area').hide();

            $('.sitemap').click(function(){
               $('#allmenu_area').fadeIn(); 
            });


            $('.close').click(function(){
                $('#allmenu_area').fadeOut();    
            });
         
    
    
    
    
            //2차 메뉴
            $('.dp2_bg,.dp2').hide();
            $('.gnb>li').mouseenter(function () {
                $(this).children('.dp2').stop().slideDown();
                $('#header .dp2_bg').stop().slideDown();
            });

            $('.gnb>li').mouseleave(function () {
                $(this).children('.dp2_bg,.dp2').stop().slideUp();
                $('#header .dp2_bg').stop().slideUp();
            });



            //메인 비주얼 슬라이드 배너
            var slider = $(".mv").bxSlider({
                auto: true
            });




            $('.backto').bxSlider({
                auto: true,
                moveSlides: 1,
                maxSlides: 3,
                slideWidth: 390,
                pager: false, 
            });





});







