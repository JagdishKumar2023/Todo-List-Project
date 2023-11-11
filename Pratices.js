let submitTodoBtn = document.getElementById("submitTodo");

submitTodoBtn.addEventListener("click", function () {
  let todoInput = document.getElementById("enterTodo");
  let todoValue = todoValue;

  let todoDataBase = JSON.parse(localStorage.getItem("todoData")) || [];

  let todoData = {
    todo: todoValue,
    isCompleted: false,
  };
  if (todoData.todo) {
    todoDataBase.push(todoData);
  } else {
    alert("please add some todo before sumbiting");
  }

  localStorage.setItem("todoData", JSON.stringify(todoDataBase));

  todoInput.value = "";
});

let todoData = JSON.parse(localStorage.getItem("todoData"));

let table = document.querySelector("table");

if (!todoData || todoData.length === 0) {
  table.innerHTML = "";
}

displayTodo();

function displayTodo() {
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  todoData.map(function (ele, idx, arr) {
    let tr = document.createElement("tr");

    let sNoTd = document.createElement("td");
    sNoTd.innerText = idx + 1;

    let todoTd = document.createElement("td");
    todoTd.innerText = ele.todo;

    let statusTd = document.createElement("td");
    statusTd.innerText = ele.isCompleted ? "completed" : "not completed";

    let completeTd = document.createElement("td");
    completeTd.innerText = "complete";
    completeTd.setAttribute("class", "completeTd");

    completeTd.addEventListener("click", function () {
      completeFunction(idx, completeTd);
    });

    tr.append(sNoTd, todoTd, statusTd, completeTd);
    tbody.append(tr);
  });
}
