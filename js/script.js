let submitTodoBtn = document.getElementById("submitTodo");

submitTodoBtn.addEventListener("click", function () {
  let todoInput = document.getElementById("enterTodo");
  let todoValue = todoInput.value;

  let todoDatabase = JSON.parse(localStorage.getItem("todoData")) || [];

  let todoData = {
    todo: todoValue,
    isCompleted: false,
  };

  if (todoData.todo) {
    todoDatabase.push(todoData);
  } else {
    alert("please add some todo before sumbiting");
  }

  localStorage.setItem("todoData", JSON.stringify(todoDatabase));

  todoInput.value = "";
});
