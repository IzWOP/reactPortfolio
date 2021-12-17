import React from 'react';
import Subscribe from './Subscribe';
import {animateScroll as scroll} from 'react-scroll';
import {Link as Link1} from 'react-scroll';
import { Link as Link2 } from 'react-router-dom';
//styling
import './index.scss';

//font awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    // const [scrollState, setScrollState] = useState("top");
    return (
        <footer>
            <Subscribe/>
            <section className='footer'>
                    <div className='links'>
                        <div onClick={scroll.scrollToTop} className="">
                            <h6>Top</h6>
                        </div>
                        <Link1 to='intro' spy={true} smooth={true} offset={-70} duration={300}>
                            <h6>Intro</h6>
                        </Link1>
                        <Link1 to='values' spy={true} smooth={true} offset={-70} duration={300}>
                            <h6>Services</h6>
                        </Link1>
                        <Link1 to='testimonial' spy={true} smooth={true} offset={-150} duration={300}>
                            <h6>Testimonial</h6>
                        </Link1>
                        <Link1 to='projects' spy={true} smooth={true} offset={-20} duration={300}>
                            <h6>Projects</h6>
                        </Link1>
                        <Link1 to='contact' spy={true} smooth={true} offset={-70} duration={300}>
                            <h6>Contact</h6>
                        </Link1>
                    </div>

 
                    <div className="socialmedia-links">
                        <Link2 target="_blank" to={{ pathname: 'https://www.instagram.com/izzyhv_/' }}  className="socialmedia-links_instagram">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </Link2>
                        <Link2  target="_blank" to={{ pathname: 'https://twitter.com/izzyhv_' }} className="socialmedia-links_twitter">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </Link2>
                        <Link2 target="_blank" to={{ pathname: 'https://www.linkedin.com/in/isaachv/' }} className="socialmedia-links_linkedin">
                            <FontAwesomeIcon icon={faLinkedinIn}/>
                        </Link2>
                    </div>
                        {/* copyright and signature at bottom of page */}
                    <div className="footer-center">
                        <h6 className='copyright'>
                            © {new Date().getFullYear()} Isaac Izzy Vazquez
                        </h6>
                    </div>

            </section>
        </footer>
    )
}

export default Footer
