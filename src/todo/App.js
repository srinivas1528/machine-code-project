import React, { useEffect, useMemo, useState } from "react"
import InputText from "./components/InputText";

import './App.css'
import WorkTitle from "./components/WorkTitle";

const App = () => {


    const [taskInput, setTaskInput] = useState("");

    const [taskName, setTaskName] = useState("");

    const [taskChoresArray, setTaskChoresArray] = useState(["laundry", "Cleaning"]);

    const isSubmitDisabled = taskInput.trim() === "" || taskInput === taskName;

    // gets task count using useMemo for future use.
    const getCount = useMemo(() => {
        return taskChoresArray.reduce((acc) => acc + 1, 0);
    }, [taskChoresArray])

    // set state for taskInput.
    const inputHandler = (e) => {
        setTaskInput(e.target.value);
    }

    // set state for taskName.
    const submitHandler = (e) => {
        e.preventDefault();
        setTaskName(taskInput);
    }


    // push item to the list whenever a new task is added.
    useEffect(() => {
        setTaskInput("");
        if (taskName.trim() !== "") {
            setTaskChoresArray((prev) => [...prev, taskName]);
        }
    }, [taskName])


    return (
        <div>
            <InputText disabled={isSubmitDisabled} taskInput={taskInput} onInputHandler={inputHandler} onSubmitHandler={submitHandler} />
            <h1> To do items:</h1>
            <div className="itemContainer">

                {taskChoresArray.map((item, index) => (

                    <WorkTitle 
                    key={index}
                    title={item}
                    workArray={taskChoresArray}
                    setWorkArray={setTaskChoresArray}
                    />
                ))
                }

                <h2>Task Count: {getCount}</h2>
            </div>
        </div>
    )
}


export default App; 