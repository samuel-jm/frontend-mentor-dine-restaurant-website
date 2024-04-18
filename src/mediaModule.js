import heroImageDesktop from "./assets/homepage/hero-bg-desktop@2x.jpg";
import heroImageTablet from "./assets/homepage/hero-bg-tablet@2x.jpg";
import heroImageMobile from "./assets/homepage/hero-bg-mobile@2x.jpg";
import enjoyablePlaceImageDesktop from "./assets/homepage/enjoyable-place-desktop@2x.jpg";
import enjoyablePlaceImageTablet from "./assets/homepage/enjoyable-place-tablet@2x.jpg";
import enjoyablePlaceImageMobile from "./assets/homepage/enjoyable-place-mobile@2x.jpg";
import locallySourcedImageDesktop from "./assets/homepage/locally-sourced-desktop@2x.jpg";
import locallySourcedImageTablet from "./assets/homepage/locally-sourced-tablet@2x.jpg";
import locallySourcedImageMobile from "./assets/homepage/locally-sourced-mobile@2x.jpg";
import salmonImageDesktopTablet from "./assets/homepage/salmon-desktop-tablet@2x.jpg";
import salmonImageMobile from "./assets/homepage/salmon-mobile@2x.jpg";
import beefImageDesktopTablet from "./assets/homepage/beef-desktop-tablet@2x.jpg";
import beefImageMobile from "./assets/homepage/beef-mobile@2x.jpg";
import chocolateImageDesktopTablet from "./assets/homepage/chocolate-desktop-tablet@2x.jpg";
import chocolateImageMobile from "./assets/homepage/chocolate-mobile@2x.jpg";

const mediaModules = (() => {
  // cache DOM
  const heroImageElement = document.querySelector(".hero__image");
  const enjoyablePlaceImageElement = document.querySelector(
    ".enjoyable-place__image",
  );
  const locallySourcedImageElement = document.querySelector(
    ".locally-sourced__image",
  );
  const salmonImageElement = document.querySelector("[salmon]");
  const beefImageElement = document.querySelector("[beef]");
  const chocolateImageElement = document.querySelector("[chocolate]");

  const tablet = matchMedia("(max-width: 1100px)");
  const mobile = matchMedia("(max-width: 0px)");

  // bindEvents
  tablet.addEventListener("change", onMediaChange);
  mobile.addEventListener("change", onMediaChange);

  function onMediaChange() {
    if (mobile.matches) {
      heroImageElement.src = heroImageMobile;
      enjoyablePlaceImageElement.src = enjoyablePlaceImageMobile;
      locallySourcedImageElement.src = locallySourcedImageMobile;
      salmonImageElement.src = salmonImageMobile;
      beefImageElement.src = beefImageMobile;
      chocolateImageElement.src = chocolateImageMobile;
    } else if (tablet.matches) {
      heroImageElement.src = heroImageTablet;
      enjoyablePlaceImageElement.src = enjoyablePlaceImageTablet;
      locallySourcedImageElement.src = locallySourcedImageTablet;
      salmonImageElement.src = salmonImageDesktopTablet;
      beefImageElement.src = beefImageDesktopTablet;
      chocolateImageElement.src = chocolateImageDesktopTablet;
    } else {
      heroImageElement.src = heroImageDesktop;
      enjoyablePlaceImageElement.src = enjoyablePlaceImageDesktop;
      locallySourcedImageElement.src = locallySourcedImageDesktop;
      salmonImageElement.src = salmonImageDesktopTablet;
      beefImageElement.src = beefImageDesktopTablet;
      chocolateImageElement.src = chocolateImageDesktopTablet;
    }
  }

  onMediaChange();
})();
