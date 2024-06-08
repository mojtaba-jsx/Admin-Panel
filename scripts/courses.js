let addCourseBtn = document.querySelector(".courses-btn");
let courseTitle = document.querySelector(".course__add-modal-title");
let courseTime = document.querySelector(".course__add-modal-time");
let courseStudents = document.querySelector(".course__add-modal-students");
let courseCategory = document.querySelector(".course__add-modal-category");
let courseBody = document.querySelector(".course__add-modal-body");
let coursePrice = document.querySelector(".course__add-modal-price");

addCourseBtn.addEventListener("click", addNewCourse);

function addNewCourse() {
  let newCourseInfos = {
    title: courseTitle.value,
    body: courseBody.value,
    time: courseTime.value,
    price: coursePrice.value,
    students: courseStudents.value,
    category: courseCategory.value,
    cover: "https://imgurl.ir/uploads/e488207_jsposter.jpg",
  };
  fetch("http://localhost:3000/api/courses", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newCourseInfos),
  }).then((res) => console.log(res));
}
