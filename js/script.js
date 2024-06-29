$(document).ready(function(){

    $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('change');
    });
//sticky less padding
$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 718){
        $('.navbar').addClass('navbar-background');
        $('.navbar').addClass('fixed-top');
    }
    else{
        $('.navbar').removeClass('navbar-background');
        $('.navbar').removeClass('fixed-top');
    }
});

//smooth scroll
$('.nav-item a').click(function(link){
    link.preventDefault();
    let target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top - 25
    },3000);
    });



    $("#header, .info").ripples({
        dropRadius: 25,
        perturbance:0.001,
      });


//magnific popup
$('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options
    gallery:{
        enabled:true
    }
  });



});
  //