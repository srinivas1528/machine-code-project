import React, { useEffect, useState } from "react"
import './App.css'
import useTimer  from "./hooks/UseTimer";

const App = () => {

    const [started, setStarted] = React.useState(false);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    // const [remainingSeconds, setRemainingSeconds] = useState(0);
    // const intervalRef = React.useRef(null);

    const handleHour = (event) => {
        setHours(Number(event.target.value));
    }

    const handleMinute = (e) => {
        setMinutes(Number(e.target.value));
    }

    const handleSecond = (e) => {
        setSeconds(Number(e.target.value));
    }

    const handleStart = () => {
        setStarted(true);
    }

 
    const { secondsLeft } = useTimer(hours, minutes, seconds, started, setStarted)

    const handleReset = () => {
        setStarted(false);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
    }

    return (
        <div className="App">
            {started ?
                (
                    <div>

                        <p className="text"> Hours remaining: {Math.floor(secondsLeft / 3600)} </p>
                        <p className="text"> Minutes remaining: {Math.floor((secondsLeft % 3600) / 60)} </p>
                        <p className="text"> Seconds remaining: {secondsLeft % 60}</p>
                        <button onClick={handleReset}> Reset </button>

                    </div>
                )
                :
                (
                    <div>
                        <label> H: </label><input className="hour" type="text" value={hours} onChange={handleHour}></input>
                        <label> M: </label><input className="minute" type="text" value={minutes} onChange={handleMinute}></input>
                        <label> S: </label><input className="second" type="text" value={seconds} onChange={handleSecond}></input>
                        <button onClick={handleStart}> Start Countdown</button>

                    </div>
                )}
        </div>
    )
}


export default App;