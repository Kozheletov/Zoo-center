'use strict';

const burgerMenu = document.querySelector('.burger-menu');
const mainNavList = document.querySelector('.main-nav-list');

burgerMenu.addEventListener('click', (event) => {
  event.preventDefault();
  if (mainNavList.classList.contains('show')) {
    mainNavList.classList.remove('show');
  } else {
    mainNavList.classList.add('show');
  }
});
