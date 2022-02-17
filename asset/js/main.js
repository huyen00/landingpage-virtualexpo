//quay lại đầu trang
$(document).ready(function() {
    $(window).scroll(function(event) {
       var pos_body = $('html,body').scrollTop();
       // console.log(pos_body);
       if(pos_body>100){
          $('.back-to-top').addClass('hien-ra');
       }
       else{
          $('.back-to-top').removeClass('hien-ra');
       }
    });
    document.getElementById('quaylai').addEventListener("click", function(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  });
    
 });

 //xu lý Isotope 
$(document).ready(function(){
   $('.menu-img-conent').isotope({
     itemSelector: '.hinh'
   });
   $('.menu-img-item').click(function(event){
     $('.menu-img-item.active').removeClass('active');
     $(this).addClass('active');
     var _type= $(this).data('type');
     var ten_loai = $(this).text();
     $('.title').text(ten_loai);
     _type='.'+_type;
     $('.menu-img-conent').isotope({
       filter:_type
     });
   });
 });


//   xử lý owl
 $(document).ready(function(){
   $('.owl-carousel').owlCarousel({
       loop:true,
       margin:10,
       nav:true,
      
       responsive:{
           0:{
               items:1
           },
           600:{
               items:2
           },
           1000:{
               items:3
           },
           1204:{
               items:4
           }
       }
   })
 })


// xử lý scroll menu top
//  $(function () {
//   $(document).scroll(function () {
//     var $nav = $(".menu-onscrool");
//     $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//   });
// });

$(document).ready(function() {



  /*=========================================================================

   ===  MENU SCROLL FIXED

   ========================================================================== */

  var s = $(".inner-header-position");

  var pos = s.position();



  $(window).on('scroll', function () {

      var windowpos = $(window).scrollTop();

      if (windowpos > pos.top) {

          s.addClass("menu-onscroll");
          // $(".inner-header-position-fixed").addClass("fadeInDown")
          $(".logo-page").removeClass("img-logo")

      } else {

          s.removeClass("menu-onscroll");
          // $(".inner-header-position-fixed").removeClass("fadeInDown")
          $(".logo-page").addClass("img-logo")

      }

  });
})


//xử lý khi active 
// $(document).ready(function(){
//   $('.item-tab').click(function(event){
//     $('.tab-pane.active').removeClass('active');
//     $(this).addClass('active');
//   });
// });
