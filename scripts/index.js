// ! Elements
const $ = document;
const usernameInput = $.querySelector(".form__username-input");
const passwordInput = $.querySelector(".form__password-input");
const adminLoginBtn = $.querySelector(".form-btn");

// ! Set Event On FormLogin Button
adminLoginBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let adminID = null;

  let adminUserName = usernameInput.value;
  let adminPassword = passwordInput.value;

  console.log(adminUserName, adminPassword);

  fetch("http://localhost:3000/api/admins")
    .then((res) => res.json())
    .then((admins) => {
      // console.log(admins);

      let isAdmin = admins.some((admin) => {
        if (
          admin.userName === adminUserName &&
          admin.password === adminPassword
        ) {
          adminID = admin._id;
          return (
            admin.userName === adminUserName && admin.password === adminPassword
          );
        }
      });

      if (isAdmin) {
        clearInputs();
        localStorage.setItem("loginID", adminID);
        location.href = "./users.html";
      } else {
        iziToast.show({
          title: "Error",
          message: "Your Information As a Site Administrator Is Not Correct",
          position: "topRight",
          titleColor: "#ffffff",
          messageColor: "#ffffff",
          messageSize: "18",
          titleSize: "18",
          progressBarColor: "#ff204e",
          backgroundColor: "#ff204e",
          iconColor: "#ff204e",
        });
        clearInputs();
      }
    });
});


// ! Clear Input Fields
function clearInputs() {
  usernameInput.value = "";
  passwordInput.value = "";
}
