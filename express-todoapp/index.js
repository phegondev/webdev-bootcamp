const express = require('express');
const app = express();


// Middleware to parse JSON
app.use(express.json());
const PORT = 3000;


// In-memory "database"
let todos = [
    { id: 1, task: "Learn Express", completed: false },
    { id: 2, task: "Build API", completed: false }
]


app.get("/", (req, res) => {
    res.json(todos)
})

//ROUTE
app.get('/todos', (req, res) => {
    console.log("I was clicked")
    res.json(todos)
})



app.get('/todos/:id', (req, res) => {
    const id = req.params.id;
    const todo = todos.find(todo => todo.id === parseInt(id));
    if (!todo) return res.status(404).send("Todo Not Found");
    res.json(todo)
})



//save a todo item
app.post('/todos', (req, res) => {

    const newTodo = {
        id: todos.length + 1,
        task: req.body.task,
        completed: req.body.completed || false
    }

    todos.push(newTodo)
    res.status(201).json(newTodo);

});


//Put(Update) Request
app.put("/todos", (req, res) => {

    const { id, task, completed } = req.body;

    const todo = todos.find(t => t.id === parseInt(id));
    if (!todo) return res.status(404).send('Todo not found');

    todo.task = task || todo.task;
    todo.completed = completed !== undefined ? completed : todo.completed;

    res.json(todo);

});


//Delete Request/ endpoint
app.delete('/todos/:id', (req, res) => {
    const idFromParams = req.params.id;
    const index = todos.findIndex(t => t.id === parseInt(idFromParams));

    if (index === -1) return res.status(404).send("Todo Not Found");

    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo);

})



app.listen(PORT, () => {
    //localhost ip is: 127.0.0.1
    console.log(`Server is running on http://127.0.0.1:${PORT}`)
})


