export const activeLinks = document.querySelectorAll(".menu_nav__link");

export function currentPage(link) {
  const currentLocation = location.href;
  const check = link.classList;
  const currentLink = link.href === currentLocation;

  if (currentLink) {
    link.classList.add("show_nav__link");
  }

  if (!check.contains("show_nav__link")) {
    link.style.color = "#ffffff";
    link.style.opacity = 0.5;
  }
}
