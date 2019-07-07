var $page = $('html, body');

$('a[href*="#"]').click(function() {
  $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 800);
  return false;
});

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

$('#nextContents').click(function(){
  $('.block-photos-item').fadeIn();
  $('#nextContents').hide();
});

$('.block-photos-item-review__img').click(function(e) {
  var src = e.target.currentSrc + "-full.webp";
  $('.block-preview__img').attr("src", src);
  $('.block-preview').fadeIn();
});

$('.block-preview').click(function(e) {
  if(this === e.target) {
    $('.block-preview').fadeOut();
  }
});