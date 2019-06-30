$('a[href*="#"]').click(function(){});

var $page = $('html, body');

$('a[href*="#"]').click(function() {
  $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 800);
  return false;
});

$(function() {
 $(window).scroll(function() {
   if($(this).scrollTop() != 0) {
    $('#toTop').fadeIn();
   } else {
    $('#toTop').fadeOut();
   }
 });
 
 $('#toTop').click(function() {
  $('body, html').animate({scrollTop:0}, 800);
 });
});

 $('.screen-styles-style__demo').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.screen-styles-style-nav'
});
$('.screen-styles-style-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.screen-styles-style__demo',
  centerMode: true,
  focusOnSelect: true
});