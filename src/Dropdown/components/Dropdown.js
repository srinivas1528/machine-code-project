import { useState } from "react";
import './Dropdown.css'

const Dropdown = ( {componentObject}) => {

      // tracks the currently clicked header
      const [clickedHeader, setClickedHeader] = useState("");
      // tracks the currently clicked option
      const [clickedOption, setClickedOption] = useState("");

 
      const handleHeaderClick = () => {
        if(clickedHeader === componentObject.title) {
            setClickedHeader(""); // collapse the dropdown
        } else {
            setClickedHeader(componentObject.title); // opens the clicked dropdown
        }
      }


      const handleOptionClick = (option) => {
            setClickedOption(option);  // sets the selected option
            setClickedHeader("");  // collaps the dropdown after selection
      }

      const getReturnOptions = (componentObject) => {
        if(clickedHeader === componentObject.title) {
            // dynamically generate the options list when dropdown is selected
            return componentObject.options.map((option, index) => (
                <span key={index} onClick={() => handleOptionClick(option)}>
                    {option}
                </span>
            )) 
        }
        return null;
      }




      return (
        <div className="componentTitle">

            <div className="componentHeader" onClick={handleHeaderClick}>
                {componentObject.title}
            </div>
            <div className="componentOption">
                {getReturnOptions(componentObject)}
            </div>
        </div>
      )




}

export default Dropdown;