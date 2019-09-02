var jsChecker = document.querySelector(".no-js");
var toggleHeader = document.querySelector(".wrapper-menu__toggle");
var header = document.querySelector(".page-header");
var mainNav = document.querySelector(".main-nav");
var logoBlue = document.querySelector(".wrapper-menu__logo--blue");
var logoWhite = document.querySelector(".wrapper-menu__logo--white");
var chooseButton = document.querySelector(".input-country__field--default");
var inlineCloseButton = document.querySelector(".input-country__open-list-button--default");
var closeButton = document.querySelector(".input-country__close-button--choose-country");
var alphabet = document.querySelector(".modal__alphabet");

jsChecker.classList.remove("no-js");

toggleHeader.addEventListener("click", function(evt) {
  evt.preventDefault();
  header.classList.toggle("page-header--open");
  toggleHeader.classList.toggle("wrapper-menu__toggle--open");
  mainNav.classList.toggle("main-nav--open");
  logoWhite.classList.toggle("wrapper-menu__logo--close");
  logoBlue.classList.toggle("wrapper-menu__logo--close");
});

chooseButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  chooseButton.classList.toggle("input-country__field--open");
  inlineCloseButton.classList.toggle("input-country__open-list-button--open");
  closeButton.classList.toggle("input-country__close-button--open");
  alphabet.classList.toggle("modal--show");
});
