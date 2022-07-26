import { useEffect, useState } from "react";
import { useTodosContext } from "../hooks/useTodosContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos, dispatch } = useTodosContext();
  const [error, setError] = useState();

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

  return (
    <div className="list surface-color">
      {todos.length > 0 ? (
        todos.map((todo) => <TodoItem key={todo.content} todo={todo} />)
      ) : (
        <p className="msg text-center">Your list is empty.</p>
      )}
    </div>
  );
}

export default TodoList;
