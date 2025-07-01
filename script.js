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
    if (window.innerWidth < 768) {
  // Disable animations or reduce trigger points
  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.remove('reveal');
    el.style.opacity = 1;
    el.style.transform = 'translateY(0)';
  });
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

document.getElementById('chatbot-toggle').addEventListener('click', function () {
  const chatbox = document.getElementById('chatbox');
  chatbox.classList.toggle('hidden');

  if (!chatbox.classList.contains('hidden')) {
    // Clear and greet
    document.getElementById('chat-log').innerHTML = "";
    appendMessage("Maison Élan Bot", "Hello! 👋 How can I assist you today? You can also click a question below!");
  }
});

document.getElementById('send-btn').addEventListener('click', function () {
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  if (message === '') return;

  appendMessage("You", message);
  respondToUser(message.toLowerCase());
  input.value = '';
});

function appendMessage(sender, message) {
  const log = document.getElementById('chat-log');
  log.innerHTML += `<p><strong>${sender}:</strong> ${message}</p>`;
  log.scrollTop = log.scrollHeight;
}

function respondToUser(input) {
  const typing = document.getElementById('typing-indicator');
  typing.classList.remove('hidden');

  setTimeout(() => {
    typing.classList.add('hidden');

    let response = "Sorry, I didn't understand that.";

    if (input.includes("return") || input.includes("exchange")) {
      response = "We offer easy 7-day returns or exchanges. Please keep the tags and original packaging intact.";
    } else if (input.includes("shipping") || input.includes("delivery")) {
      response = "We provide free shipping across India. Orders arrive within 3–5 working days.";
    } else if (input.includes("contact") || input.includes("support")) {
      response = "You can contact us through the Contact page or DM us on Instagram @maisonelan. We’re happy to help!";
    } else if (input.includes("brand") || input.includes("maison")) {
      response = "Maison Élan is a modern fashion label embracing nude elegance and effortless luxury.";
    } else if (input.includes("sale") || input.includes("discount") || input.includes("offer")) {
      response = "We currently offer 10% off for first-time users. Look out for seasonal sales!";
    } else if (input.includes("track") || input.includes("order")) {
      response = "Once your order is placed, tracking details will be sent via email and WhatsApp.";
    } else if (input.includes("products") || input.includes("clothes") || input.includes("collection")) {
      response = "We offer curated pieces like handbags, co-ords, and blazers under our Shop section.";
    } else if (input.includes("how are you")) {
      response = "I'm doing great, thank you! How can I assist you with our fashion store today?";
    } else if (input.includes("who made you") || input.includes("developer")) {
      response = "This chatbot was created using HTML, CSS, and JavaScript as part of a prototype project by a fashion-tech student.";
    }

    appendMessage("Maison Élan Bot", response);
  }, 1000); // Delay to simulate typing
}

// Handle FAQ button clicks
document.querySelectorAll('.faq-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const question = btn.textContent.toLowerCase();
    appendMessage("You", btn.textContent);
    respondToUser(question);
  });
});




