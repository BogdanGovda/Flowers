import Swiper from 'swiper';

import 'swiper/css';

const swiper = new Swiper('.swiper', {
  loop: true,

  spaceBetween: 30,
    speed: 600,
    slidesPerView: 'auto',

    navigation: {
      nextEl: '.swiper__homenft-next',
      prevEl: '.swiper__homenft-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
   
    },
});
