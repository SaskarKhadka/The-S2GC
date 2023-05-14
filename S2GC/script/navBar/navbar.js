const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const help = document.getElementById("open-help");
const about = document.getElementById("about");
const github = document.getElementById("github");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

window.onscroll = function () {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
};

help.addEventListener("click", function helpListner() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
});

about.addEventListener("click", function aboutListner() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
});

github.addEventListener("click", function githubListner() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
});
