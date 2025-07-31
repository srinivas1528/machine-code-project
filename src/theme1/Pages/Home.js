
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";


// Both the pages and About pages require ThemeContext otherwise the state will not be available even after wrapping by the provider.
// we need proper Context import. period.
const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        width: "100vw",
        height: "100vh",
      }}
    >
      <p style={{ color: theme === "dark" ? "white" : "black" }}>Home</p>
      <div>
        <Link to="about">
          <p style={{ color: theme === "dark" ? "white" : "black" }}>
            Visit The About Page
          </p>
        </Link>
        <button onClick={toggleTheme}>Switch Mode</button>
      </div>
    </div>
  );
};

export default Home;