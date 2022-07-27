import ActiveTodosCount from "./ActiveTodosCount";
import ClearCompletedTodos from "./ClearCompletedTodos";
import FilterList from "./FilterList";

function TodoListFooter({ filterOption, onFilterOptionChange }) {
  return (
    <footer className="list-footer flex text-on-surface-dim">
      <div className="content flex">
        <ActiveTodosCount />
        <ClearCompletedTodos />
      </div>
      <FilterList
        filterOption={filterOption}
        onFilterOptionChange={onFilterOptionChange}
      />
    </footer>
  );
}

export default TodoListFooter;
