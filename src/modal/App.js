import React, { useState } from "react";

import Modal from './components/Modal'

const App = () => {

    const [modalShow, setModalShow] = useState(false);



    const handleOpenClick = () => {
       setModalShow(true);
    }

    const handleCloseClick = () => {
        setModalShow(false);
    }


    return(

        <div>
              <h1> HomePage </h1>
              <button onClick={handleOpenClick}> Show Modal</button>
              {/* Render Modal conditionally */}
              {modalShow && <Modal handleClick={handleCloseClick}></Modal>}

        </div>
    )


}

export default App;
