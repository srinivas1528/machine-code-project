import React, { useState } from "react";
import InputComponent from './Components/InputComponent/InputComponent'

const App = () => {


    const [userInput, setUserInput] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        password: "",
    });


    const isValidValue = () => {

        const errorObj = {
            firstName: "",
            lastName: "",
            mobileNumber: "",
            password: "",
        }

        if (userInput.firstName.length < 5) {
            errorObj.firstName = "First name should contain atleast 5 characters."
        } else {
            errorObj.firstName = "";
        }

        if (userInput.lastName.length < 2) {
            errorObj.lastName = "Last name should contain atleast 2 characters."
        } else {
            errorObj.lastName = "";
        }


        if (userInput.mobileNumber !== 10 || isNaN(userInput.mobileNumber)) {
            errorObj.mobileNumber = "Please enter valid 10-digit number."
        } else {
            errorObj.mobileNumber = "";
        }

        if (userInput.password < 8) {
            errorObj.password = "password should contain alteast 8 characters"
        } else {
            errorObj.password = "";
        }


        setErrors(errorObj);

        return !Object.values(errorObj).some((error) => error !== "");
    }



    const handleUserInput = (e, type) => {
        let value = e.target.value;
        let newUserInput = { ...userInput, [type]: value }
        setUserInput(newUserInput);
    }

    const handleSumbit = (e) => {
        e.preventDefault();

        if (isValidValue()) {
            console.log("The form is valid and does not contain errors.");
        } else {
            console.log("Form contains errors");
        }
    }

    return (
        <div className="App">
            <p>This is a text</p>
            <form onSubmit={handleSumbit}>
                <InputComponent
                    name="First Name"
                    type="text"
                    onChange={(e) => handleUserInput(e, "firstName")}
                    error={errors.firstName}
                />
                <InputComponent
                    name="Last Name"
                    type="text"
                    onChange={(e) => handleUserInput(e, "lastName")}
                    error={errors.lastName}
                />
                <InputComponent
                    name="Mobile Number"
                    type="text"
                    onChange={(e) => handleUserInput(e, "mobile")}
                    error={errors.mobile}
                />
                <InputComponent
                    name="Password"
                    type="text"
                    onChange={(e) => handleUserInput(e, "password")}
                    error={errors.password}
                />
            </form>
        </div>
    )
}

export default App;