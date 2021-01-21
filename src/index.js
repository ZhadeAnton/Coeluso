import './module';
import './scss/main.scss';

const hamburger = document.querySelector('.header__topline--hamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const hasFades = document.querySelectorAll('.has-fade');

hamburger.addEventListener('click', function () {
  if (header.classList.contains('open')) {
    body.classList.remove('noscroll');
    header.classList.remove('open');
    hasFades.forEach((element) => {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  } else {
    header.classList.add('open');
    body.classList.add('noscroll');
    hasFades.forEach((element) => {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }
});
