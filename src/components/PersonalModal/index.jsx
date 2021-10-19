import React, {useState, useEffect} from "react";
import Modal from 'react-bootstrap/Modal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

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
                        h5:'Target: Supply Chain',
                        paragraph:'This landing page was created to share Ivantis Wavelink being compatible with Infinite Peripherals devices and software. To help supply chain within companies become more efficient with this combination. It was a landing page generated to generate leads and convert them on an external form. The landing page had an external form page to capture leads. To view the active landing page: ',
                        linkClass:'normal',
                        link:'https://go.ipcmobile.com/ivanti-wavelink-ios?utm_campaign=inbound_marketing&utm_source=social&utm_medium=landing_page&utm_term=null-replace&utm_content=alliance&platform=hootsuite&utm_campaign=inbound_marketing',
                        image: {
                            src4: 'https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/Ivanti-Wavelink-Infinite-Peripherals-full_smh62e.jpg',
                            alt4: 'Ivanti wavelink and Infinite peripheral full webpage',
                            src1: 'https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/Ivanti-Wavelink_-Infinite-Peripherals-top_qswdx8.jpg',
                            alt1: 'Ivanti wavelink top of the webpage',
                            src2: 'https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/Ivanti-Wavelink-Infinite-Peripherals-middle_qfiiuu.jpg',
                            alt2: 'Ivanti wavelink middle of the webpage',
                            src3: 'https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/Ivanti-Wavelink-Infinite-Peripherals-bottom_uzesec.jpg',
                            alt3: 'Ivanti Wavelink bottom of the webpage'
                        }
                    }
                });
                break;
            case 'project2':
                setProject({
                    project: {
                        title: 'Travel Industry Landing Page',
                        h5:'Target: Airlines',
                        paragraph:' This page was used to get the attention of the top airlines. The goal was to capture more leads and educate them with a ebook download. Major key points were not needing wifi to capture credit card information to process transactions later. Another key point was to educate them on the faster workflow both in the airplane and on the ground when the plan landed. Assuring that each process ran smoothly with Infinite Peripheral devices. Other key points include, easy to create workflow software, iPhone/iPod device usage and quick data capturing. To view active landing page:',
                        linkClass:'normal',
                        link:'https://go.ipcmobile.com/travel-q4-2019',
                        image: {
                            src1: 'https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/New-In-Flight-Revenues-top_kfeahc.jpg',
                            alt1: 'Hero image and ebook download for airline leads on development page',
                            src2: 'https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/New-In-Flight-Revenues-Right-middle-2_cxlxib.jpg',
                            alt2: 'Airline above the wing website development',
                            src3: 'https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/New-In-Flight-Revenues-middle_gr3yrm.jpg',
                            alt3: 'rfid, nfc on airline development page',
                            src4: 'https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/5-Strategies-You-Can-Implement-to-Unlock-New-In-Flight-Revenues-bottom_x8lhr9.jpg',
                            alt4: 'Call to action on airline development page',
                            src5: 'https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/New-In-Flight-Revenues-full.jpg',
                            alt5: 'Full developed page for airline leads'
                        }
                    }
                });
                break;
            case 'project3':
                setProject({
                    project: {
                        title: 'Post NRF 2020 Landing Page',
                        h5:'Target: Retargeting NRF Attendies',
                        paragraph:'A Post NRF 2020 to summarize the products from the booth that they saw and anything up coming. The page included all the videos that were playing on the booth video board. This also retargeted those leads that were captured during the show to educate them on other products or point them to more educatation on the resources. To view active landing page:',
                        linkClass:'normal',
                        link:'https://go.ipcmobile.com/post-nrf-2020',
                        image: {
                            src1: 'https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/post-nrf-infinite-peripherals-hero_xolrow.jpg',
                            alt1: 'Developed hero for post NRF 2020 show.',
                            src2: 'https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/Post-NRF-2020-Infinite-Peripherals-middle_gw701q.jpg',
                            alt2: 'developed section that includes intro and facts',
                            src3: 'https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/Post-NRF-2020-Infinite-Peripherals-bottom_lugtka.jpg',
                            alt3: 'developed section for videos',
                            src4: 'https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/Post-NRF-2020-Infinite-Peripherals-full_ywdowg.jpg',
                            alt4: 'Full developed page for post NRF meetings'
                        }
                    }
                });
                break;
            case 'project4':
                setProject({
                    project: {
                        title: 'Essential Heros Landing Page',
                        h5:'Target: Essential Companies',
                        paragraph:'Essential workers and companies were active during the pandemic and there was a need to target them to help ease their workflows. The purpose of the page was to educate them on the ability to have devices that could be cleaned off frequently and help unclog any of their backed up work flows with qucik data caputuring devices. the page was developed with quick 3 secon videos of devices entering the page. The page concluded with show casing the reasons why the company was well respected and gave examples of companies they did business with. The form on top was added to make it quick and easy to capture leads instead of a modal. To view active landing page:',
                        linkClass:'normal',
                        link:'https://go.ipcmobile.com/protect-your-heroes?platform=hootsuite&utm_campaign=inbound_marketing',
                        image: {
                            src1: 'https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/Protect-Your-Heroes-top_wqyycc.jpg',
                            alt1: 'Developed Protect your hero section',
                            src2: 'https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/Protect-Your-Heroes-middle_s1xq2x.jpg',
                            alt2: 'iPhone SE for medical work flow developed section',
                            src3: 'https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/Protect-Your-Heroes-bottom_jmo7mf.jpg',
                            alt3: 'medical for pandemic heros middle section',
                            src4: 'https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/Protect_-Your-Heroes-Infinite-Peripherals-full_yjghzf.jpg',
                            alt4: 'company logos developed section for CTA'
                        }
                    }
                });
                break;
            case 'project5':
                setProject({
                    project: {
                        title: 'Ivanti & Infinite Peripherals Landing Page',
                        h5:'Perfectly Told Story',
                        paragraph:'This landing page was created to share Ivantis Wavelink being compatible with Infinite Peripherals devices and software. It was a landing page generated to generate leads and convert them on an external form.To view active landing page:',
                        linkClass:'',
                        link:'',
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
                        linkClass:'',
                        link:'',
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

    return <section className="personal-modal" id='projects'>
        <div className="text-box">
        <h5>Look at my</h5>
                    <div className="separator-container">
                        <div className="separator line-separator">⌘</div>
                    </div>
        <h3> projects</h3>
        </div>
        <div className="container">
            <div className="top-projects">
                <div data-aos="fade-left"
                                data-aos-delay="500"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="project" onClick={() => handleShow({selected: 'project1'})}>
                <h3>Ivanti & <br/> 
                    Infinite Peripherals Landing Page
                </h3>
                    <div className="background"></div>
                    <img src="https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto,c_thumb/v1/portfolio/ivanti-infinite-peripherals.jpg" alt=""/>
                </div>
                <div data-aos="fade-left"
                                data-aos-delay="1000"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="project" onClick={() => handleShow({selected: 'project2'})}>
                    <h3>Travel Industry Landing Page</h3>
                    <div className="background"></div>
                    <img src="https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/flight-hero_vmwl0o.jpg" alt=""/>
                </div>
                <div data-aos="fade-left"
                                data-aos-delay="1500"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="project" onClick={() => handleShow({selected: 'project3'})}>
                    <h3>Post NRF 2020 Landing Page</h3>
                    <div className="background"></div>
                    <img src="https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/post-nrf-infinite-peripherals-hero_xolrow.jpg" alt=""/>
                </div>
            </div>
            <div className="bottom-projects">
                <div data-aos="fade-left"
                                data-aos-delay="750"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="project" onClick={() => handleShow({selected: 'project4'})}>
                    <h3>Essential Heros Landing Page</h3>
                    <div className="background"></div>
                    <img src="https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/protect_your_heros.jpg" alt=""/>
                </div>
                <div className="project" >
                {/* onClick={() => handleShow({selected: 'project5'})} */}
                    {/* <h3>title</h3> */}
                    <div className="background"></div>
                    {/* <img src="https://picsum.photos/1600/2000" alt=""/> */}
                </div>
                <div className="project" >
                {/* onClick={() => handleShow({selected: 'project6'})} */}
                {/* <h3>title</h3> */}
                    <div className="background"></div>
                    {/* <img src="https://picsum.photos/1600/2000" alt=""/> */}
                </div>
            </div>
        </div>
        <Modal show={show} fullscreen={fullscreen} onHide= {() => {setShow(false); setProject({project:null});setSelected({selected:null}); }}>
            {selectedProject.project !== null && <div className='project-details'>
                <Modal.Header closeButton> <FontAwesomeIcon  icon={faTimes}/></Modal.Header>
                <Modal.Body>
                <div className="container">
                    <h4>{selectedProject.project.title}</h4>
                    <div className="separator-container">
                        <div className="separator line-separator">⌘</div>
                    </div>
                    <div className="project-area">
                        <div className="text-box">
                            <h5>{selectedProject.project.h5}</h5>
                            <p>{selectedProject.project.paragraph}</p>
                            <Link to={selectedProject.project.link} className={selectedProject.project.linkClass} target="_blank" rel="noopener noreferrer">Click here </Link>
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
                            <div className="image-box_extra">
                                <img src={selectedProject.project.image.src5} alt={selectedProject.project.image.alt5} />
                                <img src={selectedProject.project.image.src6} alt={selectedProject.project.image.alt6} />
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