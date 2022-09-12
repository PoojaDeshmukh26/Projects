// All the JS Code for the Add Students Page Goes Here
document.querySelector('form').addEventListener("submit",studentDetails);

let studentArr=JSON.parse(localStorage.getItem("admission"))||[]
function studentDetails(event){
    event.preventDefault();
let studentObj={
Name:form.name.value,
Email:form.email.value,
Phone:form.phone.value,
Gender:form.gender.value,
Course:form.course.value
}
studentArr.push(studentObj);
console.log(studentArr);
localStorage.setItem("admission",JSON.stringify(studentArr))
}


