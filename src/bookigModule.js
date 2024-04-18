const bookingModule = (() => {
  // cache DOM
  const mainElement = document.querySelector(".main-page");
  const bookingElement = document.querySelector(".booking-page");

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

  const timeDropdownIconElement = form.querySelector(".form__dropdown-icon");
  const timeDropdownListElement = form.querySelector(".form__dropdown-list");
  const timeDropdownTextElement = form.querySelector(".form__dropdown-text");
  let timeDropdownSelectedItem =
    timeDropdownListElement.querySelector("li[data-selected]");

  timeDropdownIconElement.addEventListener("click", (event) => {
    timeDropdownIconElement.toggleAttribute("data-open");
    timeDropdownListElement.toggleAttribute("data-inactive");
  });

  timeDropdownListElement.addEventListener("click", (event) => {
    if (event.target.matches("li.form__dropdown-item")) {
      timeDropdownTextElement.textContent = event.target.textContent;
      timeDropdownIconElement.toggleAttribute("data-open");
      timeDropdownListElement.toggleAttribute("data-inactive");
      timeDropdownSelectedItem.toggleAttribute("data-selected");
      timeDropdownSelectedItem = event.target;
      timeDropdownSelectedItem.toggleAttribute("data-selected");
    }
  });

  [(minusButton, addButton)].forEach((button) => {
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
    let isValid = true;

    if (isNameValid(nameElement.value)) {
      nameElement.removeAttribute("invalid");
      nameRequiredLabel.removeAttribute("invalid");
    } else {
      nameElement.setAttribute("invalid", "");
      nameRequiredLabel.setAttribute("invalid", "");
      isValid = false;
    }

    if (isEmailValid(emailElement.value)) {
      emailElement.removeAttribute("invalid");
      emailRequiredLabel.removeAttribute("invalid");
    } else {
      emailElement.setAttribute("invalid", "");
      emailRequiredLabel.setAttribute("invalid", "");
      isValid = false;
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
      isValid = false;
    }

    if (isTimeValid(hourElement.value, minuteElement.value)) {
      timeLabel.removeAttribute("invalid");
      timeIncompleteLabel.removeAttribute("invalid");
      hourElement.removeAttribute("invalid");
      minuteElement.removeAttribute("invalid");
    } else {
      timeLabel.setAttribute("invalid", "");
      timeIncompleteLabel.setAttribute("invalid", "");
      hourElement.setAttribute("invalid", "");
      minuteElement.setAttribute("invalid", "");
      isValid = false;
    }

    if (isValid) {
      form.reset();
      bookingElement.style.display = "none";
      mainElement.style.display = "flow";
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
