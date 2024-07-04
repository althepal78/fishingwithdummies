const toggleBtn = document.querySelector("[data-toggle-btn]");
const navLinks = document.querySelector("[data-nav-links]");
const logo = document.querySelector("[data-logo]");
const fishContainer = document.querySelector("[data-fish]");
const toTopButton = document.querySelector("[data-top-button]");
const doc = document.body.style;

document.addEventListener("click", toggleHeader);

navLinks.style.right = "-100%";
function toggleHeader(e) {
  if (e.target === toggleBtn && navLinks.style.right === "-100%") {
    console.log("hello");
    navLinks.style.right = "0px";
    toggleBtn.textContent = "X";

    doc.overflowY = "hidden";
  } else if (e.target === toggleBtn && navLinks.style.right === "0px") {
    navLinks.style.right = "-100%";
    toggleBtn.textContent = "☰";

    doc.overflowY = "auto";
  }

  if (e.target !== toggleBtn && navLinks.style.right === "0px") {
    navLinks.style.right = "-100%";
    toggleBtn.textContent = "☰";

    doc.overflowY = "auto";
  }
}

window.addEventListener("scroll", findTop);

function findTop(e) {
  // console.log(e);
  if (window.scrollY > 2) {
    toTopButton.classList.add("show");
  } else {
    toTopButton.classList.remove("show");
  }
}

toTopButton.addEventListener("click", goToTop);

function goToTop() {
  window.scrollTo(0, 0);
}
