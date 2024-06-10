// ! Checking Admin Login
window.addEventListener("load", () => {
  let adminId = localStorage.getItem("loginID");
  if (!adminId) {
    location.href = "./index.html";
  }
});

// ! Get Admin Info And Show In Inputs

let firstNameInput = document.querySelector(".inforamtion__form__row1__input1");
let lastNameInput = document.querySelector(".inforamtion__form__row1__input2");
let currentPasswordInput = document.querySelector(
  ".inforamtion__form__row2__input1"
);
let newPasswordInput = document.querySelector(
  ".inforamtion__form__row2__input2"
);
let cofirmPasswrodInput = document.querySelector(
  ".inforamtion__form__row2__input3"
);
let emailInput = document.querySelector(".inforamtion__form__row3-input");
let updateInformationBtn = document.querySelector(".inforamtion__form-btn");
let adminIdFromLocalStorage = localStorage.getItem("loginID");

// ! Get Admin Info For Show In Inputs
window.addEventListener("load", () => {
  fetch(`http://localhost:3000/api/admins/${adminIdFromLocalStorage}`)
    .then((res) => res.json())
    .then((data) => {
      firstNameInput.value = data.firstName;
      lastNameInput.value = data.lastName;
      currentPasswordInput.value = data.password;
      emailInput.value = data.email;
    });
});

// ! Edit Admin Info

updateInformationBtn.addEventListener("click", editAdminInfo);

function editAdminInfo(event) {
  event.preventDefault()
  if (newPasswordInput.value === cofirmPasswrodInput.value &&newPasswordInput.value.length > 4 &&cofirmPasswrodInput.value.length > 4 ) {
    let adminNewInfo = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      // userName: req.body.userName,
      password: cofirmPasswrodInput.value,
      email: emailInput.value,
    };

    fetch(`http://localhost:3000/api/admins/${adminIdFromLocalStorage}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body:JSON.stringify(adminNewInfo)
    })
    .then(res=>console.log(res))
    location.reload()
  } else {
    alert("The Passwords Do Not Match");
  }
}
