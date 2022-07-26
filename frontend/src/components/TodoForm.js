import { useState } from "react";
import { useTodosContext } from "../hooks/useTodosContext";
function TodoForm() {
  const { dispatch } = useTodosContext();
  const [todoContent, setTodoContent] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const todo = { content: todoContent, completed: false };

    const response = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) setError(json.error);

    if (response.ok) {
      setError(null);
      setTodoContent("");
      dispatch({ type: "CREATE_TODO", payload: json });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control flex surface-color padding">
        <div className="checkmark">
          <div className="checkmark-inner"></div>
        </div>

        <input
          type="text"
          placeholder="Create a new todo..."
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
        />
      </div>
    </form>
  );
}

export default TodoForm;
