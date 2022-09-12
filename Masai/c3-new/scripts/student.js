let tbody = document.querySelector("tbody");
var data = JSON.parse(localStorage.getItem("data")) || [];
data.map((elem, ind) => {
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

  let acceptbtn = document.createElement("button");
  acceptbtn.innerText = "Accept";

  acceptbtn.style.backgroundColor="green"
  acceptbtn.style.color="white"
  acceptbtn.style.border="none"
  acceptbtn.style.padding="10px"
  acceptbtn.style.margin="10px"

  acceptbtn.onclick = () => {
    elem.status = true;
    localStorage.setItem("data", JSON.stringify(data));
  };
  let rejectbtn = document.createElement("button");
  rejectbtn.innerText = "Reject";
  
  rejectbtn.style.backgroundColor="red"
  rejectbtn.style.color="white"
  rejectbtn.style.border="none"
  rejectbtn.style.padding="10px"
  rejectbtn.onclick = () => {
    elem.status = false;
    localStorage.setItem("data", JSON.stringify(data));
  };
  row.append(name, email, number, gender, course, acceptbtn, rejectbtn);
  tbody.append(row);
});