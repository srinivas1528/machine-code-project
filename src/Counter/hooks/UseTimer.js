import { useState, useEffect } from "react";



// custom hook
const useTimer = ((hoursEntered, minutesEntered, secondsEntered, started, setStarted) => {


    // convert input time to total seconds.
    const timeTotalInSeconds = Number(hoursEntered * 3600) + Number(minutesEntered * 60) + Number(secondsEntered);

    const [secondsLeft, setSecondsLeft] = useState(timeTotalInSeconds);

    useEffect(() => {

        if (!started) { return; }

        // initialize the timer with time total remaining
        setSecondsLeft(timeTotalInSeconds);

        let intervalId = setInterval(() => {
            setSecondsLeft((prev) => {

                if (prev === 1) {
                    clearInterval(intervalId)
                    // set the status to false
                    setStarted(false);
                    return 0;
                }
                // decrements timer by 1
                return prev - 1;
            })
        }, 1000);

        return () => clearInterval(intervalId);

    }, [timeTotalInSeconds, started])
    // console.log(secondsRemaining);
    return { secondsLeft };
});

export default useTimer;