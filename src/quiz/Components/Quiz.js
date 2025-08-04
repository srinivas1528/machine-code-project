import React, { act, useState } from "react";


const Quiz = () => {

    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
        },
        {
            question: "What is 2 + 2 ?",
            options: ["3", "4", "5", "6"],
            answer: "4",
        },
        {
            question: "Which Planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Mars",
        }
    ]

    const [activeIndex, setActiveIndex] = React.useState(0);


    const rightClickHandle = () => {
        setActiveIndex(activeIndex + 1);
    }

    const leftClickHandle = () => {
        setActiveIndex(activeIndex - 1);
    }

    const [isReport, setIsReport] = useState(false);

    const generateScoreCard = () => {
        // for one last time, increment prev score by 1.
        // generate score at last to avoid discrepency.
        for (let i = 0; i < questions.length; i++) {
            if (selectedOptions[i] === questions[i].answer) {
                setScore((prev) => prev + 1);
            }
        }

        setIsReport(true);

    }

    const [score, setScore] = useState(0);


    // user selected options 
    const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(""));

    const handleOptionSelect = (selectedOption) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[activeIndex] = selectedOption;
        setSelectedOptions(newSelectedOptions);
    }


    const resetGame = () => {
        setScore(0);
        setActiveIndex(0);
        setIsReport(false);
        setSelectedOptions(Array(questions.length).fill(""));
    }


    return (
        <div>
            {isReport ?
                <div>
                    <h1> Generated Report: </h1>
                    <p> {score} out of {questions.length} </p>
                    <div className="result-holder">
                        {questions.map((question, index) => (
                            <div key={index} className="result-question">
                                <div><strong>{question.question}</strong></div>
                                <div>Your answer:{selectedOptions[index]}</div>
                                <div>Correct Answer: {question.answer}</div>
                            </div>
                        ))
                        }
                    </div>
                    <button className="button-container" onClick={resetGame}>
                        Reset Game
                    </button>
                </div>
                :
                <div>
                    <div className="question-holder"><strong> {questions[activeIndex].question} </strong> </div>
                    <div className="option-holder">
                        {questions[activeIndex].options.map((option, index) => (
                            <div>
                                <input type="radio"
                                    name={`quiz-question-${activeIndex}`}
                                    value={option}
                                    style={{
                                        backgroundColor: (selectedOptions[activeIndex] === option) ? "grey" : "",
                                    }}
                                    onChange={() => handleOptionSelect(option)} />
                                <label> {option} </label>
                            </div>
                        ))
                        }
                    </div>

                    <div className="buttonsContainer">
                        <button onClick={leftClickHandle} disabled={activeIndex === 0}> Prev </button>
                        {
                            (activeIndex === questions.length - 1)
                                ? <button onClick={() => generateScoreCard()}> Complete Quiz </button>
                                : <button onClick={rightClickHandle}> Next </button>

                        }
                    </div>
                </div>
            }
        </div>
    )

}

export default Quiz;