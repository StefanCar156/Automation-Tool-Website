// Nav
const navLinks = document.querySelector(".nav__links")
const navBtn = document.querySelector(".nav__btn")
const header = document.querySelector("header")

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("nav__links--active")
  header.classList.toggle("header--fixed")
})

// Responsive Layout
const heroContainer = document.querySelector(".hero")
const heroText = document.querySelector(".hero__text")
const heroImg = document.querySelector(".hero__img")
const blogArticle = document.querySelectorAll(".popular__articles .article")[0]

const handleResponsive = () => {
  if (heroContainer) {
    if (window.innerWidth < 768) {
      heroContainer.insertBefore(heroImg, heroText)
    } else {
      heroContainer.insertBefore(heroText, heroImg)
    }
  }
  if (blogArticle) {
    const blogImg = blogArticle.querySelector(".article__img")
    const blogText = blogArticle.querySelector(".article__text")
    if (window.innerWidth < 1024) {
      blogArticle.insertBefore(blogImg, blogText)
    } else {
      blogArticle.insertBefore(blogText, blogImg)
    }
  }
}

window.onresize = handleResponsive
window.onload = handleResponsive
