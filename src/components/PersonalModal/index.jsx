import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';

const PersonalModal= () => {
    const [fullscreen,
        setFullscreen] = useState(true);
    const [show,
        setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return <div className="personal-modal">
        <button className="me-2" onClick={() => handleShow(true)}>
            Full screen
        </button>
        <Modal show={show} fullscreen={fullscreen} onHide= {() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Modal body content
            </Modal.Body>
        </Modal>
    </div>;
}

export default PersonalModal;