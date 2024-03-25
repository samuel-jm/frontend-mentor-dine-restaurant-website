import Handlebars from "handlebars";
import patternTopRight from "./assets/patterns/pattern-curve-top-right.svg";
import patternLines from "./assets/patterns/pattern-lines.svg";
import imageFamilyGathering from "./assets/homepage/family-gathering-desktop@2x.jpg";
import imageSpecialEvents from "./assets/homepage/special-events-desktop@2x.jpg";
import imageSocialEvents from "./assets/homepage/social-events-desktop@2x.jpg";
import slides from "./slides.json";

const slidesModule = (() => {
  // Cache DOM
  const mainElement = document.querySelector(".main");
  const ctaElement = document.querySelector(".cta");
  const slidesTemplate = document.querySelector(".slides-template").innerHTML;
  let slidesListElement = null;
  let linePatternElement = null;
  let activeSlideItemId = "list-item-family-gathering";
  let activeSlideItemElement = null;
  let slidesElement = null;

  function createSlide(templateInputObject) {
    slidesElement = elementFromString(
      Handlebars.compile(slidesTemplate)(templateInputObject),
    );

    slidesListElement = slidesElement.querySelector(".slides__list");

    linePatternElement = slidesElement.querySelector(".slides__line-pattern");

    activeSlideItemElement = slidesElement.querySelector(
      `#${activeSlideItemId}`,
    );

    activeSlideItemElement.dataset.active = "true";
  }

  // Bind Events
  function bindEvents() {
    slidesListElement.addEventListener("click", (event) => {
      if (event.target.id === "") {
        return;
      }

      activeSlideItemId = event.target.id;

      slidesElement.remove();

      let image;
      let slide;

      switch (activeSlideItemId) {
        case "list-item-family-gathering":
          image = imageFamilyGathering;
          slide = slides.familyGathering;
          break;
        case "list-item-special-events":
          image = imageSpecialEvents;
          slide = slides.specialEvents;
          break;
        case "list-item-social-events":
          image = imageSocialEvents;
          slide = slides.socialEvents;
          break;
        default:
      }
      createSlide({
        patternTopRight,
        patternLines,
        image,
        ...slide,
      });

      render();
    });
  }

  function render() {
    // The line style will position the line to the left
    // and vertical center of the active list item.
    activeSlideItemElement.appendChild(linePatternElement);
    mainElement.insertBefore(slidesElement, ctaElement);

    bindEvents();
  }

  function elementFromString(html) {
    const element = document.createElement("div");
    element.innerHTML = html.trim();

    return element.firstChild;
  }

  createSlide({
    patternTopRight,
    patternLines,
    image: imageFamilyGathering,
    ...slides.familyGathering,
  });
  render();
})();

export default slidesModule;
