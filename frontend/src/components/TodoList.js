import { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
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

  // Handle Drag & Drop
  const handleOnDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newList = Array.from(todos);
    const [draggableItem] = newList.splice(source.index, 1);
    newList.splice(destination.index, 0, draggableItem);

    dispatch({ type: "SET_TODOS", payload: newList });
  };

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="dropList">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="list surface-color"
            >
              {filterTodolist().length > 0 ? (
                filterTodolist().map((todo, index) => (
                  <TodoItem key={todo._id} index={index} todo={todo} />
                ))
              ) : (
                <p className="msg text-center">Your list is empty.</p>
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <TodoListFooter
        filterOption={filterOption}
        onFilterOptionChange={handleFilterOptionChange}
      />
    </>
  );
}

export default TodoList;
