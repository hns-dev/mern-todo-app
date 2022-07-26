import { useState, useEffect } from "react";

function useDarkMode(element) {
  const darkModePrefrence = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(JSON.parse(darkModePrefrence));

  // On first page load and whenever the darkMode state changes, update the dark mode value in localStorage and toggle the "dark" class in the targeted element (html or body)
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    const ele = document.querySelector(element);
    darkMode ? ele.classList.add("dark") : ele.classList.remove("dark");
  }, [darkMode, element]);

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  return { darkMode, handleDarkModeChange };
}

export default useDarkMode;
