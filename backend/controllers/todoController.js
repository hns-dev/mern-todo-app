const Todo = require("../models/todoModel");
const mongoose = require("mongoose");

// Get all todos
const getTodos = async (req, res) => {
  const todos = await Todo.find({});

  res.status(200).json(todos);
};

// Add todo
const addTodo = async (req, res) => {
  const { content, completed } = req.body;

  if (!content) return res.status(400).json({ error: "Please add a todo" });

  try {
    const todo = await Todo.create({ content, completed });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ error: "No such todo" });

  const todo = await Todo.findOneAndDelete({ _id: id });

  if (!todo) return res.status(400).json({ error: "No such todo" });

  res.status(200).json(todo);
};

// Delete completed todos
const deleteCompletedTodos = async (req, res) => {
  const todos = await Todo.deleteMany({ completed: true });

  if (!todos) return res.status(400).json({ error: "No completed todos" });

  res.status(200).json(todos);
};

// Update todo
const updateTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ error: "No such todo" });

  const todo = await Todo.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!todo) return res.status(400).json({ error: "No such todo" });

  res.status(200).json(todo);
};

module.exports = {
  getTodos,
  addTodo,
  deleteTodo,
  deleteCompletedTodos,
  updateTodo,
};
