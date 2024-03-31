$(function() {

    $('.rate-star').rateYo({
        rating: 4.5,
        starWidth: "14px",
        spacing   : "5px",
        readOnly: true
      });

     

      $('.products__slaider-inner').slick({
        slidesToShow: 1,
        sliderToScrol: 1,
        speed:1000,
        prevArrow:   '<button class="slick-arrow slick-prev"><img src="img/icons/chevron-left.png" alt=""></button> ' ,
        nextArrow:  '<button class="slick-arrow slick-next"><img  src="img/icons/chevron-right.png" alt=""></button> ' ,

      });



      $('.followers__slider-inner').slick({
       
        slidesToShow: 3,
        slidesToScroll: 3,
        speed:1000,
        prevArrow:   '<button class="slick-arrow slick-prev followers-arrow  "><img src="img/icons/chevron-left.png" alt=""></button> ' ,
        nextArrow:  '<button class="slick-arrow slick-next  followers-arrow  "><img  src="img/icons/chevron-right.png" alt=""></button> ' ,

      });

      

      var mixer = mixitup('.products__inner-box');

    //   $('.icon-th-list').on('click', function(){
    //     $('.products__item').addClass('list');
    //     $('.icon-th-list').addClass('active');
    //     $('.icon-th-large').removeClass('active');
    //   });

    //   $('.icon-th-large').on('click', function(){
    //     $('.products__item').removeClass('list');
    //     $('.icon-th-large').addClass('active');
    //     $('.icon-th-list').removeClass('active');

    //   });

    



});


 

 