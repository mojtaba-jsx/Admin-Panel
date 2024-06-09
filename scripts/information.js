// ! Checking Admin Login
window.addEventListener('load',()=>{
    let adminId = localStorage.getItem('loginID')
    if(!adminId){
      location.href='./index.html'
    }
  })