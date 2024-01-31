// For a slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        850: {
            slidesPerView: 2
        },
        1000: {
            slidesPerView: 3
        },
    }
  });