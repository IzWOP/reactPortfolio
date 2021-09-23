import React, {useState, useEffect} from "react";
import { ModalDialog } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

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
                        title: 'Ivanti & Infinite Peripherals Landing Page',
                        h5:'Perfectly Told Story',
                        paragraph:'This landing page was created to share Ivantis Wavelink being compatible with Infinite Peripherals devices and software. It was a landing page generated to generate leads and convert them on an external form.',
                        image: {
                            src1: 'https://picsum.photos/1600/2000',
                            alt1: 'Ivanti Webpage',
                            src2: 'https://picsum.photos/1600/2000',
                            alt2: 'Ivanti Webpage',
                            src3: 'https://picsum.photos/1600/2000',
                            alt3: 'Ivanti Webpage',
                            src4: 'https://picsum.photos/1600/2000',
                            alt4: 'Ivanti Webpage'
                        }
                    }
                });
                break;
            case 'project2':
                setProject({
                    project: {
                        title: 'Ivanti & Infinite Peripherals Landing Page',
                        h5:'Perfectly Told Story',
                        paragraph:'This landing page was created to share Ivantis Wavelink being compatible with Infinite Peripherals devices and software. It was a landing page generated to generate leads and convert them on an external form.',
                        image: {
                            src1: 'https://picsum.photos/1600/2000',
                            alt1: 'Ivanti Webpage',
                            src2: 'https://picsum.photos/1600/2000',
                            alt2: 'Ivanti Webpage',
                            src3: 'https://picsum.photos/1600/2000',
                            alt3: 'Ivanti Webpage',
                            src4: 'https://picsum.photos/1600/2000',
                            alt4: 'Ivanti Webpage'
                        }
                    }
                });
                break;
            case 'project3':
                setProject({
                    project: {
                        title: 'Ivanti & Infinite Peripherals Landing Page',
                        h5:'Perfectly Told Story',
                        paragraph:'This landing page was created to share Ivantis Wavelink being compatible with Infinite Peripherals devices and software. It was a landing page generated to generate leads and convert them on an external form.',
                        image: {
                            src1: 'https://picsum.photos/1600/2000',
                            alt1: 'Ivanti Webpage',
                            src2: 'https://picsum.photos/1600/2000',
                            alt2: 'Ivanti Webpage',
                            src3: 'https://picsum.photos/1600/2000',
                            alt3: 'Ivanti Webpage',
                            src4: 'https://picsum.photos/1600/2000',
                            alt4: 'Ivanti Webpage'
                        }
                    }
                });
                break;
            case 'project4':
                setProject({
                    project: {
                        title: 'Ivanti & Infinite Peripherals Landing Page',
                        h5:'Perfectly Told Story',
                        paragraph:'This landing page was created to share Ivantis Wavelink being compatible with Infinite Peripherals devices and software. It was a landing page generated to generate leads and convert them on an external form.',
                        image: {
                            src1: 'https://picsum.photos/1600/2000',
                            alt1: 'Ivanti Webpage',
                            src2: 'https://picsum.photos/1600/2000',
                            alt2: 'Ivanti Webpage',
                            src3: 'https://picsum.photos/1600/2000',
                            alt3: 'Ivanti Webpage',
                            src4: 'https://picsum.photos/1600/2000',
                            alt4: 'Ivanti Webpage'
                        }
                    }
                });
                break;
            case 'project5':
                setProject({
                    project: {
                        title: 'Ivanti & Infinite Peripherals Landing Page',
                        h5:'Perfectly Told Story',
                        paragraph:'This landing page was created to share Ivantis Wavelink being compatible with Infinite Peripherals devices and software. It was a landing page generated to generate leads and convert them on an external form.',
                        image: {
                            src1: 'https://picsum.photos/1600/2000',
                            alt1: 'Ivanti Webpage',
                            src2: 'https://picsum.photos/1600/2000',
                            alt2: 'Ivanti Webpage',
                            src3: 'https://picsum.photos/1600/2000',
                            alt3: 'Ivanti Webpage',
                            src4: 'https://picsum.photos/1600/2000',
                            alt4: 'Ivanti Webpage'
                        }
                    }
                });
                break;
            case 'project6':
                setProject({
                    project: {
                        title: 'Ivanti & Infinite Peripherals Landing Page',
                        h5:'Perfectly Told Story',
                        paragraph:'This landing page was created to share Ivantis Wavelink being compatible with Infinite Peripherals devices and software. It was a landing page generated to generate leads and convert them on an external form.',
                        image: {
                            src1: 'https://picsum.photos/1600/2000',
                            alt1: 'Ivanti Webpage',
                            src2: 'https://picsum.photos/1600/2000',
                            alt2: 'Ivanti Webpage',
                            src3: 'https://picsum.photos/1600/2000',
                            alt3: 'Ivanti Webpage',
                            src4: 'https://picsum.photos/1600/2000',
                            alt4: 'Ivanti Webpage'
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
        <div className="text-box">
        <h5>Look at my</h5>
                    <div class="separator-container">
                        <div class="separator line-separator">⌘</div>
                    </div>
        <h3> projects</h3>
        </div>
        <div className="container">
            <div className="top-projects">
                <div className="project" onClick={() => handleShow({selected: 'project1'})}>
                <h3>Ivanti & <br/>
                    Infinite Peripherals<br/> Landing Page
                </h3>
                    <div className="background"></div>
                    <img src="https://picsum.photos/1600/2000" alt=""/>
                </div>
                <div className="project" onClick={() => handleShow({selected: 'project2'})}>
                    <h3>title</h3>
                    <div className="background"></div>
                    <img src="https://picsum.photos/1600/2000" alt=""/>
                </div>
                <div className="project" onClick={() => handleShow({selected: 'project3'})}>
                    <h3>title</h3>
                    <div className="background"></div>
                    <img src="https://picsum.photos/1600/2000" alt=""/>
                </div>
            </div>
            <div className="bottom-projects">
                <div className="project" onClick={() => handleShow({selected: 'project4'})}>
                    <h3>title</h3>
                    <div className="background"></div>
                    <img src="https://picsum.photos/1600/2000" alt=""/>
                </div>
                <div className="project" onClick={() => handleShow({selected: 'project5'})}>
                    <h3>title</h3>
                    <div className="background"></div>
                    <img src="https://picsum.photos/1600/2000" alt=""/>
                </div>
                <div className="project" onClick={() => handleShow({selected: 'project6'})}>
                <h3>title</h3>
                    <div className="background"></div>
                    <img src="https://picsum.photos/1600/2000" alt=""/>
                </div>
            </div>
        </div>
        <Modal show={show} fullscreen={fullscreen} onHide= {() => {setShow(false); setProject({project:null});setSelected({selected:null}); }}>
            {selectedProject.project !== null && <div className='project-details'>
                <Modal.Header closeButton> <FontAwesomeIcon  icon={faTimes}/></Modal.Header>
                <Modal.Body>
                <div className="container">
                    <h4>{selectedProject.project.title}</h4>
                    <div class="separator-container">
                        <div class="separator line-separator">⌘</div>
                    </div>
                    <div className="project-area">
                        <div className="text-box">
                            <h5>{selectedProject.project.h5}</h5>
                            <p>{selectedProject.project.paragraph}</p>
                        </div>
                        <div className="image-box">
                            <div className="image-box_top">
                                <img src={selectedProject.project.image.src1} alt={selectedProject.project.image.alt1} />
                                <img src={selectedProject.project.image.src2} alt={selectedProject.project.image.alt2} />
                            </div>
                            <div className="image-box_bottom">
                                <img src={selectedProject.project.image.src3} alt={selectedProject.project.image.alt3} />
                                <img src={selectedProject.project.image.src4} alt={selectedProject.project.image.alt4} />
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