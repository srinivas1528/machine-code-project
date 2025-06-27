import { useState } from "react"
import './App.css';
import useTimer from "./hooks/UseTimer";


function App() {


  const [active, setStarted] = useState(false);

  const [paused, setPaused] = useState(false);

  const [completed, setCompleted] = useState(true);

  const { current }   = useTimer(10, active, paused, completed);

  // simple change states and let the useTimer hook handle the timer logic
  const handleStartOrResumeClick = () => {
    setStarted(true);
    setPaused(false);
    setCompleted(false);
  }


  const handlePauseClick = () => {
    setPaused(true);
  }


  const handleCompleteClick = () => {
    setCompleted(true);
    setStarted(false);
    setPaused(false);
  }


  return (
    <>
      <h1>React Timer</h1>
      <div className="card">
        {/* Start/Resume Button */}
        <button onClick={() => handleStartOrResumeClick()} disabled={active && !paused}>
          {paused ? "Resume" : "Start"}
        </button>

       {/* Pause Button */}
        <button onClick={() => handlePauseClick()} disabled={!active || paused}>
          Pause
        </button>

        {/* Timer Display */}
        <div>Current: {current}</div>

        {/* Stop Button */}
        <button onClick={() => handleCompleteClick()} disabled={completed}>
          Stop
        </button>

      </div>
    </>
  )
}

export default App;
