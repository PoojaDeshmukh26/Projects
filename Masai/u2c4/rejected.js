// All the Code for the Rejected page goes here



let rejectedStudents=JSON.parse(localStorage.getItem("Rejected"))||[]


for(let i=0;i<rejectedStudents.length;i++){
document.querySelector("tbody").innerHTML=""
    let row=document.createElement('tr');
    let Name=document.createElement('td')
    Name.innerText=rejectedStudents[i].Name;
    let Email=document.createElement("td")
    Email.innerText=rejectedStudents[i].Email;
    let Course=document.createElement("td")
    Course.innerText=rejectedStudents[i].Course;
    let Gender=document.createElement('td')
    Gender.innerText=rejectedStudents[i].Gender;
    let Phone=document.createElement("td")
    Phone.innerText=rejectedStudents[i].Phone;


    row.append(Name,Email,Course,Gender,Phone)
document.querySelector('tbody').append(row)

}