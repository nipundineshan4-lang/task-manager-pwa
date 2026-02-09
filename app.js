// Register the Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
}

const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Load tasks from phone storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  taskList.innerHTML = tasks.map((t, i) => `<li>${t} <button onclick="deleteTask(${i})">Done</button></li>`).join('');
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
  if (taskInput.value) {
    tasks.push(taskInput.value);
    taskInput.value = '';
    renderTasks();
  }
}

window.deleteTask = (index) => {
  tasks.splice(index, 1);
  renderTasks();
};

renderTasks();
