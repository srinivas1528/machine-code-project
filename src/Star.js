import React, { useState } from "react"

import './Star.css'
import { FaStar } from "react-icons/fa";


const Star = () => {



    // Idea: have 5 divs later using flex box design with direction as row.
    // if we hover or click element we need to pass light on the clicked element and the preceeding divs as well.



    // const [clickedItem, setClickedItem] = useState(null);

    // const [count, setCount] = useState(0);

    // var starCount = 0;


    // // const handleClick = (id) => {
    // //     setCount(id);
    // //     setClickedItem(id);
    // //     starCount = count;
    // //     getAllOccurencesOfStar();
    // // }

    // const data = [

    //     { id: "01", value: "Star" },
    //     { id: "02", value: "Star" },
    //     { id: "03", value: "Star" },
    //     { id: "04", value: "Star" },
    //     { id: "05", value: "Star" },
    // ]

    // logic: select all of the css classes so far
    // example: item 4 with id: 04 clicked select all the 4 classes from Star1 to Star4
    // for(int i = 0; i < )

    // function getAllOccurencesOfStar() {
    //     let array = [];
    //     while (starCount > 0) {
    //         let i = 1;
    //         array.push(`Star + ${i}`);
    //         starCount--;
    //     }

    //     return array;

    // }


    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const [clickedIndex, setClickedIndex] = useState(-1);

    const handleHoverEvent = (id) => {
        setHoveredIndex(id);
    }

    const handleClick = (id) => {
        setClickedIndex(id);
    }



    const getRenderedStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <div id={i}
                    key={i}
                    className="starDiv"
                    onMouseEnter={() => handleHoverEvent(i)}
                    onClick={() => handleClick(i)}>
                    <FaStar
                        color={i <= hoveredIndex || i <= clickedIndex ?
                            'yellow' : 'darkgray'}
                        size={40}
                    />
                </div>
            )
        }
        return stars;

    }




    return (
        <div className="App">
            <div className="StarContainer" onMouseLeave={() => setHoveredIndex(-1)}>
                {getRenderedStars()}
            </div>
        </div>
    )
}


export default Star