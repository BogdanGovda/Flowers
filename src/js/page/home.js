import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs'
document.addEventListener('DOMContentLoaded', function(){
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
       
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        spaceBetween: 15,
  
    });
})
console.log('Done');
