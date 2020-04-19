$(function(){


    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true,
        ratedFill: "#ffa726"
      });
    
    $(".product-slider__inner").slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });
    
    $(".icon-th-list").on("click", function(){
        $(".product-page__content-item").addClass('list');
        $(".icon-th-list").addClass('active');
        $(".icon-th-large").removeClass('active');
    });

    $(".icon-th-large").on("click", function(){
        $(".product-page__content-item").removeClass('list');
        $(".icon-th-large").addClass('active');
        $(".icon-th-list").removeClass('active');
    });


    var mixer = mixitup(".products__inner-box");

    
});