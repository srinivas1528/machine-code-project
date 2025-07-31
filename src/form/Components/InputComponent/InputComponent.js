import React from "react"

const InputComponent = ( {type, onChange, name, error}) => {

    <div className="input-holder">
     <label>{name}</label>
     <input type={type} onChange={onchange}></input>
     {error && <p>{error}</p>}
    </div>

}

export default InputComponent;