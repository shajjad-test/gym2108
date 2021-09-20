$(document).ready(function(){
    //banner slider
    $('.banner-slider').slick({
        arrows: false,
        dots: true,
    });


    //about video popup
    $('.venobox').venobox(); 

    //team slider

    $('.team-slider').slick({
        slidesToShow: 4,
        arrows: false,
    });
});