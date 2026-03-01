// import './module/language';
import '../style/fonts.scss';
import '../style/tailwind.css'


document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const serchMobile = document.querySelector('.mobile-serch')
    const menu = document.querySelector('.burger-menu');
    const menuSerch = document.querySelector('.serch-menu');

    const close = document.querySelector('.burger-close');
    const closeSerch = document.querySelector('.serch-close');

    

    function openMenu() {
      menu.classList.remove('hidden');

      requestAnimationFrame(() => {
        menu.classList.remove('-translate-y-full', 'opacity-0', 'invisible');
        menu.classList.add('translate-y-0', 'opacity-100', 'visible');
      });
    }

    function closeMenu() {
      menu.classList.add('-translate-y-full', 'opacity-0', 'invisible');
      menu.classList.remove('translate-y-0', 'opacity-100', 'visible');

      setTimeout(() => {
        menu.classList.add('hidden');
      }, 500);
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


