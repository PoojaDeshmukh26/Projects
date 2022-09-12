// All the JS Code for the Add Students Page Goes Here

var data = JSON.parse(localStorage.getItem("data")) || [];
document.querySelector("form").addEventListener("submit", add);
function add() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let gender = document.getElementById("gender").value;
  let course = document.getElementById("course").value;
  let obj = {
    name: name,
    email: email,
    phone: phone,
    gender: gender,
    course: course,
  };
  data.push(obj);
  localStorage.setItem("data", JSON.stringify(data));
}