import React, { useState } from "react"


const App = () => {



   const data = [

    {id: "Header 01", content: "Content 01"},
    {id: "Header 02", content: "Content 02"},
    {id: "Header 03", content: "Content 03"},
    {id: "Header 04", content: "Content 04"},
   ];

   
   const [clickedListItem, setPopup] = useState(null);


   const handleHover = (index) => {
      setPopup(clickedListItem === index ? index : index);
   }

    return (
        <div className="componentContainer">
            {data.map((item, index) => (

                <div key={index}>
                    <li>
                         <a href="#">{item.header}</a> 
                    </li>
                    <li oncClick ={handleHover(index)}>{item.header}</li>
                    {clickedListItem && <popup list={item.content}/>}
                </div>
            ))}

        </div>
    )

}


export default App;


