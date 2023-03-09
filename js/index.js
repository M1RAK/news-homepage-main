const menuOpen = document.querySelector(".menu-open")
const menuClose = document.querySelector(".menu-close")
const mobileMenu = document.querySelector(".links-container")
const mobileLinks = document.querySelectorAll(".list-link")

const toggleMenu = () => {
  menuOpen.classList.toggle("active")
  menuClose.classList.toggle("active")
  mobileMenu.classList.toggle("active")
}
menuOpen.addEventListener("click", toggleMenu)
menuClose.addEventListener("click", toggleMenu)

mobileLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu)
})
