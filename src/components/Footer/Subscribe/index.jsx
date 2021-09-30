import React from 'react';
import {API} from 'aws-amplify';
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
// stylesheets
import './index.scss';

const emailSchema = yup
    .object()
    .shape({
        email: yup
            .string()
            .email()
            .required('Email is required'),
        full_name: yup
            .string()
            .required(),
        subject: yup.string(),
        message: yup
            .string()
            .required('Please enter a message')
    });
//teamplate ID: template_tfuqnxf
const Subscribe = () => {
    // init("user_Qp9GHgtVL7D2S3V30dYlK"); setting up email state/result for button
    // ui and error results
    // const [subscribeStatus,
    //     setStatus] = useState({email_status: null})
    // const [emailResult,
    //     setResult] = useState({email_result: null})
    const {register, handleSubmit, formState: {
            errors
        }} = useForm({resolver: yupResolver(emailSchema)});
    useForm({resolver: yupResolver(emailSchema)});

    // function errorReport() {
    //     button
    //         .classList
    //         .remove("clicked");
    //     button
    //         .classList
    //         .add("error");
    //     callback()
    // }
    // function validate() {
    //     button
    //         .classList
    //         .remove("clicked");
    //     button
    //         .classList
    //         .add("validate");
    //     callback()
    // }

    // function callback() {
    //     setTimeout(function () {
    //         if (button.classList.contains('validate')) {
    //             button
    //                 .classList
    //                 .remove("validate");
    //             formSection
    //                 .classList
    //                 .add('hide')
    //             setTimeout(function () {
    //                 formSection.style.display = 'none'
    //             }, 5000);
    //         } else if (button.classList.contains('error')) {
    //             button
    //                 .classList
    //                 .remove("error");
    //         } else {
    //             button
    //                 .classList
    //                 .remove("clicked");
    //         }
    //     }, 3050);
    // }

    //send to internal API to hit mailchimp
    const onSubmitEmail = async (body) => {
        const apiName = 'apidc59897f';
        const path ='/emailjsFunction';
        const myInit = { 
           body
        }
        return await API.post(apiName, path, myInit)
            .then(response => {
                // Add your code here
                console.log(response)
                // if (response.errResult){
                //     errorReport()
                //     let errResponse = JSON.parse(res.errResult.text)
                //     setResult({email_result: errResponse.title})
                // }
            })
            .catch(error => {
                console.log(error.response)
            })
            // return API.get(apiName, path, myInit)
            //     .then(response => {
            //         // Add your code herec
            //         console.log(response);
            //     })
            //     .catch(error => {
            //         console.log(error.response)
            //     })

        }
    //setting the status to notify the user if email subscription succeeded
    // useEffect(() => {
    //     switch (emailResult.email_result) {
    //         case 'Member Exists':
    //             break;
    //         case 'Forgotten Email Not Subscribed':
    //             break;
    //         case 'pending':
    //             break;
    //         case 'error':
    //                 break;
    //         default:
    //             //setting the state just another fallback
    //             setStatus({email_status: null});
    //             break;
    //     }
    // }, [emailResult]);

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
                                name="full_name"
                                {...register("full_name", { required: true, maxLength: 20 })}/> 
                            <input
                                className='form-item'
                                name="email"
                                placeholder="Email"
                                {...register("email",{pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"})}/> {errors.email && <p>{errors.email.message}</p>}
                            <input
                                className='form-item'
                                name="subject"
                                placeholder="Subject"
                                {...register("subject", { pattern: /^[A-Za-z]+$/i })}/>{errors.subject && <p>{errors.subject}</p>}
                    </div>
                    <div className="form-bottom">
                        <textarea
                            className='form-item'
                            placeholder="Message"
                            name="message"
                            {...register("message")}/>{errors.message && <p>{errors.message}</p>}
                    </div>
                    <button className='submit' type="submit" value="Submitt"></button>
                </form>

            </div>
        </section>
    )
}

export default Subscribe;
