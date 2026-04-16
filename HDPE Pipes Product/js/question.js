const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".question-card"); 
    card.classList.toggle("active");
  });
});
