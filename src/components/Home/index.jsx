import React from 'react';
import {Link} from "react-router-dom";


import './index.scss';

const Home = () => {

    return <>
        <div className="home">
            <section className='billboard'>
                <div className='background'></div>
                <div className='container'>
                    <div className='billboard_textbox'>
                        <h1
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-easing="ease-out-cubic">
                            The Portfolio<br/>
                        </h1>
                        <h2
                            data-aos="fade-up"
                            data-aos-delay="2000"
                            data-aos-duration="2000"
                            data-aos-easing="ease-out-cubic">Badass web developer and a great marketer</h2>

                    </div>
                </div>
            </section>
            <div className='main-body'>
                <section className='intro' id='intro'>
                    <div className="container">
                        <div className="text-cont">
                            <div className="overtext">
                                <h6>Your Next</h6>
                                <div className="separator-container">
                                    <div className="separator line-separator">⌘</div>
                                </div>
                                <h3>
                                    Web Developer
                                </h3>
                            </div>
                            <div>

                                <p>
                                    I am Isaac and go by Izzy, a talented developer and leader based in California
                                    and operating for clients throughout USA. I have been building stunningly
                                    beautiful websites and making clients happy for the last year. Before that, I
                                    was in the marketing department at Infinite Peripherals helping build their
                                    website and high converting landing pages.
                                    <br/>
                                    <br/>
                                    Explore a wide variety of styles, personalise your features, and let me design
                                    the perfect product for you. It's what we do best and you can see proof in the
                                    products and reviews below.
                                    <br/>
                                    <br/>
                                    Feel free to get in touch with me to talk about your plans, wants, and needs. I
                                    think you’ll love working with me and the benefits received.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="latest" id='values'>
                    <div className="container">
                        <h6>let me define</h6>
                        <div className="separator-container">
                            <div className="separator line-separator">
                                ⌘
                            </div>
                        </div>
                        <h3>My Values</h3>
                        <div className="latest-cont">
                            <div className="latest-item">
                                <h6 className='numbers'>01.</h6>
                                <h4>Quality</h4>
                                <p>Quality is the most important value. Without quality, there would be no great experience on what you are purchasing. I strive for nothing less than great to make sure you feel satisfied with the work.</p>
                            </div>
                            <div className="latest-item">
                                <h6 className='numbers'>02.</h6>
                                <h4>Integrity</h4>
                                <p>Integrity in my business is all I strive for. If you succeed, then I succeed. Business should always have integrity to build trush and a strong lasting relationship. </p>
                            </div>
                            <div className="latest-item">
                                <h6 className='numbers'>03.</h6>
                                <h4>Attention to Details</h4>
                                <p>Attention to small details are important to avoid failure and achieve satisfaction. Details are the things that push websites to success.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="cta-products" id='testimonial'>
                    <div className="container">
                        <h3>"Isaac is very educated in what is necessary to have a sucessful website. He
                            communicated clearly and set expectations from the beginning and made the whole
                            process simple."
                            <br/>- Somebody (I hope).
                        </h3>
                        <p>Owner of some badass company</p>
                        <Link to='/'>
                            <button className='cta'>Contact Izzy</button>
                        </Link>
                    </div>
                </section>
                <section className="val-props">
                    <div className="container">
                        <div className="text-box">
                        <h6>My history</h6>
                            <div className="separator-container">
                            <div className="separator line-separator">
                                ⌘
                            </div>
                        </div>
                            <h3>Collaborating Companies</h3>
                        </div>
                        <div className="val-prop-cont">
                            <div className="val-prop">
               
                                    <img
                                        src="https://res.cloudinary.com/izzyhv/image/upload/v1632174385/portfolio/apple-logo_bdlu8x.svg"
                                        alt=" "/>
 
                            </div>
                            <div className="val-prop">
                               
                                    <img src="https://res.cloudinary.com/izzyhv/image/upload/v1632174384/portfolio/samsung_pnyxql.png" alt="" />
                            
                            </div>
                            <div className="val-prop">
                               
                                    <img src="https://res.cloudinary.com/izzyhv/image/upload/v1632174385/portfolio/ivanti-wavelink-velocity_uaacrw.jpg" alt="" />
                            
                            </div>
                            <div className="val-prop">
                               
                                    <img src="https://res.cloudinary.com/izzyhv/image/upload/v1632174384/portfolio/infinite-peripherals-logo-stacked_ocesax.svg" alt="" />
                                
                            </div>
                        </div>
                    </div>
                </section>
                <section className='me' id='me'>
                    <div className="container">
                    <div className="section-header">
                        <h6>Get to Know Me</h6>
                            <div className="separator-container">
                            <div className="separator line-separator">
                                ⌘
                            </div>
                        </div>
                            <h3>Personally</h3>
                        </div>
                        <div className="imgCont">
                            <img src="https://res.cloudinary.com/izzyhv/image/upload/f_auto,w_200,h_200,q_auto,c_thumb,r_max/v1/portfolio/Isaac_Vazquez_web_developer.jpg" alt="" />
                        </div>
                        <div className="text-cont">
                                <p>
                                    Things I like to do, if you don't find me at home, you'll probably find me hiking, bike rides with my brother, backpacking through a country, or watching something Batman related.
                                    <br/>
                                    <br/>
                                    I come from hispanic background and always enjoy some more stuff
                                    <br/>
                                    <br/>
                                    I was always into computers and fixing my myspace page. That's what started my path of web development later in life. I started with Python and then moved into Javascript and React. I still enjoy working on the million side projects I have that never get done. 
                                </p>
                        </div>
                    </div>
                </section>
            </div >
        </div>
    </>
}
export default Home;