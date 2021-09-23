import React, {useState, useEffect} from 'react';
// import {API} from 'aws-amplify';
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
// email-js import{ init } from 'emailjs-com'; import '../../utils/api-config';
// stylesheets
import './index.scss';

const emailSchema = yup
    .object()
    .shape({
        email: yup
            .string()
            .email()
            .required('Email is required'),
        fullName: yup
            .string()
            .required(),
        subject: yup.string(),
        textArea: yup
            .string()
            .required()
    });
//teamplate ID: template_tfuqnxf
const Subscribe = () => {
    // init("user_Qp9GHgtVL7D2S3V30dYlK"); setting up email state/result for button
    // ui and error results
    const [subscribeStatus,
        setStatus] = useState({email_status: null})
    const [emailResult,
        setResult] = useState({email_result: null})
    const {register, handleSubmit, formState: {
            errors
        }} = useForm({resolver: yupResolver(emailSchema)});
    useForm({resolver: yupResolver(emailSchema)});

    //grabbing button and form for UI animations
    let button = document.querySelector('.submit');
    let formSection = document.querySelector('form');

    function errorReport() {
        button
            .classList
            .remove("clicked");
        button
            .classList
            .add("error");
        callback()
    }
    function validate() {
        button
            .classList
            .remove("clicked");
        button
            .classList
            .add("validate");
        callback()
    }

    function callback() {
        setTimeout(function () {
            if (button.classList.contains('validate')) {
                button
                    .classList
                    .remove("validate");
                formSection
                    .classList
                    .add('hide')
                setTimeout(function () {
                    formSection.style.display = 'none'
                }, 5000);
            } else if (button.classList.contains('error')) {
                button
                    .classList
                    .remove("error");
            } else {
                button
                    .classList
                    .remove("clicked");
            }
        }, 3050);
    }

    //send to internal API to hit mailchimp
    const onSubmitEmail = (formData) => {
        // //setting up API sending const apiName = 'sending_email_function'; const path
        // = '/send_email'; const myInit = {     body: {         email_address:
        // formData.email,         full_name: formData.fullName,          subject:
        // formData.subject,          message:formData.description     } }; //loading on
        // button button     .classList     .add('clicked'); return API .post(apiName,
        // path, myInit)     .then(res => {         if (res.errResult) {
        // //catch error first and set err UI             errorReport()       let
        // errResponse = JSON.parse(res.errResult.text) setResult({email_result:
        // errResponse.title})         } else if (res.result.status === 'pending') {
        //         //if successful we validate           validate()
        // setResult({email_result: res.result.status})         } else {
        // //just in case we clear and start over   setResult({email_result: null});
        //         callback(); return;         }     })     .catch((err) => {
        // //only for huge main website error catching/api         console.log(err);
        // setResult({email_result: 'error'})         callback()     });
    }

    //setting the status to notify the user if email subscription succeeded
    useEffect(() => {
        switch (emailResult.email_result) {
            case 'Member Exists':
                setStatus({email_status: "Sorry Bro, that email already exists."});
                setTimeout(function () {
                    setStatus({email_status: null})
                }, 3050);
                break;
            case 'Forgotten Email Not Subscribed':
                setStatus({email_status: "Sorry My Dude, that email is already in the system."});
                window.open('http://eepurl.com/hyzFTv', '_blank');
                break;
            case 'pending':
                setStatus({email_status: "Hell yes, you're in! Check your email to confirm."});
                break;
            case 'error':
                //huge website error default fallback
                setStatus({email_status: "Oh no, somethings broken. Subscribe in opened page"});
                window.open('http://eepurl.com/hyzFTv', '_blank');
                setTimeout(function () {
                    setStatus({email_status: null})
                }, 3050);
                break;
            default:
                //setting the state just another fallback
                setStatus({email_status: null});
                break;
        }
    }, [emailResult]);

    return (
        <section className='send_email'>
            <div className='background'></div>
            <div className="container">
                <h5
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-easing="ease-out-cubic">
                    Get in Touch
                </h5>
                <div className="separator-container">
                    <div className="separator line-separator">⌘</div>
                </div>
                <p>Would you want to talk about something?
                    <br/>Just send me your message and I will happily chat</p>
                <form
                    onSubmit={handleSubmit(onSubmitEmail)}
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-easing="ease-out-cubic">
                    <div className="form-top">

                        <input
                            className='form-item'
                            placeholder="Full name"
                            {...register("fullName", { required: true, maxLength: 20 })}/>
                        <input
                            className='form-item'
                            name="email"
                            placeholder="Email"
                            {...register("email",{pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"})}/> {errors.email && <p>{errors.email.message}</p>}
                        <input
                            className='form-item'
                            placeholder="Subject"
                            {...register("subject", { pattern: /^[A-Za-z]+$/i })}/>
                    </div>
                    <div className="form-bottom">
                        <textarea
                            className='form-item'
                            placeholder="Message"
                            name="message"
                            {...register("message")}/>
                    </div>
                    <button className='submit' type="submit" value="Submitt"></button>
                </form>
                {subscribeStatus.email_status !== null && <div className='email-status'>
                    {subscribeStatus.email_status}
                </div>}
            </div>
        </section>
    )
}

export default Subscribe;
