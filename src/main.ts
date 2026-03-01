import "./style.css";

const ANIMATE_IN = "animate-in";

function initScrollAnimations(): void {
  const animatedElements = document.querySelectorAll<HTMLElement>(
    "[data-animate]:not([data-hero])"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(ANIMATE_IN);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  animatedElements.forEach((el) => observer.observe(el));
}

function initHeroReveal(): void {
  const heroElements = document.querySelectorAll<HTMLElement>("[data-hero]");

  requestAnimationFrame(() => {
    setTimeout(() => {
      heroElements.forEach((el, i) => {
        setTimeout(() => el.classList.add(ANIMATE_IN), i * 120);
      });
    }, 100);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations();
  initHeroReveal();
});
