
  $(document).ready(function(){
    $("#carousel-1").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
    autoplayTimeout:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            },
            1204:{
                items:5
            }
        }
    })
  })

  $(document).ready(function(){
    $(".carousel-1").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
    autoplayTimeout:1000,
        responsive:{
            0:{
                items:1
            },
            700:{
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
  $(document).ready(function(){
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        mobileFirst: true,
        slidesToScroll: 4
    });
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