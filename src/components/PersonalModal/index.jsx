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
    const handleClose = () => setShow(false);
    function handleShow(clickedProject, gAnalyticsVariable) {
        setFullscreen(true);
        setShow(true);
        setSelected(clickedProject);
        window.dataLayer.push({
            event: gAnalyticsVariable
            });
            
          
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
                        title: 'Alejandra Leal Mental Heath Services Website',
                        h5:'Mental Health is Weath',
                        paragraph:'Alejandra came to me asking for a simple website where she could provide information on experience, services and resources. The goal she wanted for her website was not to sell any services or highlight benefits. She wanted a place to show her credibility on her experience and knowledge. We kept the site as a great simple design that can easily be updated to be a lead generating source. ',
                        linkClass:'normal',
                        link:'https://www.alejandraleallcsw.com/',
                        image: {
                            src1: 'https://res.cloudinary.com/izzyhv/image/upload/v1649211410/portfolio/alejandraLeal-home_maa0zd.jpg',
                            alt1: 'Home page for Alejandra Leal Theraputic sessions',
                            src2: 'https://res.cloudinary.com/izzyhv/image/upload/v1649211410/portfolio/AlejandraLeal-services_x4xyps.jpg',
                            alt2: 'Alejandra Leal Services Page',
                            src3: 'https://res.cloudinary.com/izzyhv/image/upload/v1649211415/portfolio/AlejandraLeal-experience_uwy5fg.jpg',
                            alt3: 'Alejandra Leal Experience Page'
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
                        title: 'Elite Sports Confidence Website',
                        h5:'From Nothing to Everything',
                        paragraph:'Jonathan Barber came to me and asked me to update his Wix based website to be higher converting with a smoother customer journey. He had no idea where to start or what a website should look like. I was able to execute his vision by creating the branding, the message, the mission and the products to sell. Before he had a standard template on the site with no purpose on the website. To the right we see the previous page to the updated three pages in white. We also set up his email capture to help his email marketing and selling his courses.',
                        linkClass:'normal',
                        link:'https://www.elitesportsconfidence.com/',
                        image: {
                            src1: 'https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/previous-elitesportsconfidence-min_yhbccj.jpg',
                            alt1: 'Previous Elite Sports Confidence Webpage',
                            src2: 'https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/elitesportsconfidence-new_d6sjos.png',
                            alt2: 'Updated ESC Webpage',
                            src3: 'https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/esc-course_u7x5eh.jpg',
                            alt3: 'Elite Sports Confidence Course Webpage',
                            src4: 'https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/syndicate-page_pdhv7k.jpg',
                            alt4: 'Elite Sports Confidence community Webpage'
                        }
                    }
                });
                break;
            case 'project6':
                setProject({
                    project: {
                        title: 'Xolo Supply Company Website',
                        h5:'Perfectly Optimized',
                        paragraph:'Owner of Xolo Supply Company wanted to grow his online presence and create brand awareness. The client had only Instagram marketing directing to their website. We focused on optimizing the website for more sales or higher conversions. We started with adding the basics based on research and competitive market research. That included email capture, a headline to each page and page layout for information consumption. We further added A/B testing to each page to assure webpage was optimized for customer journey and added Google Tag Manager events to paint the customer journey and actions. We lowered bounce rate by 23% and drop off rate by 20% going from the home page to the community or shop page. We also added email capture software and automated email sequences and email campaigns weekly. We raised conversions from 1.8% to over 3.75% implementing these changes.',
                        link:'https://www.xolosupply.com/',
                        image: {
                            src1: 'https://res.cloudinary.com/izzyhv/image/upload/v1649205882/portfolio/xolo-home-1_vc0scq.png',
                            alt1: 'Xolo supply home page Webpage',
                            src2: 'https://res.cloudinary.com/izzyhv/image/upload/v1649205881/portfolio/xolo-home-2_qpdo6a.png',
                            alt2: 'Xolo supply home page bottom Webpage',
                            src3: 'https://res.cloudinary.com/izzyhv/image/upload/v1649205599/portfolio/xolo-supply-shop-min_mvzhvn.png',
                            alt3: 'Xolo supply shop page Webpage',
                            src4: 'https://res.cloudinary.com/izzyhv/image/upload/v1649206013/portfolio/xolo-product_mjiouk.png',
                            alt4: 'xolo supply product Webpage'
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
        <h6 data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-easing="ease-out-cubic">Look at my</h6>
                    <div className="separator-container">
                        <div className="separator line-separator">⌘</div>
                    </div>
        <h3 data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-easing="ease-out-cubic"> projects</h3>
        </div>
        <div className="container">
            <div className="top-projects">
                <div data-aos="fade-left"
                                data-aos-delay="500"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="project" onClick={() => handleShow({selected: 'project1'}, 'ivantiLook')}>
                <h3>Ivanti & <br/> 
                    Infinite Peripherals Landing Page
                </h3>
                    <div className="background"></div>
                    <img src="https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto,c_thumb/v1/portfolio/ivanti-infinite-peripherals.jpg" alt="" loading="lazy"/>
                </div>
                <div data-aos="fade-left"
                                data-aos-delay="1000"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="project" onClick={() => handleShow({selected: 'project2'}, 'alexLook')}>
                    <h3>Alejandra Leal Mental Health Website</h3>
                    <div className="background"></div>
                    <img src="https://res.cloudinary.com/izzyhv/image/upload/v1649212324/portfolio/alealhome.png" alt="" loading="lazy"/>
                </div>
                <div data-aos="fade-left"
                                data-aos-delay="1500"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="project" onClick={() => handleShow({selected: 'project3'}, 'nrfLook')}>
                    <h3>Post NRF 2020 Landing Page</h3>
                    <div className="background"></div>
                    <img src="https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/post-nrf-infinite-peripherals-hero_xolrow.jpg" alt="" loading="lazy"/>
                </div>
            </div>
            <div className="bottom-projects">
                <div data-aos="fade-left"
                                data-aos-delay="750"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="project" onClick={() => handleShow({selected: 'project4'}, 'herosLook')}>
                    <h3>Essential Heros Landing Page</h3>
                    <div className="background"></div>
                    <img src="https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1/portfolio/protect_your_heros.jpg" alt="" loading="lazy"/>
                </div>
                <div data-aos="fade-left"
                                data-aos-delay="800"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="project" onClick={() => handleShow({selected: 'project5'}, 'coachLook')}>
                    <h3>Elite Sports Confidence Website</h3>
                    <div className="background"></div>
                    <img src="https://res.cloudinary.com/izzyhv/image/upload/g_auto,c_fill,f_auto,q_auto/v1/portfolio/esc-home_nywtwl.jpg" alt="" loading="lazy"/>
                </div>
                <div data-aos="fade-left"
                                data-aos-delay="850"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="project" onClick={() => handleShow({selected: 'project6'},'xoloLook')}>
                <h3>Xolo Supply Co CRO</h3>
                    <div className="background"></div>
                    <img src="https://res.cloudinary.com/izzyhv/image/upload/g_auto,c_fill,f_auto,q_auto/v1/portfolio/xolosupply-hero_r65hzg.jpg" alt="Xolo Supply Hero" loading="lazy"/>
                </div>
            </div>
        </div>
        <Modal show={show} fullscreen={fullscreen} onHide= {() => {handleClose(); setProject({project:null});setSelected({selected:null}); }}>
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
                            <Link to={{ pathname: selectedProject.project.link }} className={selectedProject.project.linkClass} rel="noopener noreferrer" target="_blank" >Click here </Link>
                            {/* <Link to={selectedProject.project.link} className={selectedProject.project.linkClass} target="_blank" rel="noopener noreferrer">Click here </Link> */}
                        </div>
                        <div className="image-box">
                            <div className="image-box_top">
                                <img src={selectedProject.project.image.src1} alt={selectedProject.project.image.alt1} loading="lazy"/>
                                <img src={selectedProject.project.image.src2} alt={selectedProject.project.image.alt2} loading="lazy"/>
                            </div>
                            <div className="image-box_bottom">
                                <img src={selectedProject.project.image.src3} alt={selectedProject.project.image.alt3} loading="lazy"/>
                                <img src={selectedProject.project.image.src4} alt={selectedProject.project.image.alt4} loading="lazy"/>
                            </div>
                            <div className="image-box_extra">
                                <img src={selectedProject.project.image.src5} alt={selectedProject.project.image.alt5} loading="lazy"/>
                                <img src={selectedProject.project.image.src6} alt={selectedProject.project.image.alt6} loading="lazy"/>
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