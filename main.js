function toggleMenu() {
  const navbarLinks = document.querySelector(".navbar-links");
  const hamburger = document.querySelector(".hamburger");
  navbarLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
}
