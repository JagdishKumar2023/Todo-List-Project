// alert("hi");

let todoData = JSON.parse(localStorage.getItem("todoData"));

let table = document.querySelector("table");

if (!todoData || todoData.length === 0) {
  table.innerHTML = "";
}

displayTodo();

function displayTodo() {
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  todoData.map(function (ele, idx) {
    let tr = document.createElement("tr");
    tr.style = ele.isCompleted
      ? "background-color : green"
      : "background-color: red";

    let sNoTd = document.createElement("td");
    sNoTd.innerText = idx + 1;

    let todoTd = document.createElement("td");
    todoTd.innerText = ele.todo;

    let statusTd = document.createElement("td");
    statusTd.innerText = ele.isCompleted ? "Done" : "Pending";

    let completeTd = document.createElement("td");
    completeTd.innerText = ele.isCompleted ? "Pending" : "Done";
    completeTd.setAttribute("class", "completeTd");

    completeTd.addEventListener("click", function () {
      completeFunction(idx);
    });

    tr.append(sNoTd, todoTd, statusTd, completeTd);
    tbody.append(tr);
  });
}
// some doubt here in this code

function completeFunction(idx) {
  todoData[idx].isCompleted = !todoData[idx].isCompleted;
  displayTodo();
}
