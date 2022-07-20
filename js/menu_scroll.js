jQuery(document).ready(function($) {

$(".scroll").click(function(event){

event.preventDefault();

$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);

});

});


$(function(){
    $(window).scroll(function(){
    var navbar = $(this).scrollTop();
    console.log(navbar);
    var $header = $('header');
    if(navbar > 860){
        $header.addClass('activated');
    }else{
        $header.removeClass('activated');
    }
  })
  })

//메뉴 클릭시 자연스러운 스크롤 이동
