import React from "react";

function TodoItem({ todo }) {
  const handleTodoStatusChange = async (id, completed) => {};

  const handleDeleteTodo = async (id) => {};

  return (
    <div className="item grid surface-color">
      {/* Checkbox Button */}
      <div
        className={`btn checkmark ${todo.completed ? "completed" : ""}`}
        onClick={() => handleTodoStatusChange(todo._id, todo.completed)}
      >
        {todo.completed ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
            <path
              fill="none"
              stroke="#FFF"
              strokeWidth="2"
              d="M1 4.304L3.696 7l6-6"
            />
          </svg>
        ) : (
          <div className="checkmark-inner"></div>
        )}
        <input type="checkbox" />
      </div>

      {/* Todo content*/}
      <span className={`todo-content ${todo.completed ? "completed" : ""}`}>
        {todo.content}
      </span>

      {/* Delete Button */}
      <button
        className="btn cross-icon push"
        onClick={() => handleDeleteTodo(todo._id)}
      >
        <svg
          className="delete-icon"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
        >
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default TodoItem;
