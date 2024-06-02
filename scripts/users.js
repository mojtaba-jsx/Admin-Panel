let usersList = document.querySelector('.users__list');

window.addEventListener('load',()=>{
    fetch('http://localhost:3000/api/users')
    .then(res=>res.json())
    .then(data=>{
        data.forEach((user)=>{
            console.log(user);
            usersList.insertAdjacentHTML('beforeend',`
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
              <button class="users__list__item-right-remove">
                Remove
              </button>
            </div>
            </div> 
            `)
        })
    })
})




