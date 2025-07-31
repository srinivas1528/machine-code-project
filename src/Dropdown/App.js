import React from "react"
import Dropdown from "./components/Dropdown"

const App = () => {


    const data = [
        { 
            title: "Title 01", 
            options: ["Option01", "Option02"],
        },
        { 
            title: "Title 02",
            options: ["Option03", "Option04"],
        }
    ]

    return (
        <div>
            {data.map((item, index) => (
              <Dropdown key={index} componentObject={item}/>
            ))
            }

        </div>
    )

}

export default App;