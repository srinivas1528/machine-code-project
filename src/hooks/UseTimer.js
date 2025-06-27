import  { useEffect, useState } from "react"



const useTimer = ( initialValue, active, paused, completed ) => {

    const [current, setCurrent] = useState(initialValue);


    useEffect(() => {

        let handler;

        if (completed) {
            // Resets timer when stop button is clicked
           setCurrent(initialValue);
        } else if (active && !paused) {
            handler = setInterval(() => {

                // Increment timer when start button is clicked
                setCurrent((current) => current + 1);

            }, 1000)
        }
        // Clean up interval
        return () => clearInterval(handler)
    }, [active, paused, completed, initialValue])


    return  {current ,setCurrent}

}

export default useTimer;