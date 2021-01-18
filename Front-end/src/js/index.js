import { activeLinks, currentPage } from "./utils/app.js";

const date = new Date();
document.getElementById("date").innerHTML = date.getFullYear();

// menu
let hamburger = document.querySelector(".menu-btn__burger");
let nav = document.querySelector(".sidebar");
let navItems = document.querySelectorAll(".sidebar__links_test");

let showMenu = false;
let menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuBtn.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuBtn.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}

// active link
activeLinks.forEach((link) => {
  currentPage(link);
});
