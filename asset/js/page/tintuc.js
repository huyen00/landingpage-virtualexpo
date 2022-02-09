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

  //quay lại đầu trang
 $(document).ready(function() {
    $(window).scroll(function(event) {
       var pos_body = $('html,body').scrollTop();
       // console.log(pos_body);
       if(pos_body>400){
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