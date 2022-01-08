$(document).ready(function(){

                // owl_carousel

            // Start Humber Main Menu Icon Js
          $('.all_p_humber').click(function(){
                 $(this).toggleClass('open');
             });
          //==== End Humber Main Menu Icon Js


        $('.all_p_humber').click(function(){
            $('.menu ul').slideToggle();
          });
          $('.menu ul li a').click(function(){
                 $('.all_p_humber').removeClass('open');
             });
             $('.menu ul li a').click(function(){
              $('.menu ul').slideUp();
             });

});



$(document).ready(function(){
  $('.galleria_content_Items').owlCarousel({
    items: 3,
    loop: true,
    nav: true,
    navText:['<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>'],
    dots: false,
    autoplay: true,
    margin:20,
    responsive: {

            0: {
                items: 1,
                margin:0,
            },
            576:{
                items:2,
            },
            768: {
                items: 2,
            },
            992: {
              items: 3,
            }
        }
  });

  $('.menu ul li a,.scrollSectionBtn').click(function(){

    $('html,body').animate({
      scrollTop:$($(this).attr('href')).offset().top
    },1000);

    return false;
  });

  // Back to TOP 
  $('.scrollBtn').click(function(){
    $('html,body').animate({
      scrollTop:0
    },1000);

    return false;
  });

});


$(window).scroll(function(){

  var scrollValue = $(this).scrollTop();

  if(scrollValue>100){
    $('.header_main_area').addClass('FixedHeader');
  }else{
     $('.header_main_area').removeClass('FixedHeader');
  }

});