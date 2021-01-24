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

// Slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider__item');
const dotsContainer = document.querySelector('.slider__dots'); // !!!
const btnLeft = document.querySelector('.slider__arrow--left');
const btnRight = document.querySelector('.slider__arrow--right');

let curSlide = 0;
const maxSlide = slides.length;

const createDots = function () {
  slides.forEach(function (_, i) {
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activeDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach((dot) => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${200 * (i - slide)}%)`)
  );
};

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activeDot(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activeDot(curSlide);
};

// Init
createDots();
activeDot(0);
goToSlide(0);

//Handles
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
