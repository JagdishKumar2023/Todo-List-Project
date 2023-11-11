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
