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

const actionSwiper = new Swiper('.action', {
  loop: true,
  spaceBetween: 300,
  speed: 600,
  slidesPerView: 1,

  breakpoints: {
    1200: {
      slidesPerView: 2,
  spaceBetween: 30,

    },
    700:{
  slidesPerView: 1,
      
    }
  },

  navigation: {
    nextEl: '.action .swiper-button-next',
    prevEl: '.action .swiper-button-prev',
  },

  pagination: {
    el: '.action .swiper-pagination',
    clickable: true,
  },
});