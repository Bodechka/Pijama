$(document).ready(function(){

    /* Slider */
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        dotsClass: "slide-dots",
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                  arrows: false
                }
              }
        ]
    });

    /* Burger */
    $('.menu-icon').click(function(){
        $('nav').slideToggle(300);
        $('.menu-wrap').addClass("col-12");
        $('.menu').css({
            'display': 'flex',
            'flex-direction': 'column',
            'margin-bottom': '40px'
        })  
    })

    /* Menu scroll */

    $('ul.menu a[href^="#"]').click(function(){
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 500);
      return false;
    })
});