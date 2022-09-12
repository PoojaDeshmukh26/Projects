// All the Code for All Students Page Goes Here
let rejectedArr=JSON.parse(localStorage.getItem('admission'))||[];

let acceptedArr=JSON.parse(localStorage.getItem('admission'))||[];


let studentApplied=JSON.parse(localStorage.getItem("admission"))||[];



for(let i=0;i<studentApplied.length;i++){

let row=document.createElement('tr');
let Name=document.createElement('td')
Name.innerText=studentApplied[i].Name;
let Email=document.createElement("td")
Email.innerText=studentApplied[i].Email;
let Course=document.createElement("td")
Course.innerText=studentApplied[i].Course;
let Gender=document.createElement('td')
Gender.innerText=studentApplied[i].Gender;
let Phone=document.createElement("td")
Phone.innerText=studentApplied[i].Phone;
let Accept=document.createElement('td')
Accept.innerText="Accepted";
Accept.addEventListener("click",acceptedData)
function acceptedData(){
acceptedArr.push(studentApplied[i])
localStorage.setItem('Accepted',JSON.stringify(acceptedArr))
}

acceptedData();

Accept.style.backgroundColor="green";



let Reject=document.createElement("td")
Reject.innerText="Rejected";
Reject.addEventListener("click",rejectedData)
function rejectedData(){
rejectedArr.push(studentApplied[i])
localStorage.setItem('Rejected',JSON.stringify(rejectedArr))
}

rejectedData();



Reject.style.backgroundColor="red";

row.append(Name,Email,Course,Gender,Phone,Accept,Reject)
document.querySelector("tbody").append(row);


};






