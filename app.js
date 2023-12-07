document.addEventListener('DOMContentLoaded', function() {
  const inputTodo = document.getElementById('inputTodo');
  const addBtn = document.getElementById('addBtn');
  const todoList = document.getElementById('todoList');
  const totalTasks = document.getElementById('totalTasks');

  let taskId = 0;

  function addTodo() {
    const todoText = inputTodo.value.trim();
    if (todoText !== '') {
      const li = document.createElement('li');
      li.innerHTML = `
        <input type="checkbox" id="task-${taskId}">
        <label for="task-${taskId}">${todoText}</label>
        <button class="delete">Delete</button>
      `;
      taskId++;
      todoList.appendChild(li);
      inputTodo.value = '';
      updateTotalTasks();
    }
  }

  function deleteTodo(event) {
    if (event.target.classList.contains('delete')) {
      event.target.parentElement.remove();
      updateTotalTasks();
    }
  }

  function toggleCompleted(event) {
    if (event.target.tagName === 'INPUT') {
      const label = event.target.nextElementSibling;
      label.classList.toggle('completed');
    }
  }

  function updateTotalTasks() {
    totalTasks.textContent = todoList.getElementsByTagName('li').length;
  }

  addBtn.addEventListener('click', addTodo);
  todoList.addEventListener('click', deleteTodo);
  todoList.addEventListener('change', toggleCompleted);
});
