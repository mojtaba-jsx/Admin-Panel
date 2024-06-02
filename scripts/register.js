// ! Elements
let formUsernameInput = document.querySelector(".form__username-input");
let formPasswordInput = document.querySelector(".form__password-input");
let formEmailInput = document.querySelector(".form__email-input");

let formFirstnameInput = document.querySelector('.form__firstname-input')
let formLastnameInput = document.querySelector('.form__lastname-input')
let formBtn = document.querySelector(".form-btn");

formBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    formUsernameInput.value.length < 4 ||
    !validateEmail(formEmailInput.value)
  ) {
    iziToast.show({
      title: "Error",
      message:
        "Please fill in the fields correctly (enter username and password more than 4 characters and email in the correct form)",
      position: "topCenter",
      titleSize: "20px",
      messageSize: "16px",
      titleColor: "#ffff",
      backgroundColor: "#ff204e",
      messageColor: "#ffff",
    });
  } else {
    iziToast.show({
      title: "Succesfull",
      message: "Register Completed",
      position: "topRight",
      titleSize: "20px",
      messageSize: "16px",
      titleColor: "#ffff",
      backgroundColor: "#20df7f",
      messageColor: "#ffff",
    });
    // ! Info Of User
    let newUserData = {
      firstName:formFirstnameInput.value,
      lastName:formLastnameInput.value,
      userName: formUsernameInput.value,
      profile: "https://imgurl.ir/uploads/e561633_banana.png",
    };
    fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUserData),
    }).then((res) => console.log(res));
    clearInputs()
  }
});

// ! Email Regex Validation
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function clearInputs() {
  formUsernameInput.value = "";
  formPasswordInput.value = "";
  formEmailInput.value = "";
}
