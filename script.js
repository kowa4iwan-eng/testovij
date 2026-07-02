const cards = document.querySelectorAll(".card, .projects div, .browser");

cards.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.transform =
      `perspective(700px) rotateX(${-(y - rect.height / 2) / 18}deg) rotateY(${(x - rect.width / 2) / 18}deg) translateY(-8px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(700px) rotateX(0) rotateY(0) translateY(0)";
  });
});

const revealElements = document.querySelectorAll(".section, .cta, .hero-text, .hero-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});
