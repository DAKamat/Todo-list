const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('task-input');
const todoList = document.getElementById('task-list-wrapper');

// Load tasks from Local Storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Render tasks
function renderTasks() {
    todoList.innerHTML = '';

    tasks.map((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
      <div class="actions">
        <button onclick="completeTask(${index})">Complete</button>
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>`;
        todoList.prepend(listItem);
    });
}

// Save tasks to Local Storage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add new task
function addTask(text) {
    const task = {
        text: text,
        completed: false
    };

    tasks.push(task);
    saveTasks();
    renderTasks();
}

// Complete task
function completeTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

// Edit task
function editTask(index) {
    const newText = prompt('Enter the new task name');
    if (newText !== null) {
        tasks[index].text = newText;
        saveTasks();
        renderTasks();
    }
}

// Delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

// Handle form submission
function addTaskBtn() {
    const text = todoInput.value.trim();
    if (text !== '') {
        addTask(text);
        todoInput.value = '';
    }
}

// Render initial tasks
renderTasks();
