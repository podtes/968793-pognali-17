var jsChecker = document.querySelector(".no-js");
var toggleHeader = document.querySelector(".wrapper-menu__toggle");
var header = document.querySelector(".page-header");
var mainNav = document.querySelector(".main-nav");
var logoBlue = document.querySelector(".wrapper-menu__logo--blue");
var logoWhite = document.querySelector(".wrapper-menu__logo--white");
var signUpButton = document.querySelector(".intro__sign-up");
var header = document.querySelector(".page-header");
var currentScroll = 0;

jsChecker.classList.remove("no-js");

toggleHeader.addEventListener("click", function(evt) {
  evt.preventDefault();
  header.classList.toggle("page-header--open");
  toggleHeader.classList.toggle("wrapper-menu__toggle--open");
  mainNav.classList.toggle("main-nav--open");
  logoWhite.classList.toggle("wrapper-menu__logo--close");
  logoBlue.classList.toggle("wrapper-menu__logo--close");
});

window.addEventListener("scroll", function () {
  currentScroll = window.pageYOffset < 150 ? 0 : window.pageYOffset;

  if (currentScroll) {
    header.classList.add("page-header--scroll");
    logoWhite.classList.add("wrapper-menu__logo--close");
    logoBlue.classList.remove("wrapper-menu__logo--close");
    toggleHeader.classList.add('wrapper-menu__toggle--scroll');
  }

  else {
    header.classList.remove('page-header--scroll');
    logoWhite.classList.remove("wrapper-menu__logo--close");
    logoBlue.classList.add("wrapper-menu__logo--close");
    toggleHeader.classList.remove('wrapper-menu__toggle--scroll');
  }
});
