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
                                data-aos-easing="ease-out-cubic">Your Next</h6>
                            <div className="separator-container">
                                <div className="separator line-separator">⌘</div>
                            </div>
                            <h3
                                data-aos="fade-up"
                                data-aos-delay="500"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic">
                                Digital <br/> Marketer
                            </h3>
                        </div>
                        <div>
                            <p
                                data-aos="fade-up"
                                data-aos-delay="1000"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic">
                                Hey! I'm Isaac, a digital marketer based in California operating for clients throughout the U.S. 
                                <br/>
                                My specialty is assuring a smooth customer journey through e-com and service based websites to help raise sales and leads. I raise sales and leads by focusing on raising conversion rates. I have raised conversion rates from &lt;3% to anywhere from 6 to 10% by A/B testing design layouts, updating copy, and editing offers.
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
                            <p>Website pages have a purpose, they need to contain the correct information
                                and lead them to make the actions that we want. Make sure that your marketing
                                spend isn't going to waste.
                            </p>
                            
                        </div>
                        <div data-aos="fade-left"
                                data-aos-delay="1250"
                                data-aos-duration="1500" className="latest-item">
                            <h6 data-aos="fade-left"
                                data-aos-delay="1250"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className='numbers'><FontAwesomeIcon icon={faPoll} /></h6>
                                <h4>Landing Pages</h4>
                            <p>Those catchy marketing campaigns send a customer to a landing page or your
                                business website. Creating high converting pages is essential to help lower ad spend and raise profits..
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
                            <p>Being on top of the search engine helps generate more organic traffic to your
                                business website and generate more returning customers. Assure that your on page
                                and technical SEO is working for you.
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
                            <p>Web optimization makes your business website load faster and be efficient.
                                Web optimization can get the resources your customers want and need quickly.
                                Helping them make decisions about your services/products faster.</p>
                          
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
                            <p>Websites can make themselves with your help, but sometimes you need a little
                                bit of extra help making, adding or fixing a feature. You may also need a whole
                                website or add a new website page. Help is available.</p>
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
                            <p>Email marketing helps you reach customers through emails and get returning users onto your website. Personlization with emails raises conversion rates.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cta-products" id='testimonial'>
                <div className="container">
                    <h3>"Isaac is very educated in what is necessary to have a sucessful website. He
                        communicated clearly and set expectations from the beginning and made the whole
                        process simple."
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
                            src="https://res.cloudinary.com/izzyhv/image/upload/f_auto,w_200,h_200,q_auto,c_thumb,r_max/v1/portfolio/Isaac_Vazquez_web_developer.jpg"
                            alt="Isaac Vazquez Profile"/>
                    </div>
                    <div className="text-cont">
                        <p data-aos="fade-left"
                        data-aos-duration="1500"
                        data-aos-easing="ease-out-cubic">
                            If you don't find me at home, you'll probably find me
                            hiking the volcanoes in Mexico City, bike rides down Newport beach with my brother, backpacking through central america, or watching
                            something Batman related.
                            <br/>
                            <br/>
                            I enjoy traveling and backpacking through different countries months at a time. Doing so gives me inspiration and ideas to be creative in my marketing projects. Traveling helps you gain different perpective into brands messaging and purpose. This helps me be able to connect with my clients a lot more and see their vision to help execute.
                            <br/>
                            <br/>
                            My purpose is to help the people or businesses around me grow not only in
                            business, but in life as well.<br/>
                            Let's talk soon friend.
                        </p>
                    </div>
                </div>
            </section>
        </div >
        </>
}

export default Body;