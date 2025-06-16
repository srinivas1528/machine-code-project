import React from "react";
import { FaHeart, FaFighterJet } from "react-icons/fa";
const Button = ( {onClick, liked, error, loading} ) => {

    return (

        <div>
            <button
              className={liked ? "buttonHolderLiked" : "buttonHolder" }
              onClick={onClick}
            >
                
            <span> Button</span>
            {loading ? <FaFighterJet/> : <FaHeart/>}
            <div>{liked ? "liked" : error}</div>
            </button>
        </div>
    )

}


export default Button