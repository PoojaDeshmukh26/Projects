// All the Code for the Admitted page goes here
let acceptedStudents=JSON.parse(localStorage.getItem("Accepted"))||[]


for(let i=0;i<acceptedStudents.length;i++){
document.querySelector('tbody').innerHTML=""
    let row=document.createElement('tr');
    let Name=document.createElement('td')
    Name.innerText=acceptedStudents[i].Name;
    let Email=document.createElement("td")
    Email.innerText=acceptedStudents[i].Email;
    let Course=document.createElement("td")
    Course.innerText=acceptedStudents[i].Course;
    let Gender=document.createElement('td')
    Gender.innerText=acceptedStudents[i].Gender;
    let Phone=document.createElement("td")
    Phone.innerText=acceptedStudents[i].Phone;


    row.append(Name,Email,Course,Gender,Phone)
document.querySelector('tbody').append(row)
}