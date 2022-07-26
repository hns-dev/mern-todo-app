import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useDarkMode from "./hooks/useDarkMode";
import "./index.css";

function App() {
  const { darkMode, handleDarkModeChange } = useDarkMode("body");

  return (
    <>
      <Header darkMode={darkMode} onDarkModeChange={handleDarkModeChange} />

      <main className="main-content">
        <div className="container">
          <TodoForm />

          <TodoList />

          <p className="msg msg-margin text-center text-on-surface-dim">
            Drag and drop to reorder list
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
