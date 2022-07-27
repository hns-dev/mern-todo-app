import ActiveTodosCount from "./ActiveTodosCount";

function TodoListFooter() {
  return (
    <footer className="list-footer flex text-on-surface-dim">
      <div className="content flex">
        <ActiveTodosCount />
      </div>
    </footer>
  );
}

export default TodoListFooter;
