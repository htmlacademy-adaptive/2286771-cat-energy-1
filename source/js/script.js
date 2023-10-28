let headerIndex = document.querySelector('.header__index');
let headerInner = document.querySelector('.header__inner');
let headerToggle = document.querySelector('.header__toggle');

headerIndex.classList.remove('header__index--nojs');

headerToggle.addEventListener('click', function () {
  if (headerIndex.classList.contains('header__index--closed')) {
    headerIndex.classList.remove('header__index--closed');
    headerIndex.classList.add('header__index--opened');
  } else {
    headerIndex.classList.add('header__index--closed');
    headerIndex.classList.remove('header__index--opened');
  }
});

headerInner.classList.remove('header__inner--nojs');

headerToggle.addEventListener('click', function () {
  if (headerInner.classList.contains('header__inner--closed')) {
    headerInner.classList.remove('header__inner--closed');
    headerInner.classList.add('header__inner--opened');
  } else {
    headerInner.classList.add('header__inner--closed');
    headerInner.classList.remove('header__inner--opened');
  }
});
