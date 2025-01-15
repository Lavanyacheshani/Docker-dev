const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path"); // Add this to handle static files

const app = express();
const PORT = 3000;

let tasks = require("./tasks.json");

app.use(cors());
app.use(express.json());

// Serve static files (your frontend)
app.use(express.static(path.join(__dirname, "../frontend")));

// Get all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// Add a new task
app.post("/tasks", (req, res) => {
    const newTask = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        title: req.body.title,
        completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    res.status(201).json(newTask);
});

// Delete a task
app.delete("/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id, 10);
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks();
    res.status(204).send();
});

// Mark task as completed
app.put("/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id, 10);
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        res.json(task);
    } else {
        res.status(404).send({ message: "Task not found" });
    }
});

// Save tasks to tasks.json
function saveTasks() {
    fs.writeFileSync("./tasks.json", JSON.stringify(tasks, null, 2));
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
