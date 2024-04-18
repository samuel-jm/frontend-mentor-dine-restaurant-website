import "./designSystem.css";
import "./styles.scss";
import "./classListModule";
import "./bookigModule";
import "./slides";
import "./mediaModule";

const mainElement = document.querySelector(".main-page");
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
