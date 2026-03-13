
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e) {
e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior: "smooth"
});

});
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
nav.classList.toggle("active");
});
