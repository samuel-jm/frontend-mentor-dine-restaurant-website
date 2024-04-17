const slidesModule = (() => {
  // Cache DOM
  const slides = document.querySelectorAll(".slides__slide");
  const familyGathering = document.querySelector("#family-gathering-slide");
  const specialEvents = document.querySelector("#special-events-slide");
  const socialEvents = document.querySelector("#social-events-slide");
  let activeSlide = document.querySelector("[active]");

  console.log(familyGathering, socialEvents, specialEvents);

  // Bind Events
  slides.forEach((slide) => {
    [...slide.querySelectorAll(".slides__item")].forEach((button) => {
      button.addEventListener("click", (event) => {
        activeSlide.toggleAttribute("active");
        switch (event.target.id) {
          case "list-item-family-gathering":
            activeSlide = familyGathering;
            activeSlide.toggleAttribute("active");
            break;
          case "list-item-special-events":
            activeSlide = specialEvents;
            activeSlide.toggleAttribute("active");
            break;
          case "list-item-social-events":
            activeSlide = socialEvents;
            activeSlide.toggleAttribute("active");
            break;
          default:
        }
      });
    });
  });
})();

export default slidesModule;
