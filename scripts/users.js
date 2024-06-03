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
              <button class="users__list__item-right-edit">Edit</button>
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
