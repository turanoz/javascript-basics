// Course Constructor
function Course(title, instructor, image) {
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}

// UI Constructor
function UI() {

}

UI.prototype.addCourseToList = function (course) {

    const list = document.getElementById("course-list");

    let html = `
    <tr>
        <td><img src="img/${course.image}" alt=""></td>
        <td>${course.title}</td>
        <td>${course.instructor}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
`;
    list.innerHTML += html;
}
UI.prototype.clearControls = function () {
    const title = document.getElementById("title").value = "";
    const instructor = document.getElementById("instructor").value = "";
    const image = document.getElementById("image").value = "";
}
UI.prototype.deleteCourse = function (element) {

    if (element.classList.contains("delete")) {
        element.parentElement.parentElement.remove();
    }

}

UI.prototype.showAlert = function (message, className) {
    let alert = `
    
    <div class="alert alert-${className}">
        ${message}
    </div>
    `;

    const row=document.querySelector(".row");

    //beforeBegin,afterBegin,beforeEnd,afterEnd

    row.insertAdjacentHTML("beforebegin",alert)

    setTimeout(function (){
        document.querySelector(".alert").remove();
    },1500)
}


document.getElementById("new-course").addEventListener('submit', function (e) {

    const title = document.getElementById("title").value;
    const instructor = document.getElementById("instructor").value;
    const image = document.getElementById("image").value;

    //create course object

    const course = new Course(title, instructor, image);

    //create UI
    const ui = new UI();

    if (title === "" || instructor === "" || image === "") {
        ui.showAlert("Please complete the form", "warning");
    } else {
        //add course to list
        ui.addCourseToList(course);
        //clear controls
        ui.clearControls();

        ui.showAlert("the course has been added", "success");

    }

    e.preventDefault();
})

document.getElementById("course-list").addEventListener("click", function (e) {
    const ui = new UI();
    ui.deleteCourse(e.target);
    ui.showAlert("the course has been deleted", "danger");
})