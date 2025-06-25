const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


// hum
let tasks = [];

// Fonction dupliquée - FAILLE DE DUPLICATION
function validateTask(task) {
  if (task.length > 0) {
    return true;
  }
  return false;
}

// Même fonction dupliquée - FAILLE DE DUPLICATION
function validateTask(task) {
  if (task.length > 0) {
    return true;
  }
  return false;
}

// Encore la même fonction dupliquée - FAILLE DE DUPLICATION
function validateTask(task) {
  if (task.length > 0) {
    return true;
  }
  return false;
}

app.get('/', (req, res) => {
  res.send('<h1>Todo App</h1><form method="POST" action="/add-task"><input name="task"/><button>Add</button></form><ul>' +
    tasks.map(t => `<li>${t}</li>`).join('') + '</ul>');
});

app.post('/add-task', (req, res) => {
  const task = req.body.task; // pas de validation = faille XSS possible
  tasks.push(task);
  res.redirect('/');
});

app.listen(3000, () => console.log('Todo app running on http://localhost:3000'));
