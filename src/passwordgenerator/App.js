import React from "react";
import "./App.css"

const App = () => {

    const [userInput, setUserInput] = React.useState({
        length: 0,
        specialChar: false,
        uppercase: false,
        lowercase: false,
        numbers: false,
    })

    const [passwordStr, setPasswordStr] = React.useState('');

    const [submitted, setSubmitted] = React.useState(false);

    // Character pools

    const uppercaseArray = [...Array(26)].map((_, i) => String.fromCharCode(65 + i)); // A-Z
    const lowrecaseArray = [...Array(26)].map((_, i) => String.fromCharCode(97 + i)); // a-z
    const numbersArr = [...Array(10)].map((_, i) => i.toString()); // 0-9
    const specialCharArr = "@#$%^&*()".split(""); // Special characters 

    // Handling user input
    const onSliderChange = (e) => {
        const newUserInput = { ...userInput, "length": e.target.value };

        // reset the password.
        setSubmitted(false);
        setUserInput(newUserInput);
    }

    const onCheckboxChange = (e, type) => {
        const newUserInput = { ...userInput, [type]: e.target.checked };
        // reset the password.
        setSubmitted(false);
        setUserInput(newUserInput);
    }

    // generates a random password based on the choosen input values.
    const generatePassword = () => {

        let dynamicCharacterPool = [];
        let { length, uppercase, lowercase, numbers, specialChar } = userInput; // array desturturing

        if (uppercase) dynamicCharacterPool.push(uppercaseArray);
        if (lowercase) dynamicCharacterPool.push(lowrecaseArray);
        if (numbers) dynamicCharacterPool.push(numbersArr);
        if (specialChar) dynamicCharacterPool.push(specialCharArr);


        const dynamicCharacterPoolFlatList = dynamicCharacterPool.flat(); 
        console.log("dynamicCharacterPoolFlatArray", dynamicCharacterPoolFlatList)

        const passwordString = [];
        while (length > 0) {
            passwordString.push(dynamicCharacterPoolFlatList[Math.floor(Math.random() * dynamicCharacterPoolFlatList.length)])
            length--;
        }

        setSubmitted(true);
        setPasswordStr(passwordString);
    }


    return (
        <>
            <div className="config-section">
                <div className="config-option">
                    <label>Select Length</label>
                    <input type="range"
                        name="length"
                        min="1"
                        max="20"
                        value={userInput.length}
                        onChange={(e) => onSliderChange(e)}
                    />
                </div>
                <div className="config-option">
                    <label>Special Characters</label>
                    <input type="checkbox"
                        name="specialChar"
                        onChange={(e) => onCheckboxChange(e, "specialChar")}
                    />
                </div>
                <div className="config-option">
                    <label>Uppercase Characters</label>
                    <input type="checkbox"
                        name="uppercase"
                        onChange={(e) => onCheckboxChange(e, "uppercase")}
                    />
                </div>
                <div className="config-option">
                    <label>Lowercase Characters</label>
                    <input type="checkbox"
                        name="lowercase"
                        onChange={(e) => onCheckboxChange(e, "lowercase")}
                    />
                </div>
                <div className="config-option">
                    <label>Numbers:</label>
                    <input type="checkbox"
                        name="numbers"
                        onChange={(e) => onCheckboxChange(e, "numbers")}
                    />
                </div>
            </div>
            <button onClick={generatePassword}> Generate Password:</button>
            <div className="passwordHolder">{submitted && passwordStr}</div>
        </>
    )
}

export default App;