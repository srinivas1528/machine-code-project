// import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home"
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/about" Component={About} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;