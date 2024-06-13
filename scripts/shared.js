// ! Get Main Admin Info For Side Menu
let userInfoSection = document.querySelector(".user-info");
window.addEventListener("load", () => {
  let adminIdFromLocalStorage = localStorage.getItem("loginID");
  fetch(`http://localhost:3000/api/admins/${adminIdFromLocalStorage}`)
    .then((res) => res.json())
    .then((admin) => {
      console.log(admin);
      userInfoSection.insertAdjacentHTML(
        "beforeend",
        `
            <div class="user-info__top" style="background-image: url('${admin.banner}');">
              <img
                src="${admin.profile}"
                alt="user"
                class="user-info__top-image"
              />
            </div>

            <div class="user-info__bottom">
              <div class="user-info__bottom-user">
                <span class="user-info__bottom-user-name">${admin.userName}</span>
              </div>

              <div class="user-info__bottom__all-info">
                <div class="user-info__bottom__all-info__name">
                  <span class="user-info__bottom__all-info__name-text">
                    First Name
                  </span>
                  <span class="user-info__bottom__all-info__name-value">
                   ${admin.firstName}
                  </span>
                </div>

                <div class="user-info__bottom__all-info__last-name">
                  <span class="user-info__bottom__all-info__last-name-text">
                    LastName
                  </span>
                  <span class="user-info__bottom__all-info__last-name-value">
                    ${admin.lastName}
                  </span>
                </div>
                <div class="user-info__bottom__all-info__courses">
                  <span class="user-info__bottom__all-info__courses-text">
                     Email
                  </span>
                  <span class="user-info__bottom__all-info__courses-value ">
                    ${admin.email}
                  </span>
                </div>


              </div>
              <button class="user-info__bottom-btn">
                <svg>
                  <use href="#pen-icon"></use>
                </svg>
                Change Information
              </button>
            </div>
      `
      );
    });
});

// ! Header Clock
function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

// ! Exit Panel
let exitPanelBtn = document.querySelector(".header__right__exit");
exitPanelBtn.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
