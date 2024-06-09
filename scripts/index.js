const $ = document
const usernameInput = $.querySelector('.form__username-input')
const passwordInput = $.querySelector('.form__password-input')
const adminLoginBtn = $.querySelector('.form-btn')

adminLoginBtn.addEventListener('click', event => {
    event.preventDefault()

    let adminID = null

    let adminUserName = usernameInput.value
    let adminPassword = passwordInput.value

    console.log(adminUserName, adminPassword);

    fetch('http://localhost:3000/api/admins')
        .then(res => res.json())
        .then(admins => {
            console.log(admins);

            let isAdmin = admins.some(admin => {
                if (admin.userName === adminUserName && admin.password === adminPassword) {
                    adminID = admin._id
                    return admin.userName === adminUserName && admin.password === adminPassword
                }
            })

            if (isAdmin) {
                clearInputs()
                localStorage.setItem('loginID', adminID)
                location.href = './users.html'
            } else {
                alert('Your information as a site administrator is not correct')
                clearInputs()
            }

        })
})

function clearInputs() {
    usernameInput.value = ''
    passwordInput.value = ''
}


