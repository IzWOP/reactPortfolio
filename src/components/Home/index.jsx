import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShippingFast, faMoneyBillWave} from '@fortawesome/free-solid-svg-icons';


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
                <section className='intro'>
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
                                    website and high convertinng landing pages.
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
                <section className="latest">
                    <div className="container">
                        <h6>let me define</h6>
                        <div class="separator-container">
                            <div class="separator line-separator">
                                ⌘
                            </div>
                        </div>
                        <h3>My Values</h3>
                        <div className="latest-cont">
                            <div className="latest-item">
                                <h6 className='numbers'>01.</h6>
                                <h4>Quality</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
                                    dolorum fugit harum quod molestias repellat. Nam quibusdam aliquam aperiam
                                    nostrum corrupti!</p>
                            </div>
                            <div className="latest-item">
                                <h6 className='numbers'>02.</h6>
                                <h4>Integrity</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
                                    dolorum fugit harum quod molestias repellat. Nam quibusdam aliquam aperiam
                                    nostrum corrupti!</p>
                            </div>
                            <div className="latest-item">
                                <h6 className='numbers'>03.</h6>
                                <h4>Attention to Details</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
                                    dolorum fugit harum quod molestias repellat. Nam quibusdam aliquam aperiam
                                    nostrum corrupti!</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="cta-products">
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
                            <h3>People ya Boy created pages with</h3>
                            <h6>Yeah it's pretty great</h6>
                            <p>
                                We understand our customer base aren 't made of millionaires yet(we aren' t
                                either).We have dedicated our resources to assure that the customer gets the
                                best quality for the lowest price.
                            </p>
                        </div>
                        <div className="val-prop-cont">
                            <div className="val-prop">
                                <div className="val-prop-icon">
                                    <img
                                        src="https://res.cloudinary.com/izzyhv / image / upload / v1624746430 / ecommerce / ACND / hecho - en - mexico - 2 _c0vlrc.svg "
                                        alt=" "/>
                                </div>
                                <h4>Made in Mexico</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
                                    dolorum fugit harum quod molestias repellat. Nam quibusdam aliquam aperiam
                                    nostrum corrupti!</p>
                            </div>
                            <div className="val-prop">
                                <div className="val-prop-icon">
                                    <FontAwesomeIcon icon={faMoneyBillWave}/>
                                </div>
                                <h4>
                                    Bang for your buck
                                </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
                                    dolorum fugit harum quod molestias repellat. Nam quibusdam aliquam aperiam
                                    nostrum corrupti!
                                </p>
                            </div>
                            <div className="val-prop">
                                <div className="val-prop-icon">
                                    <FontAwesomeIcon icon={faShippingFast}/>
                                </div>
                                <h4>
                                    Shipping is rapido
                                </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
                                    dolorum fugit harum quod molestias repellat. Nam quibusdam aliquam aperiam
                                    nostrum corrupti!</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div >

            <section className="stats">
                <h2>stats section</h2 >
                <div className="container">
                    <div className="text-box">
                        <h3>Numbers</h3>
                        <div className="separator-container">
                            <div className="separator line-separator">⌘</div>
                        </div>
                        <h6>Happy People</h6>
                    </div>
                    <div className="val-prop-cont">
                        <div className="val-prop">
                            <div className="val-prop-icon">
                                <img
                                    src="https://res.cloudinary.com/izzyhv / image / upload / v1624746430 / ecommerce / ACND / hecho - en - mexico - 2 _c0vlrc.svg "
                                    alt=" "/>
                            </div>
                            <h4>Made in Mexico</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
                                dolorum fugit harum quod molestias repellat. Nam quibusdam aliquam aperiam
                                nostrum corrupti!</p>
                        </div>
                        <div className="val-prop">
                            <div className="val-prop-icon">
                                <FontAwesomeIcon icon={faMoneyBillWave}/>
                            </div>
                            <h4>
                                Bang for your buck
                            </h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
                                dolorum fugit harum quod molestias repellat. Nam quibusdam aliquam aperiam
                                nostrum corrupti!
                            </p>
                        </div>
                        <div className="val-prop">
                            <div className="val-prop-icon">
                                <FontAwesomeIcon icon={faShippingFast}/>
                            </div>
                            <h4>
                                Shipping is rapido
                            </h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
                                dolorum fugit harum quod molestias repellat. Nam quibusdam aliquam aperiam
                                nostrum corrupti!</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
}
export default Home;