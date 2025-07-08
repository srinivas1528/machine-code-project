import './Modal.css'

const Modal = ( {handleClick} ) => {
   
    return (

        <div className="modalOverlay">
            <div className="modalBody">
                <div className="modalHeader">
                    <h2> Header </h2>
                    <button className="closeButton" onClick={handleClick}> Close </button>
                </div>
                <div className="modalContent">
                    <p>This is a Modal body.</p>
                </div>
            </div>
        </div>
    )

}

export default Modal;