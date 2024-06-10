// ! Checking Admin Login
window.addEventListener('load',()=>{
    let adminId = localStorage.getItem('loginID')
    if(!adminId){
      location.href='./index.html'
    }
  })



// ! Get Admin Info And Show In Inputs

let userNameInput = document.querySelector('.inforamtion__form__row1__input1');
let lastNameInput = document.querySelector('.inforamtion__form__row1__input2');
let currentPasswordInput = document.querySelector('.inforamtion__form__row2__input1');
let newPasswordInput = document.querySelector('.inforamtion__form__row2__input2');
let cofirmPasswrodInput = document.querySelector('.inforamtion__form__row2__input3');
let emailInput = document.querySelector('.inforamtion__form__row3-input')
let updateInformationBtn = document.querySelector('.inforamtion__form-btn');

window.addEventListener('load',()=>{
  let adminIdFromLocalStorage = localStorage.getItem("loginID");
  fetch(`http://localhost:3000/api/admins/${adminIdFromLocalStorage}`)
  .then(res=>res.json())
  .then(data=>{
    userNameInput.value = data.firstName;
    lastNameInput.value = data.lastName;
    currentPasswordInput.value = data.password;
    emailInput.value = data.email;
  })
})