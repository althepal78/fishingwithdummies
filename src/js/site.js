const toggle = document.querySelector("[data-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const logo = document.querySelector("[data-logo]");
const fishContainer = document.querySelector("[data-fish]");
const toTopButton = document.querySelector('[data-top-button]')
console.log(fishContainer.scrollTop);

document.addEventListener("click", toggleHeader);
function toggleHeader(e) {
  if (e.target === toggle && navLinks.style.right === "-100%") {
    navLinks.style.right = "0px";
    toggle.textContent = "X";
    logo.style.filter = "grayscale(1) invert(1)";
    document.body.style.overflow = "hidden"
  } else if (e.target === toggle && navLinks.style.right === "0px") {
    navLinks.style.right = "-100%";
    toggle.textContent = "☰";
    logo.style.filter = "";
    document.body.style.overflow = "auto"
  }

  if (e.target !== toggle && navLinks.style.right === "0px") {
    navLinks.style.right = "-100%";
    toggle.textContent = "☰";
    logo.style.filter = "";
    
    document.body.style.overflow = "auto"
  }
}




window.addEventListener("scroll", findTop);

function findTop(e) {
  if (window.scrollY >= 80) {
    toTopButton.classList.add('show')
    
  }
  else{
    toTopButton.classList.remove('show')
  }
}

toTopButton.addEventListener("click", goToTop);

function goToTop() {
  window.scrollTo(0, 0);
}
