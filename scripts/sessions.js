// ! Elements
let sessionNameInput = document.querySelector(
  ".sessions-form__row1-name-input"
);
let sessionTimeInput = document.querySelector(
  ".sessions-form__row1-time-input"
);
let sessionPriceInput = document.querySelector(
  ".sessions-form__row2-price-input"
);
let coursesNames = document.querySelector(".sessions-form__row2-course-select");

let addNewSessionBtn = document.querySelector(".sessions-form-btn");

// ! Set Select Default Value
coursesNames.addEventListener("change", function () {
  const selectedOption = coursesNames.options[coursesNames.selectedIndex].text;
  coursesNames.setAttribute("data-default", selectedOption);
});

addNewSessionBtn.addEventListener("click", addNewSession);
function addNewSession(event) {
  event.preventDefault();
  let newSessionData = {
    title: sessionNameInput.value,
    time: sessionTimeInput.value,
    isFree: !Boolean(Number(sessionPriceInput.value)),
    course: coursesNames.value,
  };

  fetch("http://localhost:3000/api/sessions", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newSessionData),
  }).then((res) => {
    console.log(res);
    clearInputs();
  });
}

function clearInputs() {
  sessionNameInput.value = "";
  sessionTimeInput.value = "";
  sessionPriceInput.value = "";
}
