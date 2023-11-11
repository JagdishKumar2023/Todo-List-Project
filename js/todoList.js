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
// SOME  DOUT HER IN THE CODE

function completeFunction(idx, completeTd) {
  console.log(idx);

  let updatedData = todoData.map(function (ele, id) {
    if (idx === id) {
      return {
        ...ele,
        isCompleted: !ele.isCompleted,
      };
    }
    return ele;
  });
  localStorage.setItem("todoData", JSON.stringify(updatedData));

  displayTodo();
}
