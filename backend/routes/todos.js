const express = require("express");
const {
  getTodos,
  addTodo,
  deleteTodo,
  deleteCompletedTodos,
  updateTodo,
} = require("../controllers/todoController");

const router = express.Router();

// Get all todos
router.get("/", getTodos);

// Post a new todo
router.post("/", addTodo);

// Delete todo
router.delete("/:id", deleteTodo);

// Delete completed todos
router.delete("/", deleteCompletedTodos);

// Update todo
router.patch("/:id", updateTodo);

module.exports = router;
