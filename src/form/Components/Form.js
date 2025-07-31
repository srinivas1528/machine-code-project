import { useState } from "react";

const Form = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");


    // error states
    const [firstNameError, setFirstNameError] = useState(false);
    // const [lastNameError, setLastNameError] = useState(false);



    const inputFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const inputLastName = (event) => {
        setLastName(event.target.value);
    }

    const handleSubmit = () => {
        if(firstName.length < 5) {
            setFirstNameError(true);
            console.log("Form validation error: Input first name does not match requirements.")
        }
        // else reset here.
        setFirstNameError(false);
    }


    return (
        <>
            <input type="text" onChange={inputFirstName} value={firstName} />
            {firstNameError && <p> First Name error here.</p>}
            <input type="text" onChange={inputLastName} value={lastName} />
            <button type="submit" onClick={handleSubmit}>
                Submit
            </button>
        </>
    )
}

export default Form;