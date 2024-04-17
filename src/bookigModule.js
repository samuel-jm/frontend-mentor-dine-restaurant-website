const bookingModule = (() => {
  // cache DOM
  const form = document.querySelector(".form");
  const nameElement = form.querySelector("[name='name']");
  const nameRequiredLabel = nameElement.nextElementSibling;
  const emailElement = form.querySelector("[name='email']");
  const emailRequiredLabel = emailElement.nextElementSibling;
  const dateLabel = document.querySelectorAll(".form__label")[0];
  const dateIncompleteLabel = dateLabel.nextElementSibling;
  const monthElement = form.querySelector("[name='month']");
  const dayElement = form.querySelector("[name='day']");
  const yearElement = form.querySelector("[name='year']");
  const timeLabel = document.querySelectorAll(".form__label")[1];
  const timeIncompleteLabel = timeLabel.nextElementSibling;
  const hourElement = form.querySelector("[name='hour']");
  const minuteElement = form.querySelector("[name='minute']");
  const personCount = document.querySelector(".person-count");
  const minusButton = form.querySelector(".form__button-subtract");
  const addButton = form.querySelector(".form__button-add");

  // [(minusButton, addButton)].forEach((button) =>
  //   button.addEventListener("click", (event) => {
  //     const number = personCount;
  //     console.log(number);
  //   }),
  // );

  [minusButton, addButton].forEach((button) => {
    button.addEventListener("click", (event) => {
      const number = personCount.textContent.match(/[0-9]+/)[0];

      if (event.target.classList.contains("form__button-add")) {
        if (number < 12) {
          personCount.textContent = `${+number + 1} people`;
        }
      } else if (event.target.classList.contains("form__button-subtract")) {
        if (number > 2) personCount.textContent = `${+number + -1} people`;
      }
    });
  });

  // bind events
  form.addEventListener("submit", (event) => {
    nameElement.toggleAttribute("invalid");
    nameRequiredLabel.toggleAttribute("invalid");
    emailElement.toggleAttribute("invalid");
    emailRequiredLabel.toggleAttribute("invalid");
    dateLabel.toggleAttribute("invalid");
    dateIncompleteLabel.toggleAttribute("invalid");
    monthElement.toggleAttribute("invalid");
    dayElement.toggleAttribute("invalid");
    yearElement.toggleAttribute("invalid");
    timeLabel.toggleAttribute("invalid");
    timeIncompleteLabel.toggleAttribute("invalid");
    hourElement.toggleAttribute("invalid");
    minuteElement.toggleAttribute("invalid");

    event.preventDefault();
  });
})();

export default bookingModule;
