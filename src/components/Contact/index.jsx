import React from "react";
const Contact = () => {
                return <div className="contact">
                    <div className="container">
                        <div className="text-area">
                            <div className="title add-animation">
                                <h2>Get in Touch</h2>
                                <div className="separator-container">
                                    <div className="separator line-separator">⌘</div>
                                </div>
                                <p>Would you want to talk about something? Just send me your message and I will
                                    happily chat</p>
                            </div>
                        </div>
                        <div className="contact-form">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Your Full Name</label>
                                        <input type="text" value="" placeholder="Michael Jordan" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group add-animation animation-2">
                                        <label>Your Email</label>
                                        <input
                                            type="text"
                                            value=""
                                            placeholder="michael.j@gmail.com"
                                            className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group add-animation animation-3">
                                        <label>Subject</label>
                                        <input type="text" value="" placeholder="Say hi to you" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group add-animation animation-1">
                                        <textarea
                                            className="form-control"
                                            placeholder="Here you can write your nice text"
                                            rows="8"></textarea>
                                    </div>
                                    <div>
                                        <div className="col-md-2 col-md-offset-5 col-sm-2 col-sm-offset-5">
                                            <button className="btn btn-lg btn-black btn-contact">
                                                SEND
                                                <i className="fa fa-paper-plane"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
}

export default Contact;