import React, { useEffect, useState } from "react"
import './App.css';

import ProgressBar  from "./components/ProgressBar/ProgressBar";

function App() {


  const [progress, setProgress] = useState(0);



  useEffect(() => {

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      })
    }, 100);

    return () => clearInterval(interval);

  }, [])

  return (
    <div className="App">
      ProgressBar
      <ProgressBar text={progress} width={progress}/>
    </div>
  );
}

export default App;
