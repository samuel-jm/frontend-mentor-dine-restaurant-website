import heroImageDesktop from "./assets/homepage/hero-bg-desktop@2x.jpg";
import heroImageTablet from "./assets/homepage/hero-bg-tablet@2x.jpg";
import heroImageMobile from "./assets/homepage/hero-bg-mobile@2x.jpg";

const mediaModules = (() => {
  // cache DOM
  const heroImageElement = document.querySelector(".hero__image");

  const tablet = matchMedia("(max-width: 1100px)");
  const mobile = matchMedia("(max-width: 0px)");

  // bindEvents
  tablet.addEventListener("change", onMediaChange);
  mobile.addEventListener("change", onMediaChange);

  function onMediaChange() {
    if (mobile.matches) {
      heroImageElement.src = heroImageMobile;
    } else if (tablet.matches) {
      heroImageElement.src = heroImageTablet;
    } else {
      heroImageElement.src = heroImageDesktop;
    }
  }

  onMediaChange();
})();
