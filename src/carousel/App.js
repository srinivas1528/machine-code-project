import React, { useState } from "react"

import './App.css'

const App = () => {


    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/270756/pexels-photo-270756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];


    const handleLeftClick = () => {

        // setActiveIndex((prev) => {
        //     if(prev === 0) {
        //         return images.length - 1; // an edge case: out of bounds
        //     }
        //     return prev - 1;
        // });

        // Note: this refactor looks more like a react way.
        if (activeIndex === 0) {
            setActiveIndex(images.length - 1); // set it to the final image.
        } else {
            setActiveIndex(activeIndex - 1); // move to the left next image.
        }
    }


    const handleRightClick = () => {

        // setActiveIndex((prev) => {
        //     if (prev === images.length - 1) {
        //         return 0; // an edge case: out of bounds
        //     }
        //     return prev + 1;
        // });


        // Note: this refactor looks more like a react way.
        if (activeIndex === images.length - 1) {
            setActiveIndex(0); // reset it back to the first image in a carousel for looping.
        } else {
            setActiveIndex(activeIndex + 1); // move to the right next image
        }
    }


    return (
        <div className="componentContainer">
            <div className="imageContainer">
                <img src={images[activeIndex]} alt={`Image: ${activeIndex}`}></img>
                <button onClick={handleLeftClick}> Prev </button>
                <button onClick={handleRightClick}> Next </button>
                <p> {activeIndex + 1} of {images.length} </p>
            </div>
        </div>
    )
}


export default App

