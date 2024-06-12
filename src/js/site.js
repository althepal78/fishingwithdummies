const toggle = document.querySelector("[data-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const logo = document.querySelector("[data-logo]");
// console.log(navLinks.style, "where is it");

document.addEventListener("click", toggleHeader);
function toggleHeader(e) {
  if (e.target === toggle && navLinks.style.right === "-100%") {
    navLinks.style.right = "0px";
    toggle.textContent = "X";
    logo.style.filter = "grayscale(1) invert(1)";
  } else if (e.target === toggle && navLinks.style.right === "0px") {
    navLinks.style.right = "-100%";
    toggle.textContent = "☰";
    logo.style.filter = "";
  }

  if (e.target !== toggle && navLinks.style.right === "0px") {
    navLinks.style.right = "-100%";
    toggle.textContent = "☰";
    logo.style.filter = "";
  }
}
