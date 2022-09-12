// All the Code for the Admitted page goes here
let tbody = document.querySelector("tbody");
  var data = JSON.parse(localStorage.getItem("data")) || [];
  data.map((elem, ind) => {
    if (!elem.status) return;
    let row = document.createElement("tr");
    let name = document.createElement("td");
    name.innerText = elem.name;
    let email = document.createElement("td");
    email.innerText = elem.email;
    let number = document.createElement("td");
    number.innerText = elem.number;
    let gender = document.createElement("td");
    gender.innerText = elem.gender;
    let course = document.createElement("td");
    course.innerText = elem.course;
    row.append(name, email, number, gender, course);
    tbody.append(row);
  });