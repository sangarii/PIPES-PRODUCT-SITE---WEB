function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}
document.addEventListener("DOMContentLoaded", () => {
  let lastScroll = 0;
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    // ✅ ALWAYS SHOW AT TOP
    if (currentScroll <= 0) {
      navbar.classList.remove("hide");
      return;
    }

    // 🔥 SCROLL DOWN → SHOW
    if (currentScroll > lastScroll) {
      navbar.classList.remove("hide");
    }
    // 🔥 SCROLL UP → HIDE
    else {
      navbar.classList.add("hide");
    }

    lastScroll = currentScroll;
  });
});
