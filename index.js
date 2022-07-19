// All the JS Code for the Add Students Page Goes Here
document.querySelector("form").addEventListener("submit",addStudent);
let addStudentArr=JSON.parse(localStorage.getItem("admission")) || [];

function addStudent(event){
    event.preventDefault();
    let addStudentObj={
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        phone:document.querySelector("#phone").value,
        gender:document.querySelector("#gender").value,
        course:document.querySelector("#course").value,
    }
    addStudentArr.push(addStudentObj);
    localStorage.setItem("admission",JSON.stringify(addStudentArr));
}
