const Todo = require("../models/Todomodel");

exports.allTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);    
        
    } catch (error) {
        console.error(error);
        console.log("Error in listing all Todos")
    }
}
exports.newTodo = async (req, res) => {
    try {
        const newTodo = await Todo.create(req.body);
        res.status(201).json({
            newTodo,
        }) 
        
    } catch (error) {
        console.error(error);
        console.log("Error in new Todo")
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        const result = await Todo.findByIdAndDelete(req.params.id);
        console.log("Result", result); 
        res.json(result);
    } catch (error) {
        console.error(error);
        console.log("Error in deleting Todo")
    }
}