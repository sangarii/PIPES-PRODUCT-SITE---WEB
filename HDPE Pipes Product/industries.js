//carousel event
let index = 0;
const track = document.querySelector('.industries-card');
const cards = document.querySelectorAll('.industries-card-design');
const next = document.querySelector('.industries-next');
const prev = document.querySelector('.industries-prev');

function getCardWidth() {
  const card = cards[0];
  const gap = 20;
  return card.offsetWidth + gap;
}

function getVisibleCards() {
  const container = document.querySelector('.industries-carousel');
  return Math.floor(container.offsetWidth / getCardWidth());
}

function updateCarousel() {
  const cardWidth = getCardWidth();
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

next.addEventListener('click', () => {
  const visible = getVisibleCards();
  if (index < cards.length - visible) {
    index++;
    updateCarousel();
  }
});

prev.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

// reset on resize
window.addEventListener('resize', () => {
  index = 0;
  updateCarousel();
});