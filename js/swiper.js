// slider banner

var swiper = new Swiper(".slide-swp", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets:true,
      clickable:true
      },
      autoplay:{
      delay:3500,},
      loop:true,
      });

    //   ============================
    var swiper = new Swiper(".sale-sec", {
       
          slidesPerView:5,
          spaceBetween:30,//在slide之间设置距离（单位px）。
          autoplay:{
          delay:3500,},
          navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev",
          },
          loop:true,
          breakpoints:{
            1600:{
              slidesPerView:5
            },
            1200:{
              slidesPerView:4,
              spaceBetween:30//在slide之间设置距离（单位px）。

            },
            700:{
              slidesPerView:3,
              spaceBetween:15,//在slide之间设置距离（单位px）。

            },
            0:{
              slidesPerView:2,
              spaceBetween:10,//在slide之间设置距离（单位px）。

            },
          }
          });
// =====================================
var swiper = new Swiper(".products-sec", {
       
  slidesPerView:4,
  spaceBetween:30,//在slide之间设置距离（单位px）。
  autoplay:{
  delay:2500,},
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  },
  loop:true,
  breakpoints:{
    1600:{
      slidesPerView:4,

    },
    1200:{
      slidesPerView:3,

    },
    900:{
      slidesPerView:2,
      spaceBetween:15//在slide之间设置距离（单位px）。

    },
    700:{
      slidesPerView:3,
      spaceBetween:15,//在slide之间设置距离（单位px）。

    },
    0:{
      slidesPerView:2,
      spaceBetween:10,//在slide之间设置距离（单位px）。

    },
  }
  });
  // =============
  var swiper = new Swiper(".products-sec2", {
       
    slidesPerView:4,
    spaceBetween:30,//在slide之间设置距离（单位px）。
    autoplay:{
    delay:3500,},
    navigation:{
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev",
    },
    loop:true,
    breakpoints:{
      1600:{
        slidesPerView:4,
  
      },
      1200:{
        slidesPerView:3,
  
      },
      900:{
        slidesPerView:2,
        spaceBetween:15//在slide之间设置距离（单位px）。
  
      },
      700:{
        slidesPerView:3,
        spaceBetween:15,//在slide之间设置距离（单位px）。
  
      },
      0:{
        slidesPerView:2,
        spaceBetween:10,//在slide之间设置距离（单位px）。
  
      },
    
   
    }});