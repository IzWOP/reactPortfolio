import React from 'react';
import Subscribe from './Subscribe';
//styling
import './index.scss';

//font awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <Subscribe/>
            <section className='footer'>
                    <div className='links'>
                        <div className="">
                            <h6>Home</h6>
                        </div>
                        <div className="">
                            <h6>Company</h6>
                        </div>
                        <div className="">
                            <h6>Portfolio</h6>
                        </div>
                        <div className="">
                            <h6>Contact</h6>
                        </div>
                    </div>

 
                    <div className="socialmedia-links">
                        <div className="socialmedia-links_instagram">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </div>
                        <div className="socialmedia-links_twitter">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </div>
                        <div className="socialmedia-links_linkedin">
                            <FontAwesomeIcon icon={faLinkedinIn}/>
                        </div>
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
