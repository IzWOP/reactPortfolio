import React, {useState, useEffect} from "react";
import { ModalDialog } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

//stylesheet
import './index.scss';

const PersonalModal = () => {
    const [fullscreen,
        setFullscreen] = useState(true);
    const [selectedProject,
        setProject] = useState({project: null});
    const [userSelected,
        setSelected] = useState({selected: null});
    const [show,
        setShow] = useState(false);
    function handleShow(clickedProject) {
        setFullscreen(true);
        setShow(true);
        setSelected(clickedProject);
    }
    useEffect(() => {
        switch (userSelected.selected) {
            case 'project1':
                setProject({
                    project: {
                        title: 'Example Project',
                        image: {
                            src1: 'https://picsum.photos/1600/2000',
                            alt1: 'Ivanti Webpage'
                        }
                    }
                });
                break;
            default:
                setProject({project:null});
                break;
        }
    }, [userSelected])

    return <section className="personal-modal">
        <div className="container">
            <div className="top-projects">
                <div className="project" onClick={() => handleShow({selected: 'project1'})}>
                    <div className="backgorund"></div>
                    <img src="https://picsum.photos/1600/2000" alt=""/>
                </div>
                <div className="project" onClick={() => handleShow(true)}>
                    <div className="backgorund"></div>
                    <img src="https://picsum.photos/1600/2000" alt=""/>
                </div>
                <div className="project" onClick={() => handleShow(true)}>
                    <div className="backgorund"></div>
                    <img src="https://picsum.photos/1600/2000" alt=""/>
                </div>
            </div>
            <div className="bottom-projects">
                <div className="project" onClick={() => handleShow(true)}>
                    <div className="backgorund"></div>
                    <img src="https://picsum.photos/1600/2000" alt=""/>
                </div>
                <div className="project" onClick={() => handleShow(true)}>
                    <div className="backgorund"></div>
                    <img src="https://picsum.photos/1600/2000" alt=""/>
                </div>
                <div className="project" onClick={() => handleShow(true)}>
                    <div className="backgorund"></div>
                    <img src="https://picsum.photos/1600/2000" alt=""/>
                </div>
            </div>
        </div>
        <Modal show={show} fullscreen={fullscreen} onHide= {() => {setShow(false); setProject({project:null});setSelected({selected:null}); }}>
            {selectedProject.project !== null && <div className='project-details'>
                <Modal.Header closeButton> </Modal.Header>
                <Modal.Body>
                <div className="container">
                    <h5>{selectedProject.project.title}</h5>
                    <div class="separator-container">
                        <div class="separator line-separator">∎</div>
                    </div>
                    <div className="project-area">
                        <div className="text-box">
                            <h5></h5>
                            <p></p>
                        </div>
                        <div className="image-box">
                            <div className="image-box_top">
                                <img src={selectedProject.project.image.src1} alt={selectedProject.project.image.alt1} />
                                <img src={selectedProject.project.image.src1} alt={selectedProject.project.image.alt1} />
                            </div>
                            <div className="image-box_bottom">
                                <img src={selectedProject.project.image.src1} alt={selectedProject.project.image.alt1} />
                                <img src={selectedProject.project.image.src1} alt={selectedProject.project.image.alt1} />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body> 


            </div>}
            {/* <Modal.Header closeButton>
                 <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {}
            </Modal.Body> */}
        </Modal>
    </section>;
}

export default PersonalModal;