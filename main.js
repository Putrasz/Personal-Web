function toggleMenu() {
  const navbarLinks = document.querySelector(".navbar-links");
  const hamburger = document.querySelector(".hamburger");
  navbarLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
}

const thumbnails = document.querySelectorAll(".thumbnail");
const fullscreen = document.getElementById("fullscreen");
const fullscreenImg = document.getElementById("fullscreen-img");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const fullImageUrl = thumbnail.getAttribute("data-full");
    fullscreenImg.src = fullImageUrl;
    fullscreen.style.display = "flex";
  });
});

fullscreen.addEventListener("click", () => {
  fullscreen.style.display = "none";
});
