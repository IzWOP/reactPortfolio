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
                                data-aos-duration="2000"
                                data-aos-easing="ease-out-cubic">Your Next</h6>
                            <div className="separator-container">
                                <div className="separator line-separator">⌘</div>
                            </div>
                            <h3
                                data-aos="fade-up"
                                data-aos-delay="500"
                                data-aos-duration="2000"
                                data-aos-easing="ease-out-cubic">
                                Marketing Developer
                            </h3>
                        </div>
                        <div>
                            <p
                                data-aos="fade-up"
                                data-aos-delay="1000"
                                data-aos-duration="2000"
                                data-aos-easing="ease-out-cubic">
                                I'm Isaac, a talented digital growth marketer and leader based in California and
                                operating for clients throughout USA. I have been building stunningly beautiful
                                websites and making clients happy for the last year. Before that, I spent two
                                years in the marketing department at Infinite Peripherals helping build their
                                website and develop high converting landing pages.
                                <br/>
                                <br/>
                                My services are optimizing websites by making them faster and higher
                                on Google Search and create landing pages to help business land more
                                customers. I have helped businesses raise their revenue by 10-15%. Additional
                                services can include website optimization, email campaigns, set up
                                google business and customer journeys through their website.
                                <br/>
                                <br/>
                                Feel free to get in touch with me to talk about your plans, wants, and needs. I
                                think you’ll enjoy working with me and the benefits received.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="latest" id='values'>
                <div className="container">
                    <h6 data-aos="fade-up"
                                data-aos-duration="2000"
                                data-aos-easing="ease-out-cubic">Let Me Define</h6>
                    <div className="separator-container">
                        <div className="separator line-separator">
                            ⌘
                        </div>
                    </div>
                    <h3 data-aos="fade-up"
                                data-aos-delay="500"
                                data-aos-duration="2000"
                                data-aos-easing="ease-out-cubic">My Services</h3>
                    <div className="latest-cont">
                        <div data-aos="fade-left"
                                data-aos-delay="750"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="latest-item">
                            <h6 data-aos="fade-left"
                                data-aos-delay="750"
                                data-aos-duration="2000"
                                data-aos-easing="ease-out-cubic" className='numbers'><FontAwesomeIcon icon={faTachometerAlt}/></h6>
                            <h4>Website Optimization</h4>
                            <p>Web optimization makes your business website load faster and be efficient.
                                Web optimization can get the resources your customers want and need quickly.
                                Helping them make decisions about your services/products faster.</p>
                        </div>
                        <div data-aos="fade-left"
                                data-aos-delay="1250"
                                data-aos-duration="1500" className="latest-item">
                            <h6 data-aos="fade-left"
                                data-aos-delay="1250"
                                data-aos-duration="2000"
                                data-aos-easing="ease-out-cubic" className='numbers'><FontAwesomeIcon icon={faMailBulk}/></h6>
                            <h4>Email Marketing</h4>
                            <p>Email optimization helps you reach customers through emails and get them on
                                your page for more information. The more customers on your business website, the
                                more you can convert potential customers to paying customers.</p>
                        </div>
                        <div data-aos="fade-left"
                                data-aos-delay="1750"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="latest-item">
                            <h6 data-aos="fade-left"
                                data-aos-delay="1750"
                                data-aos-duration="2000"
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
                                data-aos-duration="2000"
                                data-aos-easing="ease-out-cubic"  className='numbers'><FontAwesomeIcon icon={faChartLine}/></h6>
                            <h4>Conversion Rate Optimization</h4>
                            <p>Website pages have a purpose, they need to contain the correct information
                                and lead them to make the actions that we want. Make sure that your marketing
                                spend isn't going to waste.
                            </p>
                        </div>
                        <div data-aos="fade-left"
                                data-aos-delay="1250"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="latest-item">
                            <h6 data-aos="fade-left"
                                data-aos-delay="2750"
                                data-aos-duration="2000"
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
                                data-aos-duration="2000"
                                data-aos-easing="ease-out-cubic"  className='numbers'><FontAwesomeIcon icon={faPoll}/></h6>
                            <h4>Landing Pages</h4>
                            <p>Those catchy marketing campaigns send a customer to a landing page or your
                                business website. Creating those pages in efficient formats can be optimized to
                                be fast is essential to capture those leads.
                            </p>
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
                                data-aos-duration="2000"
                                data-aos-easing="ease-out-cubic" >
                        <button onClick={handleClick} className='cta'>Contact Isaac</button>
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
                                alt=" "/>
                        </div>
                        <div data-aos="fade-left"
                                data-aos-delay="1000"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="val-prop">
                            <img
                                src="https://res.cloudinary.com/izzyhv/image/upload/q_auto/v1632174384/portfolio/samsung_pnyxql.png"
                                alt=""/>
                        </div>
                        <div data-aos="fade-left"
                                data-aos-delay="1500"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="val-prop ivanti">
                            <img
                                src="https://res.cloudinary.com/izzyhv/image/upload/q_auto/v1634591286/portfolio/ivanti-vector-logo_csltxr.jpg"
                                alt=""/>
                        </div>
                        <div data-aos="fade-left"
                                data-aos-delay="2000"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="val-prop">
                            <img
                                src="https://res.cloudinary.com/izzyhv/image/upload/v1632174384/portfolio/infinite-peripherals-logo-stacked_ocesax.svg"
                                alt=""/>
                        </div>
                        <div data-aos="fade-left"
                                data-aos-delay="2500"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="val-prop">

                            <img
                                src="https://res.cloudinary.com/izzyhv/image/upload/f_auto,q_auto/v1634620915/portfolio/clutch_city_coatings_logo.jpg"
                                alt=""/>

                        </div>
                    </div>
                </div>
            </section>
            <section className='me' id='me'>
                <div className="container">
                    <div className="section-header">
                        <h6 data-aos="fade-up"
                        data-aos-duration="1000"
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
                                data-aos-delay="1000"
                                data-aos-duration="1500"
                                data-aos-easing="ease-out-cubic" className="imgCont">
                        <img
                            src="https://res.cloudinary.com/izzyhv/image/upload/f_auto,w_200,h_200,q_auto,c_thumb,r_max/v1/portfolio/Isaac_Vazquez_web_developer.jpg"
                            alt=""/>
                    </div>
                    <div className="text-cont">
                        <p data-aos="fade-left"
                        data-aos-delay="500"
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