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

    if (isNameValid(nameElement.value)) {
      nameElement.removeAttribute("invalid");
      nameRequiredLabel.removeAttribute("invalid");
    } else {
      nameElement.setAttribute("invalid", "");
      nameRequiredLabel.setAttribute("invalid", "");
    }

    if (isEmailValid(emailElement.value)) {
      emailElement.removeAttribute("invalid");
      emailRequiredLabel.removeAttribute("invalid");
    } else {
      emailElement.setAttribute("invalid", "");
      emailRequiredLabel.setAttribute("invalid", "");
    }

    if (isDateValid(monthElement.value, dayElement.value, yearElement.value)) {
      dateLabel.removeAttribute("invalid");
      dateIncompleteLabel.removeAttribute("invalid");
      dayElement.removeAttribute("invalid");
      monthElement.removeAttribute("invalid");
      yearElement.removeAttribute("invalid");
    } else {
      dateLabel.setAttribute("invalid", "");
      dateIncompleteLabel.setAttribute("invalid", "");
      dayElement.setAttribute("invalid", "");
      monthElement.setAttribute("invalid", "");
      yearElement.setAttribute("invalid", "");
    }

    if (isTimeValid(hourElement.value, minuteElement.value)) {
      timeLabel.toggleAttribute("invalid");
      timeIncompleteLabel.toggleAttribute("invalid");
      hourElement.removeAttribute("invalid");
      minuteElement.removeAttribute("invalid");
    } else {
      timeLabel.toggleAttribute("invalid", "");
      timeIncompleteLabel.toggleAttribute("invalid", "");
      hourElement.setAttribute("invalid", "");
      minuteElement.setAttribute("invalid", "");
    }

    event.preventDefault();
  });

  function isNameValid(name) {
    return name !== "";
  }

  function isEmailValid(email) {
    return /^\S+@\S+\.\S+$/.test(email);
  }

  function isDateValid(month, day, year) {
    const dayReg = /^[0-9]{2}$/;
    const monthReg = /^[0-9]{2}$/;
    const yearReg = /^[0-9]{4}$/;
    if (!dayReg.test(day) || !monthReg.test(month) || !yearReg.test(year))
      return false;
    if (
      +day < 1 ||
      +day > 31 ||
      +month < 1 ||
      +month > 12 ||
      year < 2024 ||
      year > 2050
    ) {
      return false;
    }

    return true;
  }

  function isTimeValid(hour, minute) {
    const reg = /^[0-9]{2}$/;
    if (reg.test(hour) && reg.test(minute)) {
      return +hour >= 0 && +hour < 12 && +minute >= 0 && +minute < 60;
    }

    return false;
  }
})();

export default bookingModule;
