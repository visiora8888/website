// Scroll Reveal Animation
window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const elementTop = reveals[i].getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});


// HERO SLIDER
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next-slide");
const prevBtn = document.querySelector(".prev-slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    slide.style.display = "none";
  });
  slides[index].classList.add("active");
  slides[index].style.display = "block";
}

if (slides.length > 0) {
  showSlide(currentSlide);

  nextBtn?.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  prevBtn?.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });
}
// MODAL POPUP
document.addEventListener("DOMContentLoaded", function () {
  const openModal = document.querySelector(".open-modal");
  const modal = document.getElementById("popupModal");
  const closeModal = document.querySelector(".close-button");

  if (openModal && modal && closeModal) {
    openModal.addEventListener("click", () => {
      modal.classList.add("show");
    });

    closeModal.addEventListener("click", () => {
      modal.classList.remove("show");
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    });
  }
});




