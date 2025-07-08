import React, { useEffect, useMemo, useState } from "react"
import InputText from "./components/InputText";

import './App.css'
import WorkTitle from "./components/WorkTitle";

const App = () => {


    const [taskInput, setTaskInput] = useState("");

    const [taskName, setTaskName] = useState("");

    // const useSemiPersistentState = (key, initialState) => {
    //     const [taskChoresArray, setTaskChoresArray] = React.useState(
    //         localStorage.getItem(key) || initialState
    //     );


    //     React.useEffect(() => {
    //         localStorage.setItem(key, taskChoresArray);
    //     }, [taskChoresArray, key]);

    //     return [taskChoresArray, setTaskChoresArray];

    // }

    // const [taskChoresArray, setTaskChoresArray] = useSemiPersistentState('chores', ["laundry", "Cleaning", "jobs apply using referrals"]);

    const [taskChoresArray, setTaskChoresArray] = useState(["laundry", "chores"]);

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


    useEffect(()=> {
        setTaskInput("");
        // push item to the list whenever a new task is added.
        if (taskName.trim() !== "") {
            setTaskChoresArray((prev) => [...prev, taskName]);
        }
    }, [taskName])


    /*
    1. Implement a feature to mark as complete when checked on a toogle or a button with Mark as complete.
    2. Drag & resize.
    3. Implement semi persistence storage.
    */

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