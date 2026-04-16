//steps event
const steps = document.querySelectorAll(".step");

steps.forEach((step) => {
  step.addEventListener("click", () => {

    // remove active from all
    steps.forEach(s => s.classList.remove("active"));

    // add active to clicked
    step.classList.add("active");

  });
});

//carousel event
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".manufact-card-wrapper").forEach((wrapper) => {
    let index = 0;

    const track = wrapper.querySelector(".manufact-card");
    const cards = wrapper.querySelectorAll(".manufact-card-img");

    const nextBtns = wrapper.querySelectorAll(".infra-next");
    const prevBtns = wrapper.querySelectorAll(".infra-prev");

    function getCardWidth() {
      return cards[0].offsetWidth; // 🔥 responsive
    }

    function updateCarousel() {
      const width = getCardWidth();
      track.style.transform = `translateX(-${index * width}px)`;
    }

    nextBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (index < cards.length - 1) {
          index++;
          updateCarousel();
        }
      });
    });

    prevBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (index > 0) {
          index--;
          updateCarousel();
        }
      });
    });

    window.addEventListener("resize", () => {
      index = 0;
      updateCarousel();
    });
  });
});
