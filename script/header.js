const header = document.querySelector(".header"),
  btnToggleNav = document.querySelector(".btn-mobile-nav");
btnToggleNav.addEventListener("click", () =>
  header.classList.toggle("nav-open")
);
