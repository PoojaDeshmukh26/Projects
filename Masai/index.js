document.querySelector("form").addEventListener("submit", todosApp);
let taskArr;
if(localStorage.getItem("todoList")==null){
 taskArr=[];
} else {
 taskArr=JSON.parse(localStorage.getItem("todoList"));
}
displayTable(taskArr);

function todosApp(event) {
    event.preventDefault();
    let taskName = document.querySelector("#task").value;
    let priority = document.querySelector("#priority").value;
    let taskObj = {
        task: taskName,
        prior: priority,
    };
    taskArr.push(taskObj);
    localStorage.setItem("todolist",JSON.stringify(taskArr))
    displayTable(taskArr);
}


function displayTable() {
    document.querySelector("tbody").innerHTML = "";
    console.log(taskArr.length);
    taskArr.forEach(function (element,index) {
        let row = document.createElement("tr");
        let column1 = document.createElement("td");
        column1.innerText = element.task;
        let column2 = document.createElement("td");
        column2.innerText = element.prior;
        if (element.prior == "High") {
            column2.style.backgroundColor = "red";
        } else {
            column2.style.backgroundColor = "green";
        }
        let column3 = document.createElement("td");
        column3.innerText = "Delete";
        column3.addEventListener("click", function () {
            deleteRow();

        });
        column3.style.color = "red";
        row.append(column1, column2, column3);
        document.querySelector("tbody").append(row);
    });

}
function deleteRow(element,index) {
    console.log(taskArr);
    taskArr.splice(index,1)
    localStorage.setItem("todoList",JSON.stringify(taskArr));
    displayTable(taskArr)
}