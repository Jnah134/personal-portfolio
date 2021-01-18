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

// top link
window.addEventListener("scroll", () => {
  const topLink = document.querySelector(".top-link");
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 500) {
    topLink.classList.add("show-top-link");
  } else {
    topLink.classList.remove("show-top-link");
  }
});

const scrollLinks = document.querySelectorAll(".scroll-section");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop;

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
