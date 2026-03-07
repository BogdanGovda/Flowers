
import '../style/fonts.scss';
import '../style/tailwind.css'


document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.header-mobile__burger');
    const serchMobile = document.querySelector('.mobile-serch')
    const menu = document.querySelector('.mobile-menu');
    const menuSerch = document.querySelector('.serch-menu');

    const close = document.querySelector('.mobile-menu__close');
    const closeSerch = document.querySelector('.serch-close');

    

    function openMenu() {
  requestAnimationFrame(() => {

    menu.classList.add('mobile-menu--active');
    document.body.style.overflow = 'hidden';
  });
}

function closeMenu() {
  menu.classList.remove('mobile-menu--active');
  document.body.style.overflow = '';
}


    function openSerch(){
      menuSerch.classList.remove('hidden');

      requestAnimationFrame(() => {
        menuSerch.classList.remove('-translate-y-full', 'opacity-0', 'invisible');
        menuSerch.classList.add('translate-y-0', 'opacity-100', 'visible');
      });
    }
    function closeSerchMenu() {
      menuSerch.classList.add('-translate-y-full', 'opacity-0', 'invisible');
      menuSerch.classList.remove('translate-y-0', 'opacity-100', 'visible');

      setTimeout(() => {
        menuSerch.classList.add('hidden');
      }, 500);
    }
    
    burger.addEventListener('click', openMenu);
    close.addEventListener('click', closeMenu);
    serchMobile.addEventListener('click', openSerch)
    closeSerch.addEventListener('click', closeSerchMenu);

});





window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader')
    preloader.style.opacity = '0'
    preloader.style.transition = 'opacity .4s ease'

    setTimeout(() => preloader.remove(), 400)
  })


