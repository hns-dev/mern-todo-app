import ActiveTodosCount from "./ActiveTodosCount";
import ClearCompletedTodos from "./ClearCompletedTodos";

function TodoListFooter() {
  return (
    <footer className="list-footer flex text-on-surface-dim">
      <div className="content flex">
        <ActiveTodosCount />
        <ClearCompletedTodos />
      </div>
    </footer>
  );
}

export default TodoListFooter;
