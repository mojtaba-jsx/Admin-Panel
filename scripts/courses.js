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
  }).then((res) => {
    console.log(res)
    location.reload()
  });
}

// ! Get Courses Data
window.addEventListener("load", getCoursesData);
let coursesWrapper = document.querySelector(".courses__wrapper");
function getCoursesData() {
  fetch("http://localhost:3000/api/courses")
    .then((res) => res.json())
    .then((courses) => {
      console.log(courses);
      courses.forEach((course) => {
        coursesWrapper.insertAdjacentHTML(
          "beforeend",
          `
          <div class="courses__item">
              <div class="courses__item-left">
                    <img
                      src="${course.cover}"
                      alt="image"
                      class="courses__item-left-image"
                    />
                </div>
  
                 <div class="courses__item-right">
                    <div class="courses__item-right__top">
                      <h2 class="courses__item-right__top-title">${course.title}</h2>
                      <p class="courses__item-right__top-title-text">${course.body}</p>
                    </div>
  
                    <div class="courses__item-right__bottom">
                      <span class="courses__item-right__bottom-price">
                        <svg><use href="#money-icon"></use></svg>
                        ${course.price}
                      </span>
  
                      <span class="courses__item-right__bottom-time">
                        <svg><use href="#time-icon"></use></svg>
                        ${course.time}
                      </span>
  
                      <span class="courses__item-right__bottom-students">
                        <svg><use href="#users-icon"></use></svg>
                        ${course.students}
                      </span>
  
                      <span class="courses__item-right__bottom-category">
                        <svg><use href="#category-icon"></use></svg>
                        #${course.category}
                      </span>
  
                      <span class="courses__item-right__bottom-release">
                        <svg><use href="#date-icon"></use></svg>
                        ${course.created_AT
                        }
                      </span>
                    </div>
                  </div>
                </div>
        `
        );
      });
    });
}
