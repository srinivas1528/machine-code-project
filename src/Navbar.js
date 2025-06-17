import React, { useEffect, useState } from "react"

import './Nabar.css'

const Navbar = () => {



    // state management
    // Updates the `isMobile` state based on the screen width
    const [itemClickedId, setItemClickedId] = useState(0);

    // Tracks if the hamburger menu is toggled
    const [hamburgerToggled, setHamburgerToggled] = useState(false);

    // Determines if the screen size is mobile
    const [isMobile, setIsMobile] = useState(window.innerWidth < 460);


    // Functionality Resize window size dynamically.
    // Tip: Use event listener.
   // Updates the `isMobile` state based on the screen width
    function handlerFunction() {
         if(window.innerWidth < 460) {
            setIsMobile(true);
         } else {
            setIsMobile(false);
         }   
    }

    useEffect(() => {

    // Adds a listener for window resizing
      window.addEventListener("resize", handlerFunction);

      // Removes the listener on component unmount
      return() => window.removeEventListener("resize", handlerFunction);

    }, []);


    
    const data = [

        { id: "01", title: "Option 01" },
        { id: "02", title: "Option 02" },
        { id: "03", title: "Option 03" },
        { id: "04", title: "Option 04" },
    ];

   // Updates the selected option's ID
    const handleClick = (eventId) => {
        setItemClickedId(eventId);
    }

    return(

        <div className="navbarContainer">
            <nav>
            {!isMobile && 
            
            data.map((item) => (

                <div className="navbarOptions" 
                    key = {item.id}
                    id = {item.id}
                    onClick={() => handleClick(item.id)}
                    style = {{
                        borderBottom: itemClickedId === item.id ? "5px Solid Black" : "",
                    }}
                >
                    {item.title}
                </div>
            ))}
            </nav>
        </div>
    )











    



}


export default Navbar;


