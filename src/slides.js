import Handlebars from "handlebars";
import patternTopRight from "./assets/patterns/pattern-curve-top-right.svg";
import patternLines from "./assets/patterns/pattern-lines.svg";
import image from "./assets/homepage/family-gathering-desktop@2x.jpg";

const slidesModule = (() => {
  // Cache DOM
  const mainElement = document.querySelector(".main");
  const slidesTemplate = document.querySelector(".slides-template").innerHTML;

  // Bind Events
  mainElement.addEventListener("click", delegateEvent);

  function render() {
    if (mainElement.querySelector(".slides")) {
    }

    // Get elements
    const slidesElement = elementFromString(
      Handlebars.compile(slidesTemplate)({
        patternTopRight,
        patternLines,
        image,
      }),
    );
    const buttonElement = slidesElement.querySelector(".button");
    const linePatternElement = slidesElement.querySelector(
      ".slides__line-pattern",
    );
    const listItemElement = slidesElement.querySelector(".slides__list");

    listItemElement.addEventListener("click", (event) => {
      console.log(event.target);
    });

    console.log(
      slidesElement.querySelector(".slides__item[data-active='true']")
        .textContent,
    );

    slidesElement
      .querySelector(".slides__item[data-active='true']")
      .appendChild(linePatternElement);
    mainElement.insertBefore(slidesElement, mainElement.children[4]);
  }

  function elementFromString(html) {
    const element = document.createElement("div");
    element.innerHTML = html.trim();

    return element.firstChild;
  }

  function delegateEvent(event) {
    const target = event.target;
    if (target.matches(".slides .slides__item[data-active='false']")) {
      mainElement.querySelector(
        ".slides__item[data-active='true']",
      ).dataset.active = "false";
      target.dataset.active = "true";
    } else if (target.matches(".slides .button")) {
    }

    render();
  }

  render();
})();

export default slidesModule;
