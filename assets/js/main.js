const toggleNavBtn = document.getElementById("toggleNavBtn");
const toggleNavBtnIcon = document.querySelector("#toggleNavBtn i");
const navMenu = document.querySelector(".header .nav");
const navLinks = document.querySelectorAll(".header .nav .nav-link");

function openNav() {
  navMenu.classList.add("show");
  document.body.classList.add("full-screen");
  toggleNavBtnIcon.classList.remove("fa-bars");
  toggleNavBtnIcon.classList.add("fa-xmark");
}

function closeNav() {
  navMenu.classList.remove("show");
  document.body.classList.remove("full-screen");
  toggleNavBtnIcon.classList.remove("fa-xmark");
  toggleNavBtnIcon.classList.add("fa-bars");
}

toggleNavBtn.addEventListener("click", () => {
  navMenu.classList.contains("show") ? closeNav() : openNav();
});

navLinks.forEach((link) => link.addEventListener("click", ()=> {
    closeNav();
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
}));
