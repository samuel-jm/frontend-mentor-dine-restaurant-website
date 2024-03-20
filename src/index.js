import "./styles.scss";

console.log(
  [...document.querySelector("main").querySelectorAll("*")]
    .map((element) => [...element.classList])
    .flat()
    .sort()
    .filter((element, index, array) => element !== array[index + 1]),
);
