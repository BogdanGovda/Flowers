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
  loop: false,
  speed: 600,
  slidesPerView: 1,
  spaceBetween: 20,
  allowTouchMove: false,

  breakpoints: {
    700: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});