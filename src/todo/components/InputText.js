import React from "react"

const InputText = ({ taskInput, onInputHandler, onSubmitHandler, disabled}) => {

    return (
    <div className="input">
        <input type="text" value={taskInput} onChange={onInputHandler}  className="input_class"  placeholder="add a task here.."/>
        <button type="submit" onClick={onSubmitHandler} disabled={disabled}>
            submit
        </button>
    </div>
    )
}


export default InputText;