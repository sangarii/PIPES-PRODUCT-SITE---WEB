document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".infra-card-wrapper").forEach((wrapper) => {
    let index = 0;

    const track = wrapper.querySelector(".infra-card");
    const cards = wrapper.querySelectorAll(".infra-image-card");

    const nextBtns = wrapper.querySelectorAll(".infra-next");
    const prevBtns = wrapper.querySelectorAll(".infra-prev");

    const thumbnails = wrapper.parentElement.querySelectorAll(
      ".carousel-reflect-card",
    );

    // 🔥 Get dynamic width (RESPONSIVE)
    function getCardWidth() {
      return cards[0].offsetWidth;
    }

    // 🔥 Move slider
    function updateCarousel() {
      const width = getCardWidth();
      track.style.transform = `translateX(-${index * width}px)`;
    }

    //NEXT BUTTON
    nextBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (index < cards.length - 1) {
          index++;
          updateCarousel();
          updateActiveThumbnail();
        }
      });
    });

    //PREV BUTTON
    prevBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (index > 0) {
          index--;
          updateCarousel();
          updateActiveThumbnail();
        }
      });
    });

    //THUMBNAIL CLICK
    thumbnails.forEach((thumb, i) => {
      thumb.addEventListener("click", () => {
        index = i;
        updateCarousel();
        updateActiveThumbnail();
      });
    });

    //ACTIVE THUMBNAIL UPDATE
    function updateActiveThumbnail() {
      thumbnails.forEach((t) => t.classList.remove("active"));
      if (thumbnails[index]) {
        thumbnails[index].classList.add("active");
      }
    }

    //RESET ON RESIZE (IMPORTANT)
    window.addEventListener("resize", () => {
      updateCarousel();
    });
  });
});
