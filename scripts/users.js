let usersList = document.querySelector(".users__list");
let mainUserID = null;
// ! Get Users Info From Api
window.addEventListener("load", getUsersInfo);

function getUsersInfo() {
  fetch("http://localhost:3000/api/users")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((user) => {
        usersList.insertAdjacentHTML(
          "beforeend",
          `
            <div class="users__list__item">
            <div class="users__list__item-left">
              <div class="users__list__item-left--left">
                <img
                  src="${user.profile}"
                  alt="image"
                  class="users__list__item-left--left-img"
                />
              </div>
              <div class="users__list__item-left--right">
                <span class="users__list__item-left--right-username"
                  >${user.userName}</span
                >
                <span class="users__list__item-left--right-user-info"
                  >${user.firstName} ${user.lastName}</span
                >
              </div>
            </div>
            
            <div class="users__list__item-right">
              <button class="users__list__item-right-edit" onclick="showEditModal('${user._id}')">Edit</button>
              <button onclick="showDeleteModal('${user._id}')" class="users__list__item-right-remove">
                Remove
              </button>
            </div>
            </div> 
            `
        );
      });
    });
}

// ! Delete User From List
let usersModal = document.querySelector(".users-modal");
function showDeleteModal(userID) {
  mainUserID = userID;
  usersModal.classList.add("users-modal-visible");
}

function closeDeleteModal() {
  usersModal.classList.remove("users-modal-visible");
}
function deleteUser() {
  fetch(`http://localhost:3000/api/users/${mainUserID}`, {
    method: "DELETE",
  }).then((res) => {
    console.log(res);
    closeDeleteModal();
    location.reload();
  });
}

// ! Edit Modal Logic
let usersEditModal = document.querySelector(".users-edit-modal");
let userEditModalUpdateBtn = document.querySelector(
  ".users-edit-modal__form-btns-update"
);
let userEditModalCencelBtn = document.querySelector(
  ".users-edit-modal__form-btns-cancel"
);
let userNameInput = document.querySelector(
  ".users-edit-modal__form-username-input"
);
let firstNameinput = document.querySelector(
  ".users-edit-modal__form-firstname-input"
);
let lastNameInput = document.querySelector(
  ".users-edit-modal__form-lastname-input"
);




// ! Show Edit Modal
function showEditModal(userID) {
  usersEditModal.classList.add("show-edit-modal");

  mainUserID = userID;
  console.log(mainUserID);
}

// ! Hide Edit Modal
userEditModalCencelBtn.addEventListener("click", closeEditmodal);
function closeEditmodal() {
  usersEditModal.classList.remove("show-edit-modal");
}

userEditModalUpdateBtn.addEventListener("click", updateUser);
function updateUser() {
  let userInfo = {
    firstName: firstNameinput.value,
    lastName: lastNameInput.value,
    userName: userNameInput.value,
    profile: "https://imgurl.ir/uploads/e561633_banana.png",
  };
  console.log(userInfo);
  console.log("updated");
  fetch(`http://localhost:3000/api/users/${mainUserID}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userInfo),
  }).then((res) => {
    console.log(res);
    closeEditmodal();
    location.reload();
  });
}



// ! Checking Admin Login
window.addEventListener('load',()=>{
  let adminId = localStorage.getItem('loginID')
  if(!adminId){
    location.href='./index.html'
  }
})