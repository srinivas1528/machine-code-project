import React from "react"
import './ProgressBar.css'


const ProgressBar = ({ width, text }) => {

    return(
        <div className="ProgressBar">
            <div className="ProgressHolder" style={{width: `${width}%`}}>
              {text}%
            </div>
        </div>
    )

}


export default ProgressBar;