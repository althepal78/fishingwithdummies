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
    navLinks.style.right = "0px";
    toggleBtn.textContent = "X";

    doc.overflowY = "clip";
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

// Fetch video data from the PHP endpoint
async function fetchVideos() {
  console.log("where the fuck do i look because this is not helping me at all");
  try {
    const response = await fetch("./src/php/getvids.php");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    if (!data.success) {
      console.error(data.error || "Unknown error");
      return [];
    }

    return data.data.items || [];
  } catch (error) {
    console.error("Failed to fetch videos:", error);
    return [];
  }
}

// Create a video card element
function createCard(video) {
  console.log("what the fuck is going on here");

  if (!video?.snippet?.thumbnails?.high?.url) {
    console.error("Broken video data:", video);
    return; // skip this broken video
  }

  const container = document.querySelector("[data-card-container]");
  const youtubeBaseUrl = "https://www.youtube.com/watch?v=";

  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h2");
  title.textContent = video.snippet.title;
  title.classList.add("card-title");

  const link = document.createElement("a");
  link.href = youtubeBaseUrl + video.snippet.resourceId.videoId;
  link.target = "_blank";

  const thumbnail = document.createElement("img");
  thumbnail.src = video.snippet.thumbnails.high.url;
  link.appendChild(thumbnail);

  card.append(title, link);
  container.appendChild(card);
}

// Initialize the app
async function init() {
  const videos = await fetchVideos();
  if (videos.length === 0) {
    console.log("No videos found");
    return;
  }
  videos.forEach((video) => createCard(video));
}

document.addEventListener("DOMContentLoaded", init);
