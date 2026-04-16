//carousel event
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".result-card-wrapper").forEach((wrapper) => {
    let index = 0;

    const track = wrapper.querySelector(".result-card");
    const cards = wrapper.querySelectorAll(".card-design");
    const next = wrapper.querySelector(".nav-next");
    const prev = wrapper.querySelector(".nav-prev");

    if (!track || !cards.length || !next || !prev) {
      console.log("Missing elements");
      return;
    }

    function getCardWidth() {
      const card = cards[0];
      const style = window.getComputedStyle(track);
      const gap = parseInt(style.gap) || 20;
      return card.getBoundingClientRect().width + gap;
    }

    function getVisibleCards() {
      const container = wrapper.querySelector(".carousel");
      return Math.max(1, Math.floor(container.offsetWidth / getCardWidth()));
    }

    function updateCarousel() {
      const width = getCardWidth();
      track.style.transform = `translateX(-${index * width}px)`;
    }

    next.addEventListener("click", () => {
      const visible = getVisibleCards();
      if (index < cards.length - visible) {
        index++;
        updateCarousel();
      }
    });

    prev.addEventListener("click", () => {
      if (index > 0) {
        index--;
        updateCarousel();
      }
    });

    window.addEventListener("resize", () => {
      index = 0;
      updateCarousel();
    });
  });
});
