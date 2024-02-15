document.addEventListener("DOMContentLoaded", function () {
  const slides = [
    {
      "image": "slide1.jpg",
      "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
      "image": "slide2.jpg",
      "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
      "image": "slide3.jpg",
      "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
      "image": "slide4.png",
      "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
  ];

  const banner = document.getElementById("banner");
  const bannerImg = document.querySelector(".banner-img");
  const tagLine = document.querySelector("#banner p");
  const arrows = document.querySelectorAll(".arrow");
  const dots = document.querySelectorAll(".dot");

  let slideVisible = 0; // variable qui garde la trace du slide visible actuellement affichée

  function totalSlide() { // Met à jour l'image et le texte de la diapositive actuelle
    bannerImg.src = `./assets/images/slideshow/${slides[slideVisible].image}`;
    tagLine.innerHTML = slides[slideVisible].tagLine;
    selectionDots();
  }

  function selectionDots() { // Met à jour la mise en surbrillance du dot correspondant à la diapositive actuelle
    dots.forEach((dot, index) => {
      dot.classList.toggle("dot_selected", index === slideVisible);
    });
  }

  function nextSlide() {    // Passe à la diapositive suivante
    slideVisible = (slideVisible + 1) % slides.length;
    totalSlide();
  }

  function prevSlide() {     // Passe à la diapositive précédente
    slideVisible = (slideVisible - 1 + slides.length) % slides.length;
    totalSlide();
  }

  function goToSlide(index) {  // Passe à une diapositive spécifique
    slideVisible = index;
    totalSlide();
  }

  arrows.forEach(arrow => {   // Gère le clic sur les flèches pour passer à la diapositive suivante ou précédente
    arrow.addEventListener("click", () => {
      if (arrow.classList.contains("arrow_left")) {
        prevSlide();
      } else if (arrow.classList.contains("arrow_right")) {
        nextSlide();
      }
    });
  });

  dots.forEach((dot, index) => {   // Gère le clic sur les dots pour passer à une diapositive spécifique
    dot.addEventListener("click", () => {
      goToSlide(index);
    });
  });

  // Initialisation
  totalSlide();  // Met à jour le slider avec la première diapositive
});
