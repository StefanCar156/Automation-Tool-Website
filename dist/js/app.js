// Nav
const navLinks = document.querySelector(".nav__links")
const navBtn = document.querySelector(".nav__btn")

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("nav__links--active")
})
