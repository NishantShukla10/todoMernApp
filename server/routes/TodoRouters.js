const express = require("express");
const router = express.Router();

const {allTodos, newTodo, deleteTodo} = require("../controller/todoController");

router.get('/todos', allTodos);
router.post('/todo/new', newTodo);
router.delete('/todos/delete/:id', deleteTodo);

module.exports = router;