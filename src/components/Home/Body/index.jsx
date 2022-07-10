import React from "react";
import {Link} from 'react-scroll';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faChartLine,
    faCode,
    faMailBulk,
    faPoll,
    faSearch,
    faTachometerAlt
} from '@fortawesome/free-solid-svg-icons';
import './index.scss';
const Body = ()=>{
    const handleClick =()=>{
        window.dataLayer.push({
            event: 'cta1Click'
            });
        
      }
    return <>
                <div className='main-body'>
            <section className='intro' id='intro'>
                <div className="container">
                    <div className="text-cont">
                        <div className="overtext">
                            <h6
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic">The</h6>
                            <div className="separator-container">
                                <div className="separator line-separator">⌘</div>
                            </div>
                            <h3
                                data-aos="fade-up"
                                data-aos-delay="500"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic">
                                Digital <br/> Domain
                            </h3>
                        </div>
                        <div>
                            <p
                                data-aos="fade-up"
                                data-aos-delay="1000"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic">
                                <b>Pretty website designs are dead.</b><br/>Websites are the online storefront of many businesses today where they generate revenue.
                                <br/>The goal is to create a coherent and cohesive  website experience reflecting brand values and mission while being a seamless user experience to raise conversion rates and website engagement.
                                <br/>Pretty websites are nice, <b><i>efficient</i> pretty websites are better</b>. 
                                <br/>
                               
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="latest" id='values'>
                <div className="container">
                    <h6 data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic">Let Me Relay</h6>
                    <div className="separator-container">
                        <div className="separator line-separator">
                            ⌘
                        </div>
                    </div>
                    <h3 data-aos="fade-up"
                                data-aos-delay="500"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic">My Services</h3>
                    <div className="latest-cont">
                        <div data-aos="fade-left"
                                data-aos-delay="750"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="latest-item">
                            <h6 data-aos="fade-left"
                                data-aos-delay="750"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className='numbers'><FontAwesomeIcon icon={faChartLine} /></h6>
                                <h4>Conversion Rate Optimization</h4>
                                <p>
                                There are no perfect websites, but using split (A/B) testing can get it close. Lower ad spend, raise page speed, survey customer pain points and watch profits rise. 
                                </p>
                            
                        </div>
                        <div data-aos="fade-left"
                                data-aos-delay="1250"
                                data-aos-duration="1500" className="latest-item">
                            <h6 data-aos="fade-left"
                                data-aos-delay="1250"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className='numbers'><FontAwesomeIcon icon={faPoll} /></h6>
                                <h4>Landing Pages/Funnels</h4>
                            <p>Using efficient landing pages to move users from top of funnel to the bottom/sale as quickly as possible. Websites sometimes are nice, small quick landing pages to move users is even better.
                            </p>
                        
                        </div>
                        <div data-aos="fade-left"
                                data-aos-delay="1750"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="latest-item">
                            <h6 data-aos="fade-left"
                                data-aos-delay="1750"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className='numbers'><FontAwesomeIcon icon={faSearch}/></h6>
                            <h4>Search Engine Optimization</h4>
                            <p>Generating traffic without spending on ads or social media. Organic traffic is free, organic traffic is forever.
                            </p>
                        </div>
                        <div data-aos="fade-left"
                                data-aos-delay="750"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic"  className="latest-item">
                            <h6 data-aos="fade-left"
                                data-aos-delay="2250"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic"  className='numbers'><FontAwesomeIcon icon={faTachometerAlt} /></h6>
                                <h4>Website Optimization</h4>
                            <p>Lower the amount of people leaving, speed up webpages, remove unused scipts, reduce image sizes.</p>
                          
                        </div>
                        <div data-aos="fade-left"
                                data-aos-delay="1250"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="latest-item">
                            <h6 data-aos="fade-left"
                                data-aos-delay="2750"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic"  className='numbers'><FontAwesomeIcon icon={faCode}/></h6>
                            <h4>Web Development</h4>
                            <p>Custom solutions for themes on any platform. Shopify, Wix,WordPress, JavaScript Technologies.</p>
                        </div>
                        <div  data-aos="fade-left"
                                data-aos-delay="1750"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="latest-item">
                            <h6 data-aos="fade-left"
                                data-aos-delay="3000"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic"  className='numbers'><FontAwesomeIcon icon={faMailBulk} /></h6>
                                <h4>Email Marketing</h4>
                            <p>Setting up flows for the abandoned carts, segmentations of users, newsletters, campaigns all to get your users to convert.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cta-products" id='testimonial'>
                <div className="container">
                    <h3>"Isaac is a master of websites. We broke down our wants and needs and he helped us get there. It was super easy to let him come in and get to work while becoming part of the team."
                        <br/>- Zane Mussulman.
                    </h3>
                    <p>Owner/CEO of
                        <br/>Clutch City Coatings</p>
                    <Link 
                    to='contact'
                    data-aos="fade-up"
                                data-aos-delay="3500"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" spy={true} smooth={true} offset={-70} duration={800} >
                        <button onClick={handleClick} className='cta'>I'm in!</button>
                    </Link>
                </div>
            </section>
            <section className="val-props">
                <div className="container">
                    <div className="text-box">
                        <h6>Special Projects</h6>
                        <div className="separator-container">
                            <div className="separator line-separator">
                                ⌘
                            </div>
                        </div>
                        <h3>Include Working With</h3>
                    </div>
                    <div className="val-prop-cont">
                        <div data-aos="fade-left"
                                data-aos-delay="500"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="val-prop">
                            <img
                                src="https://res.cloudinary.com/izzyhv/image/upload/q_auto/v1632174385/portfolio/apple-logo_bdlu8x.svg"
                                alt="Apple Partner Logo"/>
                        </div>
                        <div data-aos="fade-left"
                                data-aos-delay="1000"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="val-prop">
                            <img
                                src="https://res.cloudinary.com/izzyhv/image/upload/q_auto/v1632174384/portfolio/samsung_pnyxql.png"
                                alt="Samsung Logo Partner"/>
                        </div>
                        <div data-aos="fade-left"
                                data-aos-delay="1500"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="val-prop ivanti">
                            <img
                                src="https://res.cloudinary.com/izzyhv/image/upload/v1640628207/portfolio/Xolo-Supply-Logo_Black.png"
                                alt="Xolo Supply Co client logo"/>
                        </div>
                        <div data-aos="fade-left"
                                data-aos-delay="2000"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="val-prop">
                            <img
                                src="https://res.cloudinary.com/izzyhv/image/upload/v1632174384/portfolio/infinite-peripherals-logo-stacked_ocesax.svg"
                                alt="Infinite Peripherials Logo Partner"/>
                        </div>
                        <div data-aos="fade-left"
                                data-aos-delay="2500"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="val-prop">

                            <img
                                src="https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1634620915/portfolio/clutch_city_coatings_logo.jpg"
                                alt="Clutch City Coatings Client Logo"/>

                        </div>
                        <div data-aos="fade-left"
                                data-aos-delay="3000"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="val-prop">

                            <img
                                src="https://res.cloudinary.com/izzyhv/image/upload/v1648257126/portfolio/elite_sports_confidence_logo_black.png"
                                alt="Elite Sports Confidence Client Logo"/>

                        </div>
                    </div>
                </div>
            </section>
            <section className='me' id='me'>
                <div className="container">
                    <div className="section-header">
                        <h6 data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-easing="ease-out-cubic">Get to Know Me</h6>
                        <div className="separator-container">
                            <div className="separator line-separator">
                                ⌘
                            </div>
                        </div>
                        <h3 data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-easing="ease-out-cubic">Personally</h3>
                    </div>
                    <div  data-aos="fade-up"
                                data-aos-delay="500"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="imgCont">
                        <img
                            src="https://res.cloudinary.com/izzyhv/image/upload/f_auto,w_250,h_350,q_auto,c_thumb/v1/portfolio/Isaac_mountain.jpg"
                            alt="Isaac Vazquez Profile"/>
                    </div>
                    <div className="text-cont">
                        <p data-aos="fade-left"
                        data-aos-duration="1500"
                        data-aos-easing="ease-out-cubic">
                            If you don't find me at home, you'll probably find me
                            hiking the volcanoes in Mexico City, bike rides down Newport Beach with my brother, backpacking through Latin America, or watching
                            something Batman related.
                            <br/>
                            <br/>
                           Being active and traveling has creates the inspiration and ideas to apply towards solutions within my clients website projects.
                            <br/>
                            <br/>
                            My purpose is to help the people or businesses around me grow not only in
                            business, but in life as well.<br/>
                        </p>
                    </div>
                </div>
            </section>
        </div >
        </>
}

export default Body;