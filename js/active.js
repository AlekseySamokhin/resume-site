// menu item active
const link = document.querySelectorAll(".nav__item .nav__link");
const length = link.length;

for (let i = 0; i < length; i++) {
  link[i].addEventListener("click", function () {
    activeClass(this);
  });
}

function activeClass(element) {
  for (let i = 0; i < length; i++) {
    link[i].classList.remove("nav__link--active");
  }

  element.classList.add("nav__link--active");
}
