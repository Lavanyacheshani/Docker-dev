const API_URL = "http://localhost:3000/tasks";

function fetchTasks() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const taskList = document.getElementById("taskList");
            taskList.innerHTML = "";
            data.forEach(task => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <span class="${task.completed ? 'completed' : ''}">${task.title}</span>
                    <div>
                        <button onclick="deleteTask(${task.id})">Delete</button>
                        <button onclick="toggleComplete(${task.id})">${task.completed ? 'Undo' : 'Complete'}</button>
                    </div>
                `;
                taskList.appendChild(li);
            });
        });
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = { title: taskInput.value, completed: false };
    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
    }).then(() => {
        taskInput.value = "";
        fetchTasks();
    });
}

function deleteTask(id) {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
        .then(() => fetchTasks());
}

function toggleComplete(id) {
    fetch(`${API_URL}/${id}`, { method: "PUT" })
        .then(() => fetchTasks());
}

document.addEventListener("DOMContentLoaded", fetchTasks);
