// All the Code for the Admitted page goes here
let acceptStudentList = JSON.parse(localStorage.getItem("admission-accepted")) || [];

acceptStudentList.forEach(function (elem, index) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    td1.innerText=elem.name;
    td2.innerText=elem.email;
    td3.innerText=elem.course;
    td4.innerText=elem.gender;
    td5.innerText=elem.phone;

    tr.append(td1,td2,td3,td4,td5);
    document.querySelector("tbody").append(tr);
});
