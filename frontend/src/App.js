import Header from "./components/Header";
import useDarkMode from "./hooks/useDarkMode";
import "./index.css";

function App() {
  const { darkMode, handleDarkModeChange } = useDarkMode("body");

  return (
    <>
      <Header darkMode={darkMode} onDarkModeChange={handleDarkModeChange} />
    </>
  );
}

export default App;
