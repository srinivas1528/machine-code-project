import { useState } from "react"

import './App.css'

const App = () => {

    const [input, setInput] = useState("");

    const [result, setResult] = useState("");


    const clearInput = () => {
        setInput("");
        setResult("");
    }

    const calculateResult = () => {


        let num1 = "";
        let num2 = "";
        let operator = ""
        for (let i = 0; i < input.length; i++) {

            const char = input[i];
            if ((["+", "-", "*", "/"].includes(char))) {
                operator = char;
            } else if (!(operator)) {
                num1 += char;        // retrieves first operand
            } else {
                num2 += char;        // retrieves second oeprand
            }
        }


        num1 = parseInt(num1);
        num2 = parseInt(num2);

        if (operator === "+") { return setResult(num1 + num2) }
        else if (operator === "-") { return setResult(num1 - num2) }
        else if (operator === "*") { return setResult(num1 * num2) }
        else if (operator === "/") { return setResult(num1 / num2) }

    }


    const evaluateInput = (value) => {
        setInput((prev) => prev + value);
    }

    return (
        <div className="buttonsContainer">
            {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "/", 0, "C", "="].map((btn) => (
                <button
                    key={btn}
                    onClick={
                        btn === "C" ?
                            clearInput :
                            btn === "=" ?
                                calculateResult :
                                () => evaluateInput(btn.toString())
                    }
                    className={`calculator-button ${btn === "C" ? "clear" : btn === "=" ? "equal" : ""
                        }`}
                >
                    {btn}
                </button>
            ))}
            Result is : {result}
        </div>
    )
}


export default App; 