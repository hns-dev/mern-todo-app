import { useEffect, useState } from "react";
import { useTodosContext } from "../hooks/useTodosContext";
import TodoItem from "./TodoItem";
import TodoListFooter from "./TodoListFooter";

function TodoList() {
  const { todos, dispatch } = useTodosContext();
  const [error, setError] = useState();
  const [filterOption, setFilterOption] = useState("All");

  function handleFilterOptionChange(filterText) {
    setFilterOption(filterText);
  }

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("/api/todos");
      const json = await response.json();

      if (!response.ok) setError(json.error);

      if (response.ok) {
        setError(null);
        dispatch({ type: "SET_TODOS", payload: json });
      }
    };

    fetchTodos();
  }, [dispatch]);

  // Filter todo list
  const filterTodolist = () => {
    if (todos) {
      if (filterOption === "All") return todos;

      if (filterOption === "Active")
        return todos.filter((todo) => !todo.completed);

      if (filterOption === "Completed")
        return todos.filter((todo) => todo.completed);
    }

    return [];
  };

  return (
    <>
      <div className="list surface-color">
        {filterTodolist().length > 0 ? (
          filterTodolist().map((todo) => (
            <TodoItem key={todo.content} todo={todo} />
          ))
        ) : (
          <p className="msg text-center">Your list is empty.</p>
        )}
      </div>

      <TodoListFooter
        filterOption={filterOption}
        onFilterOptionChange={handleFilterOptionChange}
      />
    </>
  );
}

export default TodoList;
