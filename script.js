/** observeren kan observere flere elementer på én gang. denne function vil køre hver gang synligheden af et af elementerne ændre sig */
const observer = new IntersectionObserver((entries) => {
  /** forEach bliver brugt da der er flere elementer */
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

/*** querySelector vælger alle elementer med class "hidden"  */
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
