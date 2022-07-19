// All the Code for All Students Page Goes Here
let addStudentArr = JSON.parse(localStorage.getItem("admission")) || [];
let acceptStudent = JSON.parse(localStorage.getItem("admission-accepted")) || [];
let rejectStudent = JSON.parse(localStorage.getItem("admission-rejected")) || [];
display(addStudentArr);

document.querySelector("#filter").addEventListener("change", handleFilter);
function handleFilter() {
    let selected = document.querySelector("#filter").value;
    let filteredList = addStudentArr.filter(function (elem) {
        return elem.course == selected;
    });
    display(filteredList);
    // console.log(selected);
}

function display(addStudentArr) {
    document.querySelector("tbody").innerHTML = "";
    addStudentArr.forEach(function (elem, index) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        td1.innerText = elem.name;
        td2.innerText = elem.email;
        td3.innerText = elem.course;
        td4.innerText = elem.gender;
        td5.innerText = elem.phone;
        td6.innerText = "Accept";
        td6.addEventListener("click", function () {
            addAcceptStudent(elem, index);
            deleteAcceptStudent(elem, index);
        });
        td6.style.background = "green";
        td7.innerText = "Reject";
        td7.style.background = "red";
        td7.addEventListener("click", function () {
            addRejectStudent(elem, index);
            deleteRejectStudent(elem, index);
        });

        tr.append(td1, td2, td3, td4, td5, td6, td7);
        document.querySelector("tbody").append(tr);

    });
}

function addAcceptStudent(elem, index) {
    acceptStudent.push(elem);
    localStorage.setItem("admission-accepted", JSON.stringify(acceptStudent));
}
function deleteAcceptStudent(elem, index) {
    addStudentArr.splice(index, 1);
    localStorage.setItem("admission", JSON.stringify(addStudentArr));
}

function addRejectStudent(elem, index) {
    rejectStudent.push(elem);
    localStorage.setItem("admission-rejected", JSON.stringify(rejectStudent));
}
function deleteRejectStudent(elem, index) {
    addStudentArr.splice(index, 1);
    localStorage.setItem("admission", JSON.stringify(addStudentArr));
}




