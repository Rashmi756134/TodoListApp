let todos = [];

// eslint-disable-next-line no-unused-vars
function addTodo() {
  const input = document.getElementById("todo-input");
  if (input.value.trim() !== "") {
    todos.push(input.value.trim());
    input.value = "";
    renderTodos();
  }
}

function removeTodo (index){
    todos.splice(index, 1);
    renderTodos();
}

function renderTodos() {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";
  todos.forEach((todo , index) => {
    const listItem = document.createElement("li");
    listItem.textContent = todo;

    // cReate remove button for each todo
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Delete";
    removeBtn.style.marginLeft = "10px";
    removeBtn.style.border = "2px solid red";
    removeBtn.style.backgroundColor = "red"
    removeBtn.style.color = "white";
    removeBtn.style.fontSize = "15px";
    removeBtn.onclick = function () {
      removeTodo(index);
    };
    listItem.appendChild(removeBtn);

    list.appendChild(listItem);
  });
}
