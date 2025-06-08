// adding the functionality to the hamburger menu for mobile
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar")
const menuBackground = document.querySelector(".menuBackground")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("change");
    navbar.classList.toggle("change")
    menuBackground.classList.toggle("change")


})
