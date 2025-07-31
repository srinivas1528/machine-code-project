import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";


// Both the pages and About pages require ThemeContext otherwise the state both theme, toggleTheme will not be available even after wrapping by the provider.
// we need proper Context import. period.
const About = () => {
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
        <Link to="/">
          <p style={{ color: theme === "dark" ? "white" : "black" }}>
            Visit The Home Page
          </p>
        </Link>
        <button onClick={toggleTheme}>Switch Mode</button>
      </div>
    </div>
  );
};

export default About;