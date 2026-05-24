import {
  useContext
} from "react";

import {
  ThemeContext
} from "../context/ThemeContext";

function Navbar() {

  const {
    theme,
    toggleTheme
  } = useContext(
    ThemeContext
  );

  return (

    <nav
      style={{
        padding: "20px",
        background:
          theme === "dark"
            ? "black"
            : "lightgray",

        color:
          theme === "dark"
            ? "white"
            : "black"
      }}
    >

      <h2>My App</h2>

      <button
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>

    </nav>

  );

}

export default Navbar;