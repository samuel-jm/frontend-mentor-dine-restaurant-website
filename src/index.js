import "./styles.scss";
import "./classListModule";
import "./slides";

const mainElement = document.querySelector(".main");
const bookingElement = document.querySelector(".booking-page");

bookingElement.style.display = "none";

[...document.querySelectorAll("[data-action='book-table']")].forEach(
  (button) => {
    button.addEventListener("click", (event) => {
      bookingElement.style.display = "flow";
      mainElement.style.display = "none";
    });
  },
);
