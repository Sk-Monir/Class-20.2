$(function(){
    // Slick Slider js Start
    $('.banner_slider').slick({
        prevArrow: '<i class="banner_slider_icon fa-solid fa-chevron-left"></i>',
        nextArrow: '<i class="banner_slider_icon fa-solid fa-chevron-right"></i>',
        autoplay: true,
        autoplaySpeed:3000,
        speed:1000,
        dots:true,
        dotsClass:'banner_slider_dots',

    });
    // Slick Slider  js End
    // Back to top Start
    $(window).on('scroll',function(){
        var scrollTop= $(this).scrollTop();

        if(scrollTop > 500){
            $('.back_to_top').fadeIn(500);
        }else{
            $('.back_to_top').fadeOut(500);
        }
    });
    $('.back_to_top').on('click',function(){
        $('html , body').animate({
            scrollTop: 0,
        },500);
    });
    // Back to top End
    // Preloader Start
    $(window).on('load',function(){
        $('.preloader').fadeOut(3000)
    });
    // Preloader End
    // Smooth scroll Start
    $('a').on('click',function(e){
        e.preventDefault();//off Defult behavior

        var hash=this.hash;

        if(this.hash !== ' '){
            $(' html ,body ').animate({
                scrollTop: $(hash).offset().top
            },800)
        }
    
    });
    //Smooth Scroll End
    //Sticky Menu Start
    $(window).on('scroll',function(){

        var scrollTop = $(window).scrollTop();
        var height = $('#nav').height();
        
        if(scrollTop > height){
            $('#nav').addClass('menu_scroll_animate')
        }else{
            $('#nav').removeClass('menu_scroll_animate')

        }

    });
    //Sticky Menu End
});