// menu item active
const link = document.querySelectorAll(".nav__item .nav__link");
const linkLength = link.length;

for (let i = 0; i < linkLength; i++) {
  link[i].addEventListener("click", function () {
    changeActiveClass(this);
  });
}

function changeActiveClass(element) {
  for (let i = 0; i < linkLength; i++) {
    link[i].classList.remove("nav__link--active");
  }

  element.classList.add("nav__link--active");
}

// anchor scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
