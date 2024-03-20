import "./styles.scss";
import html from "./index.html";

console.log(
  [...document.querySelector("main").querySelectorAll("*")]
    .map((element) => [...element.classList])
    .flat()
    .sort()
    .filter((element, index, array) => element !== array[index + 1]),
);
