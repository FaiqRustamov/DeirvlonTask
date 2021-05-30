$(document).on('ready', function() {
    $(".regular").slick({
      speed: 1000,
      dots: true,
      prevArrow: '<i class="fa fa-arrow-left slide-arrow prev-arrow"></i>',
      nextArrow: '<i class="fa fa-arrow-right slide-arrow next-arrow"></i>',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      autoplay:false,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
  
    ]
    });
  });