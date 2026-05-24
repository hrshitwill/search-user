import {
  useContext
} from "react";

import {
  ThemeContext
} from "../context/ThemeContext";

function Home() {

  const { theme } =
    useContext(
      ThemeContext
    );

  return (

    <div
      style={{
        padding: "20px",

        background:
          theme === "dark"
            ? "#222"
            : "white",

        color:
          theme === "dark"
            ? "white"
            : "black",

        minHeight: "100vh"
      }}
    >

      <h1>Home Page</h1>

      <p>
        Current Theme:
        {theme}
      </p>

    </div>

  );

}

export default Home;