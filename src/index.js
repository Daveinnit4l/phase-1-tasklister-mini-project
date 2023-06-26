document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Function to add a new task to the list
function addTask() {
  const taskText = taskInput.value;

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const listItem = document.createElement('li');
  listItem.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', deleteTask);

  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);

  taskInput.value = '';
}

// Function to delete a task
function deleteTask(event) {
  const listItem = event.target.parentElement;
  taskList.removeChild(listItem);
}

});
