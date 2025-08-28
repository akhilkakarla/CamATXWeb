document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // ensures animation happens only once
      }
    });
  }, { threshold: 0.1 }); // triggers when 10% of element is visible

  elements.forEach(el => observer.observe(el));
});