const navMenu = document.getElementById("nav-menu"),
   navToggle = document.getElementById("nav-toggle"),
   navClose = document.getElementById("nav-close");

if (navToggle) {
   navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
   });
}

if (navClose) {
   navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
   });
}

// Remove Menu in Mobile Version
const navLink = document.querySelectorAll(".header__menu-link");

const linkAction = () => {
   const navMenu = document.getElementById("nav-menu");
   navMenu.classList.remove("show-menu");
};

navLink.forEach(n => n.addEventListener("click", linkAction));

// Change Background for Header

const scrollHeader = () => {
   const header = document.getElementById("header");
   this.scrollY >= 50 ? header.classList.add("bg-header") : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

// Show Scroll Up

const scrollUp = () => {
   const scrollUp = document.getElementById("scroll-up");
   this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);