import React, { useState } from "react"

const WorkTitle = ({ index, title, workArray, setWorkArray }) => {


    // Tracks if the tile is in edit mode
    // NOTE: Each state is a state or a vairable for it's own component, each rendering of the work Array creates new state
    // for isEditing state thus each state is independent here.
    // If we do not use a component, then the state editing is a one place and we cannot achieve the functionality here.
    const [isEditing, setIsEditing] = useState(false);
    // Stores the edited title
    const [newTitle, setNewTitle] = useState(title);

    // Delete task functionality when delete button is clicked.
    const handleRemoveTask = (task, taskId) => {
        setWorkArray((prev) => prev.filter((todoItem) => todoItem !== task));  // Note: here using id for filter will not work because index acts like a fixed value  as it is a prop.
        console.log("delete the task.")
        console.log(`===========After deleteting the task: ${task}`);
        console.log(workArray);
    }

   // set state for editing
    const editTask = () => {
        setIsEditing(true);
        console.log("edit the task")
    }
    


    // set state for newTitle
    const inputHandler = (event) => {
        setNewTitle(event.target.value);
    }


    const handleSave = (taskIndex) => {

       // if item and WorkTitle matches, then update it.
       // else, keep pushing the same item.
       // think of logic as selecting the task matching with task id
        const updatedArray = workArray.map((item) => {
          return item === title ? newTitle : item;
        })

        setWorkArray(updatedArray);
        setIsEditing(false);
    }

    const handleCancel = () => {
        setNewTitle(title);
        setIsEditing(false); // Enter edit mode for a nicer experience.
    }


    return (

        <div className="item" key={index}>
            {isEditing ?
                (

                    <div>
                        <p>Edit stage: {newTitle}</p>
                        <input type="text" value={newTitle} onChange={inputHandler}/>
                        <button type="submit" className="button" onClick={() => handleSave(index)}>
                            Save
                        </button>
                        <button type="submit" className="button" onClick={() => handleCancel()}>
                            Cancel
                        </button>
                    </div>
                ) :
                (
                    <div>
                        <div className="task"> {title} </div>
                        <button className="button" onClick={() => handleRemoveTask(title, index)}>
                            Delete
                        </button>
                        <button className="button" onClick={() => editTask()}>
                            Edit
                        </button>
                    </div>
                )
            }
        </div>
    )

}


export default WorkTitle