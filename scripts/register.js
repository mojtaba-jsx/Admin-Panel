// ! Elements
let formUsernameInput = document.querySelector(".form__username-input");
let formPasswordInput = document.querySelector(".form__password-input");
let formEmailInput = document.querySelector(".form__email-input");
let formBtn = document.querySelector(".form-btn");

let usernameValid,
  passwordValid,
  emailValid = null;
formBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    formUsernameInput.value.length < 8 ||
    formPasswordInput.value.length < 8
  ) {
    iziToast.show({
      title: "Error",
      message: "Please Enter Valid Username And Password",
      position: "topRight",
      titleSize: "20px",
      messageSize: "16px",
      titleColor: "#ffff",
      backgroundColor: "#ff204e",
      messageColor: "#ffff",
    });
    usernameValid = false;
    passwordValid = false;
  } else if (!validateEmail(formEmailInput.value)) {
    iziToast.show({
      title: "Error",
      message: "Please Enter Valid Email :(",
      position: "topRight",
      titleSize: "20px",
      messageSize: "16px",
      titleColor: "#ffff",
      backgroundColor: "#ff204e",
      messageColor: "#ffff",
    });
    emailValid = false;
  } else {
    console.log("fetch");
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
  }

  if (usernameValid && passwordValid && emailValid) {
    console.log();
  } else {
  }
});

// ! Email Regex Validation
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
