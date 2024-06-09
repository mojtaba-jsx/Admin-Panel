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
    location.reload();
  });
}

function clearInputs() {
  sessionNameInput.value = "";
  sessionTimeInput.value = "";
  sessionPriceInput.value = "";
}

// ! Get Courses Data
let sessionsList = document.querySelector(".session__list-wrapper");
window.addEventListener("load", getSessionsData);

function getSessionsData() {
  fetch("http://localhost:3000/api/sessions")
    .then((res) => res.json())
    .then((courses) => {
      console.log(courses);
      courses.forEach((course) => {
        sessionsList.insertAdjacentHTML(
          "beforeend",
          `
      <div class="session-item">

      <div class="session-item__name">
        <span class="session-item__name-text">
          <svg><use href="#text-icon"></use></svg>
          Session Name:
        </span>
        <span class="session-item__name-value"
          >${course.title}</span
        >
      </div>

      <div class="session-item__time">
        <span class="session-item__time-text">
          <svg><use href="#time-icon"></use></svg>
          Time:
        </span>
        <span class="session-item__time-value">${course.time}</span>
      </div>

      <div class="session-item__price">
        <span class="session-item__price-text">
          <svg><use href="#price-icon"></use></svg>
          Price:
        </span>
        <span class="session-item__price-value">${
          course.isFree ? "پرداخت آنلاین" : "رایگان"
        }</span>
      </div>

      <div class="session-item__course">
        <span class="session-item__course-text">
          <svg><use href="#course-icon-input"></use></svg>
          Course:
        </span>
        <span class="session-item__course-value">
         ${course.course}
        </span>
      </div>

      <div class="session-item__date">
        <span class="session-item__date-text">
          <svg><use href="#course-date"></use></svg>
          Release Time :
        </span>
        <span class="session-item__date-value"> ${course.created_AT}</span>
      </div>
      <button onclick="removeSessionModal('${
        course._id
      }')" class="session-item__remove-btn">
              Remove Session
      </button>

    </div>
      `
        );
      });
    });
}

// ! Logic For Remove Session
let sessionRemoveModal = document.querySelector(".session-remove-modal");
function removeSessionModal(sessionID) {
  mainUserID = sessionID;
  sessionRemoveModal.classList.add("session-remove-modal-visible");
}

function removeSession() {
  fetch(`http://localhost:3000/api/sessions/${mainUserID}`, {
    method: "DELETE",
  }).then((res) => {
    console.log(res);
    closeRemoveSesssionModal();
    location.reload();
  });
}

function closeRemoveSesssionModal() {
  sessionRemoveModal.classList.remove("session-remove-modal-visible");
}



// ! Checking Admin Login
window.addEventListener('load',()=>{
  let adminId = localStorage.getItem('loginID')
  if(!adminId){
    location.href='./index.html'
  }
})